"use client"

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
    <div className="p-6 max-w-lg mx-auto dark:bg-dark bg-light dark:text-darkText text-lightText rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center  underline">UUID Generator</h2>
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
  );
};

export default UUIDGenerator;
