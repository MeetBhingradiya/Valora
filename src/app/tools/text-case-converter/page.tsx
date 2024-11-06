"use client";

import React, { useState } from 'react';
import { FaTextHeight } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

const TextCaseConverter: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [convertedText, setConvertedText] = useState<string>('');
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
        const sentences = text
            .split('.')
            .map(sentence => sentence.trim())
            .filter(sentence => sentence.length > 0)
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase());
        setConvertedText(sentences.join('.\n'));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(convertedText).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Main Text Converter Box */}
            <div className="dark:bg-gray-800 bg-white dark:text-white text-gray-900 rounded-lg shadow-lg p-6">
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
                </div>
            </div>

            {/* Detailed Description Section */}
            <div className="mt-10 p-6 border-t border-gray-300 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-2">Understanding Each Text Case</h2>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Uppercase Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Uppercase text transforms all letters into capital letters. It’s often used for titles, headers, or to highlight certain words. 
                    In contexts like programming, uppercase is frequently used to represent constants or emphasize keywords.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Lowercase Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Lowercase text converts all letters into small letters, making it useful for standard paragraphs or casual content. It’s also common
                    in technical fields, where lowercase is sometimes reserved for specific types of coding syntax or communication style.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Title Case Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Title case capitalizes the first letter of each word, providing a formal appearance. This style is typical in titles, headlines,
                    and publications. Using title case helps distinguish phrases and is visually structured, improving readability in many contexts.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Sentence Case Conversion</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Sentence case capitalizes only the first letter of each sentence, offering a natural and reader-friendly format. It’s the standard
                    format for body text, paragraphs, and sentences within articles. This case type gives a conversational tone and is the easiest to read.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Why Use a Text Case Converter?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    A text case converter helps automate the process of formatting text according to different case styles, saving time and ensuring
                    consistency. Whether for document preparation, web content, or code comments, using a converter allows for instant and error-free
                    transformations.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                    This tool can be invaluable for anyone involved in editing, content creation, programming, and design, where quick case adjustments 
                    are often required to meet professional or stylistic standards.
                </p>
            </div>
        </div>
    );
};

export default TextCaseConverter;
