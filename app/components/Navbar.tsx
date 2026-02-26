"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  // { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  // { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme
  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) return null; // prevents hydration mismatch

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800 transition">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:opacity-80 transition"
        >
          Priyanshu Singh
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-500 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        

      </nav>
    </header>
  );
}