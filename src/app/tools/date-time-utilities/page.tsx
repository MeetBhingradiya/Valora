"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const DateTimeUtilities: React.FC = () => {
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
                    className="p-3 rounded-md flex-grow bg-gray-100 dark:bg-gray-700"
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
        </div>
    );
};

export default DateTimeUtilities;
