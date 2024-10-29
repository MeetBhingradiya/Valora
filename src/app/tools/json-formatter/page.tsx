"use client"

import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

const JSONFormatter: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [formattedOutput, setFormattedOutput] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [copySuccess] = useState<string>('');
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    };

    const formatJSON = () => {
        try {
            const parsedJSON = JSON.parse(input);
            const prettyJSON = JSON.stringify(parsedJSON, null, 4);
            setFormattedOutput(prettyJSON);
            setError(null);
        } catch (err) {
            setError('Invalid JSON format');
        }
    };

    const minifyJSON = () => {
        try {
            const parsedJSON = JSON.parse(input);
            const minifiedJSON = JSON.stringify(parsedJSON);
            setFormattedOutput(minifiedJSON);
            setError(null);
        } catch (err) {
            setError('Invalid JSON format');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(formattedOutput).then(
            () => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            }
        );
    };

    return (
        <div className="p-6 max-w-4xl mx-auto dark:bg-gray-800 bg-white dark:text-white text-gray-900 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 flex items-center">                                                                                                                                                
                <FaCode className="text-green-800 mr-2" /> JSON Formatter
            </h1>
            <textarea
                className="w-full p-4 mb-4 border rounded-md dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-900"
                rows={8}
                value={input}
                onChange={handleInputChange}
                placeholder="Paste JSON here..."
            />
            <div className="flex gap-4 mb-4">
                <button onClick={formatJSON} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Prettify JSON
                </button>
                <button onClick={minifyJSON} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Minify JSON
                </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="p-4 border rounded-md dark:bg-gray-700 bg-gray-100 relative">
                <h2 className="text-lg font-semibold mb-2">Formatted JSON Output:</h2>
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded text-center text-indigo-700"
                >
                    <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} />
                </button>
                <pre className="whitespace-pre-wrap mt-4">{formattedOutput}</pre>
                {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
            </div>
        </div>
    );
};

export default JSONFormatter;
