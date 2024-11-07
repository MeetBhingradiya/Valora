"use client"; // Mark the component as a client component

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faSync } from "@fortawesome/free-solid-svg-icons";

function UUIDGenerator() {
    const [icon, setIcon] = useState(faCopy);
    const [uuid, setUuid] = useState("");

    // Generate an initial UUID when the component mounts
    useEffect(() => {
        const initialUUID = uuidv4();
        setUuid(initialUUID);
    }, []);

    const generateUUID = () => {
        const newUUID = uuidv4();
        setUuid(newUUID);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(uuid);
        setIcon(faCheck);

        // Revert to faCopy after 1 second
        setTimeout(() => {
            setIcon(faCopy);
        }, 1000);
    };

    return (
        <>
            <div className="p-6 max-w-lg mx-auto dark:bg-dark bg-light dark:text-darkText text-lightText rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold mb-6 text-center underline">UUID Generator</h2>
                <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2">
                    <span className="text-base font-medium">{uuid}</span>
                    <button
                        onClick={copyToClipboard}
                        className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                    >
                        <FontAwesomeIcon icon={icon} />
                    </button>
                </div>
                <button
                    onClick={generateUUID}
                    className="flex items-center px-6 bg-blue-700 hover:bg-blue-800 py-1.5 rounded-lg text-white m-auto mt-4 text-lg"
                    type="button"
                >
                    <FontAwesomeIcon icon={faSync} className="mr-2" />
                    <span>Generate</span>
                </button>
            </div>

            {/* Description Section outside the main box */}
            <div className="mt-6 max-w-3xl mx-auto p-6 border-t border-gray-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-2">What is a UUID?</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    A Universally Unique Identifier (UUID) is a 128-bit label used for information in computer systems. 
                    The chance of generating the same UUID is extremely low, making them ideal for use as unique identifiers in applications.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    UUIDs are typically represented as 32 hexadecimal characters, displayed in five groups separated by hyphens. 
                    The standard format is: <code className="font-mono">xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code>, 
                    where each 'x' represents a hexadecimal digit (0-9, a-f).
                </p>
                
                <h3 className="text-2xl font-semibold mt-4 mb-2">Common Uses of UUIDs</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>**Database Primary Keys**: Used to uniquely identify records in databases, allowing for easy reference and retrieval.</li>
                    <li>**Session Identifiers**: For tracking user sessions in web applications, ensuring that each user's session is distinct.</li>
                    <li>**File Identifiers**: To uniquely identify files in storage systems, helping prevent conflicts and ensuring data integrity.</li>
                    <li>**Distributed Systems**: Ensures unique identifiers across multiple services and systems, which is crucial in microservices architecture.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Benefits of Using UUIDs</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>**Globally Unique**: The probability of generating the same UUID is negligible, making them reliable for global uniqueness.</li>
                    <li>**Decentralized Generation**: UUIDs can be generated independently without requiring a central authority, which is beneficial in distributed systems.</li>
                    <li>**Scalability**: UUIDs provide a scalable solution for applications that require unique identifiers across different systems or databases.</li>
                    <li>**Non-Guessable**: UUIDs are harder to guess compared to sequential identifiers, adding a layer of security in certain contexts.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">UUID Variants and Versions</h3>
                <p className="text-base text-gray-700 dark:text-gray-300">
                    UUIDs come in different versions (1 through 5) which define how they are generated. 
                    For example, Version 1 UUIDs are based on timestamp and node (like MAC address), while Version 4 UUIDs are generated randomly.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300">
                    Choosing the appropriate version of UUID depends on the requirements of your application and the level of uniqueness needed.
                </p>
            </div>
        </>
    );
}

export default UUIDGenerator;
