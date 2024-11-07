"use client";
import React, { useState } from 'react';
import { FaPalette } from 'react-icons/fa';

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
};

const rgbToHex = (rgb: string) => {
    const result = rgb.match(/\d+/g)?.map((val) => parseInt(val).toString(16).padStart(2, '0')).join('');
    return result ? `#${result}` : null;
};

const rgbToHsl = (rgb: string) => {
    const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [0, 0, 0];
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const delta = max - min;
    let h = 0;
    if (delta !== 0) {
        if (max === rNorm) h = ((gNorm - bNorm) / delta) % 6;
        else if (max === gNorm) h = (bNorm - rNorm) / delta + 2;
        else h = (rNorm - gNorm) / delta + 4;
        h *= 60;
        if (h < 0) h += 360;
    }
    const l = (max + min) / 2;
    const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

const ColorConverter: React.FC = () => {
    const [hex, setHex] = useState<string>('#000000');
    const [rgb, setRgb] = useState<string>('rgb(0, 0, 0)');
    const [hsl, setHsl] = useState<string>('hsl(0, 0%, 0%)');

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHex(value);
        const rgbValue = hexToRgb(value);
        if (rgbValue) {
            setRgb(rgbValue);
            setHsl(rgbToHsl(rgbValue));
        }
    };

    const handleRgbChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setRgb(value);
        const hexValue = rgbToHex(value);
        if (hexValue) {
            setHex(hexValue);
            setHsl(rgbToHsl(value));
        }
    };

    return (
        <>
            <div className="p-6 max-w-4xl mx-auto dark:bg-gray-800 bg-white dark:text-white text-gray-900 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 flex items-center">
                    <FaPalette className="text-indigo-500 mr-2" /> Color Converter
                </h1>
                <div className="mb-4">
                    <label htmlFor="hex" className="block text-lg mb-2">HEX:</label>
                    <input
                        type="text"
                        id="hex"
                        value={hex}
                        onChange={handleHexChange}
                        placeholder="#000000"
                        className="w-full p-2 border border-gray-300 dark:bg-gray-700 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rgb" className="block text-lg mb-2">RGB:</label>
                    <input
                        type="text"
                        id="rgb"
                        value={rgb}
                        onChange={handleRgbChange}
                        placeholder="rgb(0, 0, 0)"
                        className="w-full p-2 border border-gray-300 dark:bg-gray-700 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="hsl" className="block text-lg mb-2">HSL:</label>
                    <input
                        type="text"
                        id="hsl"
                        value={hsl}
                        readOnly
                        className="w-full p-2 border border-gray-300 dark:bg-gray-700 rounded bg-gray-100"
                    />
                </div>
            </div>

            {/* Description Section Outside of Main Box */}
            <div className="mt-6 max-w-4xl mx-auto text-gray-700 dark:text-gray-300"> <h2 className="text-xl font-semibold mb-2">About the Color Converter Tool:</h2> <p className="mb-2"> The <strong>Color Converter</strong> tool is a versatile utility that allows users to easily convert colors between three widely-used formats: <strong>HEX</strong>, <strong>RGB</strong>, and <strong>HSL</strong>. Whether you’re a designer, developer, or simply working with digital colors, this tool streamlines the process of switching between formats with real-time, precise conversions. </p>
                less
                Copy code
                <h3 className="text-lg font-semibold mt-4 mb-2">Why Use Different Color Formats?</h3>
                <p className="mb-2">
                    Each color format serves unique purposes. <strong>HEX</strong> codes are compact, making them a web design favorite. <strong>RGB</strong> is used in digital displays by representing colors with red, green, and blue values. <strong>HSL</strong>, with its Hue, Saturation, and Lightness model, allows for easy color adjustment, making it valuable for refining color tones in design.
                </p>

                <h3 className="text-lg font-semibold mt-4 mb-2">How to Use This Tool:</h3>
                <p className="mb-2">
                    Enter a color in either <strong>HEX</strong> or <strong>RGB</strong> format to instantly view its equivalent in <strong>HEX</strong>, <strong>RGB</strong>, and <strong>HSL</strong> formats:
                </p>
                <ul className="list-disc list-inside ml-6 mb-2">
                    <li><strong>HEX Input:</strong> Enter a HEX code (e.g., #ff5733) to view the color’s RGB and HSL equivalents.</li>
                    <li><strong>RGB Input:</strong> Input an RGB color (e.g., rgb(255, 87, 51)) and see it convert to HEX and HSL formats.</li>
                    <li><strong>Read-Only HSL Field:</strong> This field displays the color in HSL format, calculated based on your input.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">Understanding Each Format:</h3>
                <ul className="list-disc list-inside ml-6">
                    <li><strong>HEX:</strong> The HEX format is a 6-digit code representing colors in web design, with each two digits corresponding to red, green, and blue (e.g., #ff5733). HEX is widely used in CSS and HTML because it’s concise and effective for web colors.</li>
                    <li><strong>RGB:</strong> The RGB format defines colors by their red, green, and blue components, ranging from 0 to 255 (e.g., rgb(255, 87, 51)). It’s often used in digital screens and provides direct control over color intensity.</li>
                    <li><strong>HSL:</strong> HSL stands for Hue, Saturation, and Lightness. In this format, hue represents the color type, saturation indicates intensity, and lightness adjusts brightness. For example, hsl(9, 100%, 60%) provides flexibility for hue adjustments without altering saturation or lightness, making it ideal for uniform color adjustments.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">Benefits of the Color Converter Tool:</h3>
                <ul className="list-disc list-inside ml-6">
                    <li><strong>Cross-Format Consistency:</strong> Seamlessly switch between HEX, RGB, and HSL to maintain color consistency across platforms and applications.</li>
                    <li><strong>Visual Adjustments:</strong> Use the HSL format for straightforward adjustments to saturation and brightness, making color refining easier.</li>
                    <li><strong>Beginner-Friendly:</strong> Ideal for those learning color theory or new to design, providing a practical way to understand and work with multiple color models.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">Supported Formats:</h3>
                <ul className="list-disc list-inside ml-6">
                    <li><strong>HEX</strong> (e.g., #ff5733) - Commonly used in web design and CSS.</li>
                    <li><strong>RGB</strong> (e.g., rgb(255, 87, 51)) - Widely used in digital graphics and screen displays.</li>
                    <li><strong>HSL</strong> (e.g., hsl(9, 100%, 60%)) - Beneficial for adjusting saturation and brightness while keeping a consistent hue.</li>
                </ul>
                <p className="mt-2">
                    Try the <strong>Color Converter</strong> tool to streamline your workflow and simplify color transformations in any project!
                </p>
            </div>
        </>
    );
};

export default ColorConverter;
