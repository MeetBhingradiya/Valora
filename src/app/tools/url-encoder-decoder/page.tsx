"use client";
import { useState, ChangeEvent } from "react";

function URLEncoderDecoder() {
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
        <>
            <div className="p-6 max-w-3xl mx-auto dark:bg-gray-800 bg-light dark:text-darkText text-lightText rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold mb-6 text-center underline">URL Encoder/Decoder</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Decoded URL</h3>
                        <textarea
                            value={input}
                            onChange={(e) => handleInputChange(e, "input")}
                            className="w-full p-4 border border-gray-300 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            rows={5}
                            placeholder="Enter text to encode"
                        ></textarea>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Encoded URL</h3>
                        <textarea
                            value={output}
                            onChange={(e) => handleInputChange(e, "output")}
                            className="w-full p-4 border border-gray-300 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            rows={5}
                            placeholder="Enter URL to decode"
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Description Section outside the main box */}
            <div className="mt-6 max-w-3xl mx-auto p-6 border-t border-gray-300 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-2">What is URL Encoding?</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    URL encoding, also known as percent-encoding, is a mechanism for encoding information in a Uniform Resource Identifier (URI) using a specific character encoding scheme.
                    It is essential for transferring data over the internet, especially when the data contains special characters.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    Characters that are not allowed in a URL, such as spaces, punctuation, or characters with special meanings (like `?`, `&`, `=`, etc.), are replaced with a '%' sign followed by two hexadecimal digits representing the ASCII code of the character.
                    For example, a space is encoded as `%20`.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Common Use Cases for URL Encoding</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>**Encoding Query Parameters**: When sending data via HTTP requests, query parameters often contain special characters that need to be encoded.</li>
                    <li>**Embedding Data in URLs**: When creating links that include user input or other dynamic data, encoding ensures that the link remains valid.</li>
                    <li>**Preventing URL Manipulation**: Encoding helps to secure URLs by making them less predictable and harder to manipulate.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 mb-2">What is URL Decoding?</h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    URL decoding is the reverse process of URL encoding. It converts the encoded URL back into its original format by replacing the percent-encoded characters with their corresponding characters.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                    For example, a URL containing `%20` will be decoded back to a space character, making the URL readable and usable again.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Benefits of Using URL Encoder/Decoder</h3>
                <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
                    <li>**Ensures Validity**: Encoding prevents errors that arise from using special characters in URLs.</li>
                    <li>**Improves Security**: Helps in sanitizing input data and reducing the risk of injection attacks.</li>
                    <li>**Facilitates Data Transmission**: Allows data to be safely transmitted over the internet, ensuring it retains its intended meaning.</li>
                </ul>
            </div>
        </>
    );
}

export default URLEncoderDecoder;
