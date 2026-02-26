import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Priyanshu | Full-Stack Software Developer",
  description:
    "Priyanshu Singh – Full-Stack Developer from Kolkata building high-performance modern web applications.",
  keywords: ["Priyanshu Singh", "Full Stack Developer", "Next.js Developer", "Kolkata Developer"],
  authors: [{ name: "Priyanshu Singh" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}