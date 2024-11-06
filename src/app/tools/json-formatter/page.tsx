"use client";

import React, { useState } from 'react';
import { FaCodeBranch } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

const JSONFormatter: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [formattedOutput, setFormattedOutput] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
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
        navigator.clipboard.writeText(formattedOutput).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Main JSON Formatter Box */}
            <div className="dark:bg-gray-800 bg-white dark:text-white text-gray-900 rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4 flex items-center">
                    <FaCodeBranch className="text-green-800 mr-2" /> JSON Formatter
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
                </div>
            </div>

            {/* Detailed Description Section */}
            <div className="mt-10 p-6 border-t border-gray-300 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-2">Understanding JSON Formatting Options</h2>

                <h3 className="text-xl font-bold mt-4 mb-2">Prettify JSON</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    The "Prettify JSON" option adds indentation and line breaks, making the JSON data easier to read and interpret. Prettifying JSON is especially useful for 
                    developers, as it visually separates nested structures, making debugging and reviewing JSON data more efficient.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Minify JSON</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    The "Minify JSON" option removes all unnecessary whitespace, creating a compact version of the JSON data. Minifying JSON is commonly used when sending data over
                    networks or when working with storage-constrained applications, as it reduces the data size without affecting its structure.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Error Handling and Validation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    This tool includes basic error handling to check for JSON syntax issues. If the input JSON format is invalid, an error message appears, 
                    prompting you to review and correct the syntax. Proper JSON format is essential to avoid runtime errors and ensure data can be properly parsed by applications.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Clipboard Functionality</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    With one click, the formatted JSON output can be copied directly to your clipboard, making it easy to transfer the formatted data 
                    to your code editor or other applications without manual copying.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Why Use a JSON Formatter?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    JSON formatting tools are invaluable for anyone handling JSON data, from web developers to data scientists. They simplify the 
                    process of making JSON data readable, reducing errors and facilitating quick data manipulation, especially when working with complex 
                    structures in APIs, configuration files, or data serialization.
                </p>
            </div>
        </div>
    );
};

export default JSONFormatter;
