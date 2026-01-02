"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Briefcase } from "lucide-react";

const roles = ["Software Engineer", "Full Stack Developer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  /* ===============================
     TYPEWRITER EFFECT
  ================================ */
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50" />

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-24 w-[28rem] h-[28rem] bg-rose-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight
                     bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                     bg-clip-text text-transparent"
        >
          Varun Viswabrahmana
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl font-medium text-gray-700"
        >
          {text}
          <span className="ml-1 animate-pulse">|</span>
        </motion.p>

        {/* Description (3–4 lines) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed"
        >
          I design and develop scalable <strong>full-stack applications</strong>{" "}
          using <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Node.js</strong>. I focus on building high-performance,
          maintainable systems with clean UI/UX and robust backend architectures.
          Passionate about solving real-world problems through efficient,
          user-centric software solutions.
        </motion.p>

        {/* View Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#projects"
            className="flex items-center gap-3 rounded-full
                       bg-indigo-600 px-8 py-4 text-white
                       font-semibold shadow-lg
                       hover:bg-indigo-700 hover:scale-105 transition"
          >
            <Briefcase size={20} />
            View Projects
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="mt-20 flex justify-center text-gray-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
}
