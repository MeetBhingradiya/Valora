import type { Metadata } from "next";
import "@App/Styles/global.sass"; // Ensure the path is correct and includes your global styles
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Valora Infotech",
    themeColor: "#000000",
    description:
        "VALORA INFOTECH is having skilled developers & creative minds to fulfill the requirement of clients globally. We work on Android, iPhone Application & Web. We have the highly professional technical staff and Good Skilled Management Members to run this company smoothly.",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Add meta tags, fonts, and favicons here */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                />
            </head>
            <body className="bg-gray-100 text-gray-900 font-poppins">
                {/* You can also add a global Navbar or Sidebar here */}
                {children}
            </body>
        </html>
    );
}
