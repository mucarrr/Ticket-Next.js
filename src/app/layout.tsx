import type { Metadata } from "next";
import { Geist, Geist_Mono, Smooch } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const smooch = Smooch({
  variable: "--font-smooch",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticket Management System",
  description: "Ticket Management System",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${smooch.variable}`}
      >
        <div className="flex h-full">
          <Sidebar/>
          <div className="min-h-screen w-full">
            <Header/>
            <main className="h-[calc(100vh-189px)] overflow-y-auto px-4 md:px-8 pb-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
