"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

function DateTimeUtilities() {
    const [currentMilliseconds, setCurrentMilliseconds] = useState<number>(0);
    const [currentSeconds, setCurrentSeconds] = useState<number>(0);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [iconStates, setIconStates] = useState<Record<string, any>>({
        milliseconds: faCopy,
        seconds: faCopy,
        date: faCopy,
        time: faCopy,
        dateFromSeconds: faCopy,
        dateFromMilliseconds: faCopy,
        convertedSeconds: faCopy,
        convertedMilliseconds: faCopy,
    });

    const [inputValue, setInputValue] = useState<string>(
        Math.floor(Date.now() / 1000).toString()
    );
    const [dateFromSeconds, setDateFromSeconds] = useState<string>("");
    const [dateFromMilliseconds, setDateFromMilliseconds] = useState<string>("");

    const [dateString, setDateString] = useState<string>(
        new Date().toString()
    );
    const [convertedSeconds, setConvertedSeconds] = useState<number>(0);
    const [convertedMilliseconds, setConvertedMilliseconds] = useState<number>(0);

    useEffect(() => {
        const updateTime = () => {
            setCurrentMilliseconds(Date.now());
            setCurrentSeconds(Math.floor(Date.now() / 1000));
            setCurrentDate(new Date());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isNaN(parseFloat(inputValue)) && inputValue.trim() !== "") {
            const numInput = parseFloat(inputValue);
            setDateFromSeconds(new Date(numInput * 1000).toString());
            setDateFromMilliseconds(new Date(numInput).toString());
        } else {
            setDateFromSeconds("");
            setDateFromMilliseconds("");
        }
    }, [inputValue]);

    useEffect(() => {
        const date = new Date(dateString);
        setConvertedSeconds(Math.floor(date.getTime() / 1000));
        setConvertedMilliseconds(date.getTime());
    }, [dateString]);

    const copyToClipboard = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setIconStates((prevState) => ({
            ...prevState,
            [key]: faCheck,
        }));

        setTimeout(() => {
            setIconStates((prevState) => ({
                ...prevState,
                [key]: faCopy,
            }));
        }, 1000);
    };

    return (
        <div className="p-4 md:p-8 min-h-screen dark:text-gray-200 text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center underline">
                Date and Time Utilities
            </h2>

            {/* Current Date/Time */}
            <div className="mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    Current Date/Time
                </h3>
                <div className="grid grid-cols-1 gap-4 mt-4">
                    {[
                        { label: "Milliseconds", value: currentMilliseconds, key: "milliseconds" },
                        { label: "Seconds", value: currentSeconds, key: "seconds" },
                        { label: "Date", value: currentDate.toDateString(), key: "date" },
                        { label: "Time", value: currentDate.toTimeString(), key: "time" }
                    ].map(({ label, value, key }) => (
                        <div key={key} className="flex flex-col md:flex-row items-center">
                            <div className="flex items-center shadow-sm bg-gray-100 dark:bg-gray-700 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                                <span className="text-base font-medium">{value}</span>
                                <button
                                    onClick={() => copyToClipboard(value.toString(), key)}
                                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                                    title="Copy contents"
                                >
                                    <FontAwesomeIcon icon={iconStates[key] || faCopy} />
                                </button>
                            </div>
                            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Convert from Seconds/Milliseconds */}
            <div className="mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Convert from Seconds/Milliseconds</h3>
                <input
                    type="number"
                    className="p-3 rounded-md w-full md:w-3/4 bg-gray-100 dark:bg-gray-700"
                    placeholder="Enter seconds or milliseconds"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="grid grid-cols-1 gap-4 mt-4">
                    {[
                        { label: "Date from Seconds", value: dateFromSeconds, key: "dateFromSeconds" },
                        { label: "Date from Milliseconds", value: dateFromMilliseconds, key: "dateFromMilliseconds" }
                    ].map(({ label, value, key }) => (
                        <div key={key} className="flex flex-col md:flex-row items-center">
                            <div className="flex items-center shadow-sm bg-gray-100 dark:bg-gray-700 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                                <span className="text-base font-medium">{value}</span>
                                <button
                                    onClick={() => copyToClipboard(value.toString(), key)}
                                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                                    title="Copy contents"
                                >
                                    <FontAwesomeIcon icon={iconStates[key] || faCopy} />
                                </button>
                            </div>
                            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Convert from Strings */}
            <div className="mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Convert from Strings</h3>
                <input
                    type="text"
                    className="p-3 rounded-md w-full md:w-3/4 bg-gray-100 dark:bg-gray-700"
                    placeholder="Enter ISO 8601 string"
                    value={dateString}
                    onChange={(e) => setDateString(e.target.value)}
                />
                <div className="grid grid-cols-1 gap-4 mt-4">
                    {[
                        { label: "Seconds", value: convertedSeconds, key: "convertedSeconds" },
                        { label: "Milliseconds", value: convertedMilliseconds, key: "convertedMilliseconds" }
                    ].map(({ label, value, key }) => (
                        <div key={key} className="flex flex-col md:flex-row items-center">
                            <div className="flex items-center shadow-sm bg-gray-100 dark:bg-gray-700 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                                <span className="text-base font-medium">{value}</span>
                                <button
                                    onClick={() => copyToClipboard(value.toString(), key)}
                                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                                    title="Copy contents"
                                >
                                    <FontAwesomeIcon icon={iconStates[key] || faCopy} />
                                </button>
                            </div>
                            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Description Section outside the main box */}
            <div className="mt-6 mx-auto p-6 border-t border-gray-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-2">What are Date and Time Utilities?</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Date and time utilities are essential tools in programming that allow developers to manipulate, format, and calculate dates and times in various applications.
                    They are crucial for creating applications that rely on accurate timekeeping, event scheduling, logging, and more.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    By providing the ability to convert between different time formats (like seconds, milliseconds, and human-readable dates), these utilities help ensure that data is handled correctly and consistently, regardless of the underlying representation.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Common Use Cases for Date and Time Utilities</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>
                        <strong>Logging Events:</strong> Keeping track of when events occur in an application is crucial for debugging and analytics. For example, logging user actions can help developers understand usage patterns and diagnose issues.
                    </li>
                    <li>
                        <strong>Scheduling Tasks:</strong> Applications that need to schedule tasks or reminders can benefit from accurate date and time calculations. For instance, a task scheduler can use these utilities to determine when a job should run based on user preferences.
                    </li>
                    <li>
                        <strong>Displaying User-Friendly Formats:</strong> Converting timestamps to more readable formats can enhance the user experience in applications. For instance, converting a timestamp to a format like "October 28, 2024, 10:00 AM" is more understandable than a raw UNIX timestamp.
                    </li>
                    <li>
                        <strong>Handling Time Zones:</strong> Applications often need to manage and convert times across different time zones. This is especially important for global applications, where users may be in different regions and need to see times that are relevant to their locations.
                    </li>
                    <li>
                        <strong>Duration Calculations:</strong> Calculating the duration between two dates or times can help in various scenarios, such as tracking how long a user has been active or determining the time remaining until a deadline.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Understanding Seconds and Milliseconds</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Seconds and milliseconds are units of time commonly used in programming. A second is a fundamental unit that is easy to understand, while milliseconds (1/1000 of a second) allow for more precise timing.
                    For example, a stopwatch application might display time in milliseconds for accuracy.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    By converting between these units, developers can perform calculations and manipulations that are accurate to the desired level of precision, making it essential for applications that require timing accuracy, such as gaming or real-time data monitoring.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Benefits of Using DateTime Utilities</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>
                        <strong>Increased Accuracy:</strong> Performing calculations on dates and times helps to prevent errors that can occur when manually handling time values. For instance, using a date library can help avoid common pitfalls like incorrectly accounting for leap years.
                    </li>
                    <li>
                        <strong>Simplified Code:</strong> Utilizing built-in date and time utilities can reduce the complexity of your code and make it easier to read and maintain. Instead of writing complex date manipulations from scratch, developers can rely on well-tested libraries.
                    </li>
                    <li>
                        <strong>Enhanced User Experience:</strong> Displaying date and time in formats that users understand improves the usability of your application. Providing options for users to select their preferred date format enhances accessibility.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Challenges When Working with Date and Time Utilities</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    While date and time utilities are powerful, they come with challenges:
                </p>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>
                        <strong>Time Zone Complexity:</strong> Handling different time zones can lead to confusion, especially with daylight saving time changes. Developers must ensure that their applications properly handle these variations.
                    </li>
                    <li>
                        <strong>Parsing and Formatting Issues:</strong> Different formats for date strings can lead to parsing errors. For example, "01/02/2024" could be interpreted as January 2nd or February 1st, depending on locale settings.
                    </li>
                    <li>
                        <strong>Library Dependencies:</strong> Relying on external libraries can lead to version conflicts and compatibility issues. Developers should stay updated on best practices for managing these dependencies.
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    In summary, date and time utilities are vital in modern programming. They empower developers to build applications that effectively manage and present time-related data.
                    By understanding their significance and potential challenges, developers can create more robust and user-friendly applications.
                </p>
            </div>


        </div>
    );
};

export default DateTimeUtilities;
