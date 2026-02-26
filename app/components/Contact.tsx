"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight">
          Let’s Build Something Great
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Open to Software Engineering, Full-Stack, and Product-focused roles.
          Let’s connect and create impactful digital experiences.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-8">
            Contact Information
          </h3>

          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-500" />
              <a
                href="mailto:singh.priyanshu.1024@gmail.com"
                className="hover:text-indigo-500 transition"
              >
                singh.priyanshu.1024@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-500" />
              <a
                href="tel:+918584921928"
                className="hover:text-indigo-500 transition"
              >
                +91 85849 21928
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-500" />
              <span>Kolkata, West Bengal, India</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <Linkedin className="text-indigo-500" />
              <a
                href="https://www.linkedin.com/in/priyanshu-singh-8a7652258/"
                target="_blank"
                className="hover:text-indigo-500 transition"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-4">
              <Github className="text-indigo-500" />
              <a
                href="https://github.com/priyanshu8584"
                target="_blank"
                className="hover:text-indigo-500 transition"
              >
                GitHub Portfolio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-8 shadow-2xl flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Ready to Collaborate?
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            I’m actively looking for impactful engineering opportunities
            where I can contribute to scalable systems, clean architecture,
            and exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:singh.priyanshu.1024@gmail.com"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:scale-105 transition"
            >
              Send Email
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}