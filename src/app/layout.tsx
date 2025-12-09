import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wilson Ramires - Desenvolvedor Web",
  description: "Desenvolvedor web com mais de 22 anos de experiência, especializado em PHP e WordPress",
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'tctYPP1bKryxXl7LxYO0lR8l2dCcKnFBS3iBICP5WCA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
