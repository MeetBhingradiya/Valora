"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";
import {
    FaKey,
    FaCode,
    FaIdBadge,
    FaGlobe,
    FaClock,
    FaBars,
    FaTimes,
    FaLock
} from "react-icons/fa";
import Base64 from "./base64-encoder-decoder/page";
import UUID from "./uuid-generator/page";
import URL from "./url-encoder-decoder/page";
import DateAndTime from "./date-time-utilities/page";
import { usePathname } from "next/navigation";
import JWTDecoder from "./jwt-decoder/page";
import MySQLPasswordGenerator from "./password-generator/page"
import VlogoLight from "../../../public/assets/logo.svg";
import ValoraLight from "../../../public/assets/valora.svg";

export default function ToolsLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const tool = pathname?.split("/").pop();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const renderTool = () => {
        switch (tool) {
            case "jwt-decoder":
                return <JWTDecoder />;
            case "base64-encoder-decoder":
                return <Base64 />;
            case "uuid-generator":
                return <UUID />;
            case "url-encoder-decoder":
                return <URL />;
            case "date-time-utilities":
                return <DateAndTime />;
            case "password-generator":
                return <MySQLPasswordGenerator/>
            default:
                return <JWTDecoder />;
        }
    };

    const tools = [
        { name: "jwt-decoder", label: "Jwt Decoder", icon: <FaKey className="text-orange-700 mr-2" /> },
        { name: "base64-encoder-decoder", label: "Base64 Encoder/Decoder", icon: <FaCode className="text-green-800 mr-2" /> },
        { name: "uuid-generator", label: "UUID Generator", icon: <FaIdBadge className=" text-red-700 mr-2" /> },
        { name: "url-encoder-decoder", label: "URL Encoder/Decoder", icon: <FaGlobe className="text-purple-800 mr-2" /> },
        { name: "date-time-utilities", label: "Date and Time Utilities", icon: <FaClock className="text-pink-500 mr-2" /> },
        { name: "password-generator", label: "Password Generator", icon: <FaLock className="text-yellow-500 mr-2" /> },
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-gray-200">
            <button
                className="lg:hidden p-4 text-gray-200 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`${
                    isSidebarOpen ? "fixed inset-0 z-50" : "hidden lg:block lg:sticky top-0"
                } w-full lg:w-80 p-6 bg-gray-800 shadow-lg transition-transform`}
                style={{ height: "100vh" }}
            >
                <button
                    className="lg:hidden absolute top-4 right-4 text-gray-300 focus:outline-none"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaTimes size={24} />
                </button>

                {/* Valora Logos */}
                <Link href="/" className="flex items-center justify-center mb-8">
                    <img src={VlogoLight.src} alt="Vlogo" className="w-10 h-10 mr-2" />
                    <img src={ValoraLight.src} alt="Valora" className="h-5" />
                </Link>

                <ul className="space-y-4">
                    {tools.map(({ name, label, icon }) => (
                        <li key={name}>
                            <Link
                                href={`/tools/${name}`}
                                className={`block p-2 rounded ${
                                    tool === name ? "bg-primary text-white" : "text-gray-200"
                                } hover:bg-gray-700 w-full text-left flex items-center`}
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {icon}
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 dark:bg-gray-900 bg-white h-screen overflow-y-auto">
                {renderTool()}
            </main>
        </div>
    );
}
