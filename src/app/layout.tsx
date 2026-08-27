import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Headers from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const telma = localFont({
  src: "../fonts/Telma-Light.woff2",
  variable: "--font-telma",
  weight: "300",
  style: "normal",
});

const technor = localFont({
  src: "../fonts/Technor-Bold.woff2",
  variable: "--font-technor",
  weight: "700",
  style: "normal",
});

const zodiak = localFont({
  src: "../fonts/Zodiak-Regular.woff2",
  variable: "--font-zodiak",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Otoniel Gómez",
  description: "Portafolio personal de Otoniel Gómez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${telma.variable} ${technor.variable} ${zodiak.variable} h-full antialiased`}
    >
      <body className="flex justify-center">
        <Headers />
        {children}
      </body>
    </html>
  );
}
