import type { Metadata, Viewport } from "next";
import "@App/Styles/global.scss"; // Ensure the path is correct and includes your global styles
import { ReactNode } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "Valora Infotech",
    description: "VALORA INFOTECH is having skilled developers & creative minds to fulfill the requirement of clients globally. We work on Android, iPhone Application & Web. We have the highly professional technical staff and Good Skilled Management Members to run this company smoothly.",
};

export const viewport: Viewport = {
    themeColor: '#000000',
    initialScale: 1,
    width: 'device-width',
    height: 'device-height',
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
}

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <script defer src="/js/particles.js"></script>
                <GoogleAnalytics gaId="G-1MLJGLLSTX" />
            </head>
            <body className="bg-gray-100 text-gray-900 font-poppins">
                {children}
            </body>
        </html>
    );
}
