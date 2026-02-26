"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a href={project.live} className="text-indigo-500 text-sm">
            Live →
          </a>
          <a href={project.code} className="text-indigo-500 text-sm">
            Code →
          </a>
        </div>
      </div>
    </motion.div>
  );
}