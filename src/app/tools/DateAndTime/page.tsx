"use client"

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const DateTimeUtilities: React.FC = () => {
  const [currentMilliseconds] = useState<number>(Date.now());
  const [currentSeconds] = useState<number>(Math.floor(Date.now() / 1000));
  const [currentDate] = useState<Date>(new Date());
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
  const [dateFromSeconds, setDateFromSeconds] = useState<string>(
    new Date(currentSeconds * 1000).toString()
  );
  const [dateFromMilliseconds, setDateFromMilliseconds] = useState<string>(
    new Date(Date.now()).toString()
  );

  const [dateString, setDateString] = useState<string>(new Date().toISOString());
  const [convertedSeconds, setConvertedSeconds] = useState<number>(
    Math.floor(currentDate.getTime() / 1000)
  );
  const [convertedMilliseconds, setConvertedMilliseconds] = useState<number>(
    currentDate.getTime()
  );

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

    // Revert to faCopy after 1 second
    setTimeout(() => {
      setIconStates((prevState) => ({
        ...prevState,
        [key]: faCopy,
      }));
    }, 1000);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center underline">
        Date and Time Utilities
      </h2>

      {/* Current Date/Time */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">
          Current Date/Time
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {/* Milliseconds */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentMilliseconds}
              </span>
              <button
                onClick={() => copyToClipboard(currentMilliseconds.toString(), "milliseconds")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.milliseconds} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Milliseconds
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentSeconds}
              </span>
              <button
                onClick={() => copyToClipboard(currentSeconds.toString(), "seconds")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.seconds} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Seconds
            </span>
          </div>

          {/* Date */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentDate.toDateString()}
              </span>
              <button
                onClick={() => copyToClipboard(currentDate.toDateString(), "date")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.date} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Date
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentDate.toTimeString()}
              </span>
              <button
                onClick={() => copyToClipboard(currentDate.toTimeString(), "time")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.time} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Time
            </span>
          </div>
        </div>
      </div>

      {/* Additional sections omitted for brevity */}
    </div>
  );
};

export default DateTimeUtilities;
