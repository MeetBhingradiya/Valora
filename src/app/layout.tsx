import type { Metadata, Viewport } from "next";
import "@Styles/globals.css";
import { ReactNode } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "Valora Infotech",
    description: "VALORA INFOTECH is having skilled developers & creative minds to fulfill the requirement of clients globally. We work on Android, iPhone Application & Web. We have the highly professional technical staff and Good Skilled Management Members to run this company smoothly.",
};

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

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
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <script defer src="/js/particles.js"></script>
                <GoogleAnalytics gaId="G-1MLJGLLSTX" />
            </head>
            <body className={"bg-gray-100 text-gray-900 font-poppins " + poppins.className}>
                <ThemeProvider
                    defaultTheme="dark"
                    attribute="class"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}