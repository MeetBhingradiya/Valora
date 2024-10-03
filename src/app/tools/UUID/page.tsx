import React, { useState, useEffect } from "react";

const Base64EncoderDecoder: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [urlSafe, setUrlSafe] = useState<boolean>(false);
  const [withoutPadding, setWithoutPadding] = useState<boolean>(false);

  // Function to handle encoding
  const encodeInput = (text: string): string => {
    let encoded = btoa(text);

    // Apply URL safe encoding if the toggle is on
    if (urlSafe) {
      encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_");
    }

    // Remove padding if the toggle is on
    if (withoutPadding) {
      encoded = encoded.replace(/=+$/, "");
    }

    return encoded;
  };

  // Function to handle decoding
  const decodeOutput = (text: string): string => {
    let decoded = text;

    // Reverse URL safe encoding if applicable
    if (urlSafe) {
      decoded = decoded.replace(/-/g, "+").replace(/_/g, "/");
    }

    try {
      return atob(decoded);
    } catch (error) {
      return "Invalid Base64 string";
    }
  };

  // Handle changes in input text
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    setOutput(encodeInput(value));
  };

  // Handle changes in output text
  const handleOutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setOutput(value);
    setInput(decodeOutput(value));
  };

  // Re-encode input when toggles change
  useEffect(() => {
    setOutput(encodeInput(input));
  }, [urlSafe, withoutPadding, input]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 underline">Base64 Encoder/Decoder</h1>

      {/* Toggle switches */}
      <div className="flex space-x-4 mb-6">
        <div className="flex items-start no-prose">
          <div className="flex items-center h-5">
            <label className="h-5 items-center cursor-default flex-shrink-0 inline-flex justify-center relative w-10">
              <input
                className="absolute appearance-none bg-transparent border-none checked:bg-transparent checked:border-0 checked:focus:bg-transparent h-5 peer rounded w-10"
                type="checkbox"
                id="url_safe"
                name="url_safe"
                checked={urlSafe}
                onChange={() => setUrlSafe(!urlSafe)}
              />
              <span className="absolute  duration-200 ease-in-out pointer-events-none rounded-full bg-gray-200 h-4 mx-auto peer-checked:bg-indigo-500 transition-colors w-9"></span>
              <span className="absolute bg-white border border-gray-200 duration-200 ease-in-out h-5 inline-block left-0 peer-checked:translate-x-5 pointer-events-none ring-0 rounded-full shadow transform transition-transform translate-x-0 w-5"></span>
            </label>
          </div>
          <div className="text-sm ml-3 pt-1">
            <label className="text-sm font-medium block leading-none mb-1" htmlFor="url_safe">
              URL safe
            </label>
          </div>
        </div>

        <div className="flex items-start no-prose">
          <div className="flex items-center h-5">
            <label className="h-5 items-center cursor-default flex-shrink-0 inline-flex justify-center relative w-10">
              <input
                className="absolute appearance-none bg-transparent border-none checked:bg-transparent checked:border-0 checked:focus:bg-transparent h-5 peer rounded w-10"
                type="checkbox"
                id="without_padding"
                name="without_padding"
                checked={withoutPadding}
                onChange={() => setWithoutPadding(!withoutPadding)}
              />
              <span className="absolute duration-200 ease-in-out pointer-events-none rounded-full bg-gray-200 h-4 mx-auto peer-checked:bg-indigo-500 transition-colors w-9"></span>
              <span className="absolute bg-white border border-gray-200 duration-200 ease-in-out h-5 inline-block left-0 peer-checked:translate-x-5 pointer-events-none ring-0 rounded-full shadow transform transition-transform translate-x-0 w-5"></span>
            </label>
          </div>
          <div className="text-sm ml-3 pt-1">
            <label className="text-sm font-medium block leading-none mb-1" htmlFor="without_padding">
              Without padding
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Decoded Text</h3>
          <textarea
            value={input}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            rows={5}
            placeholder="Enter text to encode"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Encoded Text</h3>
          <textarea
            value={output}
            onChange={handleOutputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            rows={5}
            placeholder="Enter Base64 text to decode"
          />
        </div>
      </div>
    </div>
  );
};

export default Base64EncoderDecoder;
