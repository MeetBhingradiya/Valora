"use client";
import React, { useState } from "react";

function MySQLPasswordGenerator() {
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(12);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

    const generatePassword = () => {
        const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerChars = "abcdefghijklmnopqrstuvwxyz";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?";

        let characterSet = "";
        if (includeUppercase) characterSet += upperChars;
        if (includeLowercase) characterSet += lowerChars;
        if (includeNumbers) characterSet += numberChars;
        if (includeSymbols) characterSet += symbolChars;

        if (characterSet.length === 0) {
            setPassword("Select at least one character type!");
            return;
        }

        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            generatedPassword += characterSet[randomIndex];
        }
        setPassword(generatedPassword);
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            {/* Main Password Generator Box */}
            <div className="dark:bg-gray-800 bg-white dark:text-white text-gray-900 rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-bold mb-4 text-center underline">MySQL Password Generator</h2>
                <div className="mb-4">
                    <label htmlFor="length" className="block text-lg mb-2">Password Length:</label>
                    <input
                        type="number"
                        id="length"
                        min={6}
                        max={30}
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 dark:bg-gray-700 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2">Include Uppercase:</label>
                    <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2">Include Lowercase:</label>
                    <input
                        type="checkbox"
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2">Include Numbers:</label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2">Include Symbols:</label>
                    <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                </div>
                <button
                    onClick={generatePassword}
                    className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150"
                >
                    Generate Password
                </button>
                {password && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Generated Password:</h3>
                        <div className="p-3 border border-gray-300 dark:bg-gray-700 rounded break-all">
                            {password}
                        </div>
                    </div>
                )}
            </div>

            {/* Description Section Outside the Main Box */}
            {/* Description Section Outside the Main Box */}
            <div className="mt-10 p-6 border-t border-gray-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-2">What is a MySQL Password Generator?</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    A MySQL Password Generator is a tool designed to create strong, secure passwords for MySQL database users. By generating random combinations of uppercase letters, lowercase letters, numbers, and symbols, it creates complex passwords that help prevent unauthorized access. This tool is essential for maintaining database security, as it enables users to produce robust passwords that meet modern security standards.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Strong passwords are crucial in any secure database system, as they act as a primary defense against brute-force attacks, unauthorized access, and potential data breaches. Using random, complex passwords reduces the risk of attackers successfully guessing or brute-forcing credentials, thereby enhancing the security of sensitive data stored within the database.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Why Use Strong Passwords?</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Strong passwords act as a first line of defense against unauthorized access. A complex password makes it significantly more challenging for attackers to compromise a MySQL database through brute-force attacks or dictionary attacks. By including uppercase and lowercase letters, numbers, and symbols, the generator produces passwords that are both unique and difficult to predict, helping prevent unauthorized access and ensuring compliance with best security practices.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Moreover, regularly updating your database passwords with new, randomly generated passwords from tools like this further minimizes the chances of long-term exposure from old or potentially leaked passwords.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Best Practices for Database Password Security</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>**Use Unique Passwords for Each Database User**: Avoid reusing passwords across different accounts. Unique passwords help contain breaches to a single account in case of a compromise.</li>
                    <li>**Regularly Update Passwords**: Periodically changing database passwords reduces the risk associated with potential password leaks over time.</li>
                    <li>**Store Passwords Securely**: Use a password manager to securely store and manage database passwords, minimizing exposure to unauthorized personnel.</li>
                    <li>**Limit User Privileges**: Assign only necessary permissions to each database user. Limiting privileges helps protect sensitive data by restricting access based on roles.</li>
                    <li>**Enable Multi-Factor Authentication (MFA)**: Where supported, implement MFA for additional security. This extra layer makes it harder for unauthorized users to access the database.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Benefits of Using a Password Generator</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>**Enhanced Security**: Randomly generated passwords reduce the likelihood of password guessing attacks and enhance overall database security.</li>
                    <li>**Time Efficiency**: Automating password creation saves time compared to creating passwords manually, especially when complex requirements are involved.</li>
                    <li>**User Convenience**: A generator ensures compliance with security policies and simplifies the creation of strong passwords that are otherwise hard to produce manually.</li>
                    <li>**Reduced Human Error**: Manually creating complex passwords can lead to errors or weaker passwords; a generator provides reliably secure results every time.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">How to Implement and Use Strong Passwords Effectively</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    In addition to using a password generator, it's essential to implement an effective password policy in your organization. Ensure that employees and developers follow guidelines for secure password storage, such as hashing passwords in transit and at rest. Database passwords should never be stored in plain text and should always be encrypted using industry-standard algorithms.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Lastly, use a well-configured firewall and limit database access to trusted IPs. By combining these best practices with the MySQL Password Generator, you establish a more resilient security posture, significantly reducing the likelihood of unauthorized access and data breaches.
                </p>
            </div>
        </div>
    );
}

export default MySQLPasswordGenerator;
