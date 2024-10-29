"use client"

import React, { useState } from 'react';
import { FaTextHeight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

const TextCaseConverter: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [convertedText, setConvertedText] = useState<string>('');
    const [copySuccess] = useState<string>('');
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const convertToUpperCase = () => {
        setConvertedText(text.toUpperCase());
    };

    const convertToLowerCase = () => {
        setConvertedText(text.toLowerCase());
    };

    const convertToTitleCase = () => {
        setConvertedText(
            text
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
        );
    };

    const convertToSentenceCase = () => {
        setConvertedText(
            text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        );
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(convertedText).then(
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
                <FaTextHeight className="text-blue-500 mr-2" /> Text Case Converter
            </h1>
            <textarea
                className="w-full p-4 mb-4 border rounded-md dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-900"
                rows={5}
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text here..."
            />
            <div className="flex gap-4 mb-4">
                <button onClick={convertToUpperCase} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Uppercase
                </button>
                <button onClick={convertToLowerCase} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                    Lowercase
                </button>
                <button onClick={convertToTitleCase} className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
                    Title Case
                </button>
                <button onClick={convertToSentenceCase} className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
                    Sentence Case
                </button>
            </div>
            <div className="p-4 border rounded-md dark:bg-gray-700 bg-gray-100 relative">
                <h2 className="text-lg font-semibold mb-2">Converted Text:</h2>
                <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded text-center text-indigo-700"
                >
                    <FontAwesomeIcon icon={isCopied ? faCheck : faCopy} />
                </button>
                <pre className="whitespace-pre-wrap mt-4">{convertedText}</pre>
                {copySuccess && <p className="text-green-500 mt-2">{copySuccess}</p>}
            </div>
        </div>
    );
};

export default TextCaseConverter;
