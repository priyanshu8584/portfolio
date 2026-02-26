"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 overflow-hidden">
      
      {/* Subtle Background Orbs */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-indigo-500/15 blur-3xl rounded-full top-[-200px] right-[-200px]" />
      <div className="absolute -z-10 w-[500px] h-[500px] bg-purple-500/15 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">

        {/* TEXT SIDE - 8 columns */}
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-500 font-medium mb-4">
            Full-Stack Software Developer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            Priyanshu <br />
            <span className="text-indigo-500">Singh</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Building scalable, performant web applications using Next.js,
            TypeScript, and modern backend systems. Focused on clean architecture,
            real-time systems, and exceptional user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:scale-105 transition"
            >
              Explore Projects
            </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"  className="px-8 py-3 bg-white-600 text-indigo-600 rounded-full hover:scale-105 transition">
  View Resume
</a>
          </div>
        </motion.div>

        {/* IMAGE SIDE - 4 columns */}
        <motion.div
          className="md:col-span-4 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            
            {/* Glow Border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 blur-md opacity-30 group-hover:opacity-60 transition" />

            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
              <Image
                src="/picture.jpeg"
                alt="Priyanshu Singh"
                width={300}
                height={300}
                className="object-cover w-[220px] h-[220px] md:w-[260px] md:h-[260px] group-hover:scale-105 transition duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}