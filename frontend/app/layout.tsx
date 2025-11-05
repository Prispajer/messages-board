import React from "react";
import type {Metadata} from "next";
import ReduxProvider from "@/store/Provider";
import localFont from "next/font/local";
import {Toaster} from "@/components/ui/toaster";
import "./globals.css";

const geistSans = localFont({
    src: "../public/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../public/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Messages Board",
    description: "Prosta aplikacja do dodawania, edytowania i usuwania wiadomości. Zbudowana w Next.js z RTK Query i ShadCN UI.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
            {children}
            <Toaster/>
        </ReduxProvider>
        </body>
        </html>
    );
}
