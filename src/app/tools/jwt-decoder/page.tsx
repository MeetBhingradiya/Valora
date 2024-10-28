"use client";

import React, { useState, useEffect, useRef } from 'react';
import { SignJWT, importJWK, JWK } from 'jose';
import TokenInput from './TokenInput';
import DecodedOutput from './DecodedOutput';
import keys from './utils/algorithmKeys';
import defaultTokens from './utils/defaultTokens';

// Define the TokenData type
type TokenData = {
    token: string;
    algorithm: string;
    header: {
        alg: string;
        typ: string;
    };
    payload: {
        sub: string;
        name: string;
        iat: number;
    };
};

// Define type for the 'keys' object
type AlgorithmKeys = {
    [key: string]: {
        secret?: string;
        jwk?: JWK;
    };
};

// Define keys type based on what you have in your project
const algorithmKeys: AlgorithmKeys = keys as AlgorithmKeys;

// List of supported algorithms
const algorithms = [
    'HS256', 'HS384', 'HS512',
    'RS256', 'RS384', 'RS512',
    'ES256', 'ES384', 'ES512',
    'PS256', 'PS384', 'PS512',
];

export default function JWTDecode() {
    const [jwtData, setJwtData] = useState<TokenData>({
        token: defaultTokens['HS256'],
        algorithm: 'HS256',
        header: { alg: 'HS256', typ: 'JWT' },
        payload: {
            sub: "1234567890",
            name: "John Doe",
            iat: 1516239022,
        },
    });

    const [decodedHeader, setDecodedHeader] = useState<Record<string, any>>({});
    const [decodedPayload, setDecodedPayload] = useState<Record<string, any>>({});
    const [error, setError] = useState<string>('');
    const skipEncodingRef = useRef<boolean>(false);
    const skipDecodingRef = useRef<boolean>(false);
    const manualTokenRef = useRef<boolean>(false);

    useEffect(() => {
        decodeJWT();
    }, [jwtData.token]);

    useEffect(() => {
        if (skipEncodingRef.current) {
            skipEncodingRef.current = false;
            return;
        }
        if (!manualTokenRef.current) {
            encodeJWT();
        }
    }, [jwtData.header, jwtData.payload]);

    useEffect(() => {
        setJwtData(prevData => ({
            ...prevData,
            token: defaultTokens[prevData.algorithm],
        }));
    }, [jwtData.algorithm]);

    useEffect(() => {
        const newAlgorithm = jwtData.header?.alg;
        if (newAlgorithm && algorithms.includes(newAlgorithm) && newAlgorithm !== jwtData.algorithm) {
            setJwtData(prevData => ({
                ...prevData,
                algorithm: newAlgorithm,
                header: { ...prevData.header, alg: newAlgorithm },
            }));
        }
    }, [jwtData.header]);

    const decodeBase64Url = (base64Url: string): string => {
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return atob(base64);
    };

    const decodeJWT = () => {
        try {
            if (!jwtData.token) {
                setDecodedHeader({});
                setDecodedPayload({});
                return;
            }

            const [headerBase64Url, payloadBase64Url] = jwtData.token.split('.');

            if (!headerBase64Url || !payloadBase64Url) {
                throw new Error('Invalid token');
            }

            const headerJson = decodeBase64Url(headerBase64Url);
            const payloadJson = decodeBase64Url(payloadBase64Url);

            const header = JSON.parse(headerJson);
            const payload = JSON.parse(payloadJson);

            setDecodedHeader(header);
            setDecodedPayload(payload);
        } catch (error) {
            console.error('Invalid token', error);
            setError('Invalid token');
            setDecodedHeader({});
            setDecodedPayload({});
        }
    };

    const encodeJWT = async () => {
        try {
            let key: CryptoKey | Uint8Array;
            const algorithmKey = algorithmKeys[jwtData.algorithm];

            if (jwtData.algorithm.startsWith('HS')) {
                // HMAC algorithms (HS256, HS384, HS512)
                if (!algorithmKey.secret) {
                    throw new Error(`Missing secret for algorithm ${jwtData.algorithm}`);
                }
                key = new TextEncoder().encode(algorithmKey.secret);
            } else if (jwtData.algorithm.startsWith('PS')) {
                // Skip encoding for PS* algorithms to avoid errors
                console.warn('PS* algorithms are currently unsupported for encoding.');
                setError(''); // Clear error message if previously set
                return;
            } else {
                // RSA, EC, and other algorithms
                if (!algorithmKey.jwk) {
                    throw new Error(`Missing JWK for algorithm ${jwtData.algorithm}`);
                }
                key = await importJWK(algorithmKey.jwk, jwtData.algorithm);
            }

            const token = await new SignJWT(jwtData.payload)
                .setProtectedHeader(jwtData.header)
                .sign(key);

            skipDecodingRef.current = true;
            setJwtData(prevData => ({
                ...prevData,
                token: token,
            }));
            setError('');
        } catch (error) {
            console.error('Error encoding JWT:', error);
            setError(jwtData.algorithm.startsWith('PS') ? '' : 'Error encoding JWT');
        }
    };

    const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        manualTokenRef.current = false;
        setJwtData(prevData => ({
            ...prevData,
            algorithm: e.target.value,
            header: { ...prevData.header, alg: e.target.value },
        }));
    };

    const handleTokenChange = (newToken: string) => {
        manualTokenRef.current = true;
        setJwtData(prevData => ({
            ...prevData,
            token: newToken,
        }));
    };

    const handleHeaderChange = (newHeader: Record<string, any>) => {
        setJwtData(prevData => ({
            ...prevData,
            header: newHeader,
        } as TokenData));
    };

    const handlePayloadChange = (newPayload: Record<string, any>) => {
        setJwtData(prevData => ({
            ...prevData,
            payload: newPayload,
        } as TokenData));
    };

    return (
        <div className="p-4 space-y-4 mx-auto max-w-5xl dark:text-darkText text-lightText" id="jwtdecoder">
            <div className="text-center mb-4">
                <h1 className="text-4xl font-bold m-8 dark:text-darkText text-center underline">Debugger</h1>
            </div>

            {/* Main Debugger Interface */}
            <div className="flex justify-center mb-4">
                <label htmlFor="algorithm" className="text-lg font-semibold m-2">Algorithm:</label>
                <select
                    id="algorithm"
                    value={jwtData.algorithm}
                    onChange={handleAlgorithmChange}
                    className="p-2 border rounded focus:ring focus:ring-blue-500"
                    style={{ minWidth: '100px' }}
                >
                    {algorithms.map((algo) => (
                        <option key={algo} value={algo}>{algo}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 p-4 border rounded-lg dark:bg-dark bg-light">
                    <h2 className="text-xl mb-2 font-bold">Encoded</h2>
                    {error && (
                        <div className="bg-red-500 text-white p-2 mb-2 rounded">
                            {error}
                        </div>
                    )}
                    <TokenInput token={jwtData.token} setToken={handleTokenChange} />
                </div>
                <div className="flex-1 p-4 border rounded-lg dark:bg-dark bg-light">
                    <h2 className="text-xl mb-2 font-bold">Decoded</h2>
                    <DecodedOutput
                        header={decodedHeader}
                        payload={decodedPayload}
                        setHeader={handleHeaderChange}
                        setPayload={handlePayloadChange}
                        algorithm={jwtData.algorithm}
                        currentKey={algorithmKeys}
                    />
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-8 p-6 border-t border-gray-300 dark:border-gray-700  ">
                <h2 className="text-2xl font-semibold mb-4">Understanding JSON Web Tokens (JWT)</h2>

                {/* Overview */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    JSON Web Tokens (JWT) are an open standard for securely transmitting information between parties as a JSON object.
                    They are commonly used for authentication and data exchange due to their security and efficiency. Each JWT consists
                    of three main components: a header, a payload, and a signature.
                </p>

                {/* Breakdown of JWT Components */}
                <ul className="text-base text-gray-600 dark:text-gray-400 mt-4 list-disc list-inside">
                    <li>
                        <span className="font-semibold">Header</span>: Contains metadata about the type of token and signing algorithm
                        (e.g., HS256, RS256).
                    </li>
                    <li>
                        <span className="font-semibold">Payload</span>: Contains claims, which are statements about the user or additional
                        data. Common claims include <code>sub</code> (subject), <code>iat</code> (issued at), and <code>exp</code> (expiration).
                    </li>
                    <li>
                        <span className="font-semibold">Signature</span>: Used to verify that the token’s content has not been altered. The
                        signature is created by combining the encoded header and payload and signing them with a secret or private key.
                    </li>
                </ul>

                {/* Usage Scenarios */}
                <h3 className="text-xl font-semibold mt-6 mb-2">Common Uses of JWTs</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    JWTs are versatile and widely used for secure communication. Here are some common use cases:
                </p>
                <ul className="text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li><span className="font-semibold">User Authentication</span>: JWTs are often used in Single Sign-On (SSO) and stateless
                        authentication systems, allowing users to log in and maintain a session without storing data on the server.
                    </li>
                    <li><span className="font-semibold">Information Exchange</span>: JWTs can securely share data between parties. The
                        signed token assures that the data is valid and has not been tampered with.
                    </li>
                    <li><span className="font-semibold">Authorization</span>: In OAuth 2.0, JWTs are used as access tokens to authorize
                        actions within a system securely.
                    </li>
                </ul>

                {/* Security Considerations */}
                <h3 className="text-xl font-semibold mt-6 mb-2">Security Best Practices</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    JWTs are secure if used correctly. Here are best practices to follow:
                </p>
                <ul className="text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li><span className="font-semibold">Use Strong Signing Algorithms</span>: Avoid using weak algorithms (e.g., HS256)
                        for critical applications. Use RSA or ECDSA algorithms if possible.
                    </li>
                    <li><span className="font-semibold">Set Expiration Times</span>: Always include an <code>exp</code> (expiration) claim
                        to limit the lifetime of the token.
                    </li>
                    <li><span className="font-semibold">Avoid Storing Sensitive Data</span>: Do not store sensitive information (e.g.,
                        passwords) in JWT payloads, as the payload is not encrypted by default.
                    </li>
                    <li><span className="font-semibold">Validate Tokens</span>: Verify JWTs on the server to ensure they haven’t been tampered
                        with before accepting them.
                    </li>
                </ul>

                {/* Example of JWT Structure */}
                <h3 className="text-xl font-semibold mt-6 mb-2">Example JWT Structure</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    Here’s an example of a JWT structure. A JWT typically looks like this:
                </p>
                <p className="text-sm bg-gray-200 dark:bg-gray-800 p-4 rounded">
                    <code className="block overflow-x-auto">
                        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                    </code>
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
                    The above JWT has three parts: the header, payload, and signature, separated by dots.
                </p>
            </div>
        </div>
    );

};