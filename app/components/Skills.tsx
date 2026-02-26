"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Server,
    skills: ["Next.js", "React", "Node.js", "Express", "LangChain"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Convex", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "Postman", "Tailwind CSS", "shadcn/ui"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight">
          Technical Skills
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Production-ready experience building full-stack systems with modern
          tools, real-time architectures, and scalable infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-indigo-500 hover:text-white transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}