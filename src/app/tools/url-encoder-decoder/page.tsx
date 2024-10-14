"use client";
import { useState, ChangeEvent } from "react";

const URLEncoderDecoder = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>, type: "input" | "output") => {
    const value = e.target.value;
    if (type === "input") {
      setInput(value);
      try {
        const encoded = encodeURIComponent(value);
        setOutput(encoded);
      } catch (error) {
        setOutput("Invalid input for encoding");
      }
    } else if (type === "output") {
      setOutput(value);
      try {
        const decoded = decodeURIComponent(value);
        setInput(decoded);
      } catch (error) {
        setInput("Invalid URL encoding");
      }
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 underline">URL Encoder/Decoder</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Decoded URL</h3>
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e, "input")}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            rows={5}
            placeholder="Enter text to encode"
          ></textarea>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Encoded URL</h3>
          <textarea
            value={output}
            onChange={(e) => handleInputChange(e, "output")}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            rows={5}
            placeholder="Enter URL to decode"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default URLEncoderDecoder;
