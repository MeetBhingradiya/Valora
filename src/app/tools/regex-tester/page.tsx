"use client";
import React, { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const RegexTester: React.FC = () => {
    const [pattern, setPattern] = useState<string>('');
    const [flags, setFlags] = useState<string>('g'); // default global flag
    const [sampleText, setSampleText] = useState<string>('');
    const [matches, setMatches] = useState<string[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handlePatternChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPattern(e.target.value);
    };

    const handleFlagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFlags(e.target.value);
    };

    const handleSampleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSampleText(e.target.value);
    };

    const testRegex = () => {
        try {
            const regex = new RegExp(pattern, flags);
            const results = [...sampleText.matchAll(regex)];
            setMatches(results.map(match => match[0]));
            setError(null);
        } catch (err) {
            setError('Invalid regex pattern');
            setMatches(null);
        }
    };

    return (
        <>
            <div className="p-6 max-w-4xl mx-auto dark:bg-gray-800 bg-white dark:text-white text-gray-900 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 flex items-center">
                    <FaRegCheckCircle className="text-blue-600 mr-2" /> Regex Tester
                </h1>
                <div className="mb-4">
                    <label htmlFor="pattern" className="block text-lg mb-2">Regex Pattern:</label>
                    <input
                        type="text"
                        id="pattern"
                        value={pattern}
                        onChange={handlePatternChange}
                        placeholder="Enter regex pattern (e.g., ^[a-zA-Z]+$)"
                        className="w-full p-2 border border-gray-300 dark:bg-gray-700 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="flags" className="block text-lg mb-2">Flags:</label>
                    <input
                        type="text"
                        id="flags"
                        value={flags}
                        onChange={handleFlagsChange}
                        placeholder="Enter flags (e.g., g, i, m)"
                        className="w-full p-2 border border-gray-300 dark:bg-gray-700 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sampleText" className="block text-lg mb-2">Sample Text:</label>
                    <textarea
                        id="sampleText"
                        value={sampleText}
                        onChange={handleSampleTextChange}
                        placeholder="Enter text to test against regex"
                        className="w-full p-4 border rounded-md dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-900"
                        rows={5}
                    />
                </div>
                <button
                    onClick={testRegex}
                    className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 mb-4"
                >
                    Test Regex
                </button>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="p-4 border rounded-md dark:bg-gray-700 bg-gray-100">
                    <h2 className="text-lg font-semibold mb-2">Matches:</h2>
                    {matches ? (
                        matches.length > 0 ? (
                            <ul className="list-disc list-inside">
                                {matches.map((match, index) => (
                                    <li key={index}>{match}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No matches found.</p>
                        )
                    ) : (
                        <p>Enter a valid regex and sample text to see matches.</p>
                    )}
                </div>
            </div>

            {/* Out-of-box Detailed Explanation Section */}
            <div className="p-6 max-w-4xl mx-auto mt-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Explanation:</h2>
                <p className="mb-4">
                    Regular expressions (regex) are powerful tools for pattern matching in strings, commonly used in tasks like validation, searching, and text processing. This tool allows you to test a regex pattern against sample text, and see all matches in real-time.
                </p>
                <p className="mb-4">
                    The <strong>Regex Pattern</strong> field allows you to enter your regex pattern. Regular expressions are composed of literal characters, special characters, and operators that define search patterns. For instance, the regex pattern <code>^[a-zA-Z]+$</code> will match strings that contain only alphabetic characters from start to end.
                </p>
                <p className="mb-4">
                    The <strong>Flags</strong> field lets you specify certain options for the pattern matching. Some common flags include:
                </p>
                <ul className="list-disc list-inside ml-6 mb-4">
                    <li><strong>g</strong> (Global): Finds all matches in the input text, not just the first one.</li>
                    <li><strong>i</strong> (Case-insensitive): Makes the pattern match letters in a case-insensitive manner.</li>
                    <li><strong>m</strong> (Multiline): Modifies the behavior of <code>^</code> and <code>$</code>, so they match the start and end of each line.</li>
                </ul>
                <p className="mb-4">
                    The <strong>Sample Text</strong> area is where you enter the text you want to test with the regex pattern. The tool will display any matches it finds.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Real-World Example:</h3>
                <p className="mb-4">
                    To find valid email addresses, you could use this pattern:
                </p>
                <code className="block p-2 bg-gray-200 dark:bg-gray-800 rounded mb-4">
                    {'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'}
                </code>
                <p className="mb-4">
                    This regex will match emails like <code>user@example.com</code> and <code>name.surname@domain.co.uk</code>, ensuring the correct format and domain extension.
                </p>
            </div>
        </>
    );
};

export default RegexTester;
