// /app/Tools/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faKey,
    faCode,
    faIdBadge,
    faGlobe,
    faClock,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import Base64 from "./Base64/page";
import UUID from "./UUID/page"; // Adjusted import paths
import URL from "./URL/page";
import DateAndTime from "./DateAndTime/page";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Tools = () => {
    const pathname = usePathname();
    const tool = pathname?.split("/").pop(); // Extract the current tool from the path

    useEffect(() => {
        console.log("Current tool on mount:", tool); // Log current tool on component mount
    }, [tool]);

    const renderTool = () => {
        console.log("Rendering tool for:", tool); // Check what tool is being rendered
        switch (tool) {
            case "base64-encoder-decoder":
                return <Base64 />;
            case "uuid-generator":
                return <UUID />;
            case "url-encoder-decoder":
                return <URL />;
            case "date-time-utilities":
                return <DateAndTime />;
            default:
                return <Base64 />; // Default to Base64
        }
    };

    // Define tools with their respective colors
    const tools = [
        { name: "base64-encoder-decoder", label: "Base64 Encoder/Decoder", icon: faCode, color: "text-green-400" },
        { name: "uuid-generator", label: "UUID Generator", icon: faIdBadge, color: "text-purple-400" },
        { name: "url-encoder-decoder", label: "URL Encoder/Decoder", icon: faGlobe, color: "text-red-400" },
        { name: "date-time-utilities", label: "Date and Time Utilities", icon: faClock, color: "text-yellow-400" },
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen font-medium">
            {/* Sidebar Menu */}
            <aside className="w-full lg:w-72 p-6" style={{ background: "#334381", color: "white" }}>
                <Link href="/">
                    <h1 className="tools-title text-2xl py-2">VALORA INFOTECH</h1>
                </Link>
                <ul className="space-y-4">
                    {/* Home Button */}
                    <li>
                        <Link href="/" className="block p-2 rounded w-full text-left">
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-4 text-yellow-400" />
                            Home
                        </Link>
                    </li>
                    {/* Tools Menu Items */}
                    {tools.map(({ name, label, icon, color }) => (
                        <li key={name}>
                            <Link
                                href={`/tools/${name}`}  // This should match the expected URL structure
                                className={`block p-2 rounded ${tool === name ? "bg-white text-black" : ""} hover:bg-white hover:text-black w-full text-left flex items-center`}
                            >
                                <FontAwesomeIcon icon={icon} className={`mr-4 ${color}`} />
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main content */}
            <div className="flex-1 p-6">
                {renderTool()}
            </div>
        </div>
    );
};

export default Tools;
