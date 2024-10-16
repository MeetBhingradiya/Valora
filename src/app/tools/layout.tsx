"use client";

import "@App/Styles/global.sass";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
  FaKey,
  FaCode,
  FaIdBadge,
  FaGlobe,
  FaClock,
  FaArrowLeft,
} from "react-icons/fa"; // Import icons from react-icons
import Base64 from "./base64-encoder-decoder/page";
import Image from "next/image";
import logo from '../../../public/assets/icon.svg';
import Logo from '../../../public/assets/valora.svg';
import UUID from "./uuid-generator/page";
import URL from "./url-encoder-decoder/page";
import DateAndTime from "./date-time-utilities/page";
import { usePathname } from "next/navigation";

export default function ToolsLayout({ children }: { children: ReactNode }) {
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
      icon: <FaCode className="text-green-400 mr-2" />,
    },
    {
      name: "uuid-generator",
      label: "UUID Generator",
      icon: <FaIdBadge className="text-purple-400 mr-2" />,
    },
    {
      name: "url-encoder-decoder",
      label: "URL Encoder/Decoder",
      icon: <FaGlobe className="text-red-400 mr-2" />,
    },
    {
      name: "date-time-utilities",
      label: "Date and Time Utilities",
      icon: <FaClock className="text-yellow-400 mr-2" />,
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar Menu */}
      <div
        className="w-full lg:w-80 p-6 text-primary bg-secondary"
        style={{ height: "100vh" }}
      >
        <div className="flex items-center mb-4">
          <Link href="/">
            <Image src={logo} alt="Main Logo" width={40} height={40} className="cursor-pointer" />
          </Link>
          <Link href="/" className="ml-2">
            <Image src={Logo} alt="Valora Logo" width={100} height={50} className="cursor-pointer" />
          </Link>
        </div>
        <ul className="space-y-4">
          {/* Home Button */}
          <li>
            <Link
              href="/"
              className="p-2 rounded w-full text-left flex items-center"
            >
              <FaArrowLeft className="mr-2 text-yellow-400" />
              <span>Home</span>
            </Link>
          </li>

          {/* Tools Menu Items */}
          {tools.map(({ name, label, icon }) => (
            <li key={name}>
              <Link
                href={`/tools/${name}`}
                className={`block p-2 rounded ${
                  tool === name ? "bg-primary  text-white" : ""
                } hover:bg-white hover:text-secondary w-full text-left flex items-center`}
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">{renderTool()}</div>
    </div>
  );
}
