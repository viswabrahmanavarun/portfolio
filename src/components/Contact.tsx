"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* SAME LIGHT BACKGROUND AS OTHER SECTIONS */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50" />

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 70, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -90, 0], y: [0, -60, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-12"
        >
          Feel free to reach out for opportunities, collaborations, or just a
          quick chat.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="mailto:v.varun2355@gmail.com"
            className="flex items-center gap-4 p-5 rounded-xl
                       bg-white/80 backdrop-blur border border-gray-200
                       shadow-sm hover:shadow-lg transition"
          >
            <Mail className="text-indigo-600" />
            <span className="font-medium">
              v.varun2355@gmail.com
            </span>
          </motion.a>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-4 p-5 rounded-xl
                       bg-white/80 backdrop-blur border border-gray-200
                       shadow-sm hover:shadow-lg transition"
          >
            <Phone className="text-green-600" />
            <span className="font-medium">
              +91 93986 92826
            </span>
          </motion.div>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="https://github.com/viswabrahmanavarun"
            target="_blank"
            className="flex items-center gap-4 p-5 rounded-xl
                       bg-white/80 backdrop-blur border border-gray-200
                       shadow-sm hover:shadow-lg transition"
          >
            <Github className="text-gray-800" />
            <span className="font-medium">
              github.com/viswabrahmanavarun
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="http://www.linkedin.com/in/varun-viswabrahmana-509217344"
            target="_blank"
            className="flex items-center gap-4 p-5 rounded-xl
                       bg-white/80 backdrop-blur border border-gray-200
                       shadow-sm hover:shadow-lg transition"
          >
            <Linkedin className="text-blue-700" />
            <span className="font-medium">
              linkedin.com/in/varun-viswabrahmana
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
