import type { Metadata } from "next";
import "@App/Styles/global.sass";

export const metadata: Metadata = {
    title: "Valora Infotech",
    themeColor: "#000000",
    description: "VALORA INFOTECH is having skilled developers & creative minds to fulfill the requirement of clients globally. We work on Android, iPhone Application & Web. We have the highly professional technical staff and Good Skilled Management Members to run this company smoothly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
