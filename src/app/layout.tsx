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
<<<<<<< HEAD
                {/* Add meta tags, fonts, and favicons here */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
                />
                <meta httpEquiv="Content-Security-Policy" content="
                    default-src 'self';
                    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net;
                    frame-src 'self' https://www.google.com;"
                />
                <script
                    src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
                    defer
                ></script>
=======
                <meta charSet="utf-8" />
                <script defer src="/js/particles.js"></script>
                <GoogleAnalytics gaId="G-1MLJGLLSTX" />
>>>>>>> 46ede6246f8c7a4831198d8be264864f4a1aa1c7
            </head>
            <body className="bg-gray-100 text-gray-900 font-poppins">
                {children}
            </body>
        </html>
    );
}
