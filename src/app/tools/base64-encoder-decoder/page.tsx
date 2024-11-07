"use client"; // Mark the component as a client component

import React, { useState, useEffect } from "react";

function Base64() {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [urlSafe, setUrlSafe] = useState<boolean>(false);
    const [withoutPadding, setWithoutPadding] = useState<boolean>(false);

    // Function to handle encoding
    const encodeInput = (text: string): string => {
        let encoded = btoa(text);

        // Apply URL safe encoding if the toggle is on
        if (urlSafe) {
            encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_');
        }

        // Remove padding if the toggle is on
        if (withoutPadding) {
            encoded = encoded.replace(/=+$/, '');
        }

        return encoded;
    };

    // Function to handle decoding
    const decodeOutput = (text: string): string => {
        let decoded = text;

        // Reverse URL safe encoding if applicable
        if (urlSafe) {
            decoded = decoded.replace(/-/g, '+').replace(/_/g, '/');
        }

        try {
            return atob(decoded);
        } catch (error) {
            return "Invalid Base64 string";
        }
    };

    // Handle changes in input text
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInput(value);
        setOutput(encodeInput(value));
    };

    // Handle changes in output text
    const handleOutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setOutput(value);
        setInput(decodeOutput(value));
    };

    // Re-encode input when toggles change
    useEffect(() => {
        setOutput(encodeInput(input));
    }, [urlSafe, withoutPadding, input]);

    return (
        <>
            <div className="p-6 max-w-3xl mx-auto dark:bg-dark dark:text-darkText bg-light text-lightText rounded-lg shadow-lg border border-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-center underline">Base64 Encoder/Decoder</h1>

                {/* Toggle switches */}
                <div className="flex space-x-4 mb-6">
                    <div className="flex items-start no-prose">
                        <div className="flex items-center h-5">
                            <label className="h-5 items-center cursor-default flex-shrink-0 inline-flex justify-center relative w-10">
                                <input
                                    className="absolute appearance-none bg-transparent border-none checked:bg-transparent checked:border-0 checked:focus:bg-transparent h-5 peer rounded w-10"
                                    type="checkbox"
                                    id="url_safe"
                                    name="url_safe"
                                    checked={urlSafe}
                                    onChange={() => setUrlSafe(!urlSafe)}
                                />
                                <span className="absolute duration-200 ease-in-out pointer-events-none rounded-full bg-gray-200 h-4 mx-auto peer-checked:bg-indigo-500 transition-colors w-9"></span>
                                <span className="absolute bg-white border border-gray-200 duration-200 ease-in-out h-5 inline-block left-0 peer-checked:translate-x-5 pointer-events-none ring-0 rounded-full shadow transform transition-transform translate-x-0 w-5"></span>
                            </label>
                        </div>
                        <div className="text-sm ml-3 pt-1">
                            <label className="text-sm font-medium block leading-none mb-1" htmlFor="url_safe">
                                URL safe
                            </label>
                        </div>
                    </div>

                    <div className="flex items-start no-prose">
                        <div className="flex items-center h-5">
                            <label className="h-5 items-center cursor-default flex-shrink-0 inline-flex justify-center relative w-10">
                                <input
                                    className="absolute appearance-none bg-transparent border-none checked:bg-transparent checked:border-0 checked:focus:bg-transparent h-5 peer rounded w-10"
                                    type="checkbox"
                                    id="without_padding"
                                    name="without_padding"
                                    checked={withoutPadding}
                                    onChange={() => setWithoutPadding(!withoutPadding)}
                                />
                                <span className="absolute duration-200 ease-in-out pointer-events-none rounded-full bg-gray-200 h-4 mx-auto peer-checked:bg-indigo-500 transition-colors w-9"></span>
                                <span className="absolute bg-white border border-gray-200 duration-200 ease-in-out h-5 inline-block left-0 peer-checked:translate-x-5 pointer-events-none ring-0 rounded-full shadow transform transition-transform translate-x-0 w-5"></span>
                            </label>
                        </div>
                        <div className="text-sm ml-3 pt-1">
                            <label className="text-sm font-medium block leading-none mb-1" htmlFor="without_padding">
                                Without padding
                            </label>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 ">Decoded Text</h3>
                        <textarea
                            value={input}
                            onChange={handleInputChange}
                            className="w-full p-4 border border-gray-300 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            rows={5}
                            placeholder="Enter text to encode"
                        ></textarea>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Encoded Text</h3>
                        <textarea
                            value={output}
                            onChange={handleOutputChange}
                            className="w-full p-4 border border-gray-300 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            rows={5}
                            placeholder="Enter Base64 text to decode"
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="mt-8 p-6 max-w-3xl mx-auto border-t border-gray-300 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4">Understanding Base64 Encoding</h2>

                {/* Overview */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Base64 is a binary-to-text encoding scheme that converts binary data into an ASCII string format using a radix-64 representation.
                    This encoding is commonly used to transmit data over media that are designed to deal with textual data. It ensures that the data remains intact without modification during transport.
                </p>

                {/* Breakdown of Base64 Components */}
                <ul className="text-base text-gray-600 dark:text-gray-400 mt-4 list-disc list-inside">
                    <li>
                        <span className="font-semibold">Encoding</span>: Converts binary data into a Base64 string format, making it safe for transmission in text-based formats.
                    </li>
                    <li>
                        <span className="font-semibold">Decoding</span>: Reverses the encoding process, converting a Base64 string back to its original binary format.
                    </li>
                    <li>
                        <span className="font-semibold">URL Safe Encoding</span>: Modifies the standard Base64 format to be safe for URLs by replacing '+' and '/' characters.
                    </li>
                    <li>
                        <span className="font-semibold">Padding Removal</span>: Offers an option to remove padding characters ('=') from the encoded output, reducing the size of the Base64 string.
                    </li>
                </ul>

                {/* Usage Scenarios */}
                <h3 className="text-xl font-semibold mt-6 mb-2">Common Uses of Base64 Encoding</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    Base64 encoding is versatile and widely used in various scenarios:
                </p>
                <ul className="text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>
                        <span className="font-semibold">Data Transmission</span>: Base64 is often used in data URLs, allowing images and other media to be embedded directly within HTML or CSS files.
                    </li>
                    <li>
                        <span className="font-semibold">Email Encoding</span>: Base64 encoding is used in email attachments to ensure that binary files can be sent over text-based protocols.
                    </li>
                    <li>
                        <span className="font-semibold">API Interactions</span>: Base64 is commonly used in API calls to encode and decode data, especially when working with file uploads or downloads.
                    </li>
                </ul>

                {/* Security Considerations */}
                <h3 className="text-xl font-semibold mt-6 mb-2">Security Best Practices</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    While Base64 encoding provides a convenient way to encode binary data, it is important to note that:
                </p>
                <ul className="text-base text-gray-600 dark:text-gray-400 list-disc list-inside">
                    <li>
                        <span className="font-semibold">Not for Security</span>: Base64 is not an encryption method and should not be used to secure sensitive data.
                    </li>
                    <li>
                        <span className="font-semibold">Potential for Increased Size</span>: Base64 encoding increases the size of the data by approximately 33%, which can be a consideration for large datasets.
                    </li>
                    <li>
                        <span className="font-semibold">Use HTTPS</span>: When transmitting Base64-encoded data over the network, ensure that you use HTTPS to secure the data in transit.
                    </li>
                </ul>

                {/* Example of Base64 Encoding */}
                <h3 className="text-xl font-semibold mt-6 mb-2">Example Base64 Encoding</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    Below is an example of how a simple text string is encoded in Base64 format:
                </p>
                <p className="text-sm bg-gray-200 dark:bg-gray-800 p-4 rounded">
                    <code className="block overflow-x-auto">
                        SGVsbG8sIFdvcmxkIQ==
                    </code>
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
                    The string "Hello, World!" is encoded in Base64 as shown above. This output can be used in various applications that require Base64 data representation.
                </p>
            </div>
        </>
    );
};

export default Base64;
