"use client";

import "@App/Styles/global.sass";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faKey,
    faCode,
    faIdBadge,
    faGlobe,
    faClock,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import Base64 from "./base64-encoder-decoder/page";
import UUID from "./uuid-generator/page"; // Adjusted import paths
import URL from "./url-encoder-decoder/page";
import DateAndTime from "./date-time-utilities/page";
import { usePathname } from "next/navigation";

export default function ToolsLayout({
    children,
}: {
    children: ReactNode;
}) {
    const pathname = usePathname();
    const tool = pathname?.split("/").pop();

    const renderTool = () => {
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
                return <Base64 />;
        }
    };

    const tools = [
        {
            name: "base64-encoder-decoder",
            label: "Base64 Encoder/Decoder",
            icon: faCode, color: "text-green-400"
        },
        // {
        //     name: "uuid-generator",
        //     label: "UUID Generator",
        //     icon: faIdBadge,
        //     color: "text-purple-400"
        // },
        // {
        //     name: "url-encoder-decoder",
        //     label: "URL Encoder/Decoder",
        //     icon: faGlobe,
        //     color: "text-red-400"
        // },
        // {
        //     name: "date-time-utilities",
        //     label: "Date and Time Utilities",
        //     icon: faClock,
        //     color: "text-yellow-400"
        // },
    ];

    return (
        <div className="flex">
            {/* Sidebar Menu */}
            <div className="w-full lg:w-72 p-6 bg-primary text-secondary" style={{ height: "100vh" }}>
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
                                href={`/tools/${name}`}
                                className={`block p-2 rounded ${tool === name ? "bg-white text-black" : ""} hover:bg-white hover:text-black w-full text-left flex items-center`}
                            >
                                <FontAwesomeIcon icon={icon} className={`mr-4 ${color}`} />
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-1 p-6">
                {renderTool()}
            </div>
        </div>
    );
}
