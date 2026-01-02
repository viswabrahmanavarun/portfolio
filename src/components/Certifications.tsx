"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
  },
  {
    title: "MERN Stack Internship",
    issuer: "Ethnus",
  },
  {
    title: "Web Development Internship",
    issuer: "Bharat Intern",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-14"
        >
          Certifications & Internships
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative bg-white/80 backdrop-blur rounded-2xl
                         border border-gray-200 p-6
                         shadow-sm hover:shadow-lg transition"
            >
              {/* Soft Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100
                           bg-gradient-to-br from-indigo-50 via-transparent to-pink-50
                           transition pointer-events-none"
              />

              <div className="relative z-10 flex gap-4">
                <div
                  className="h-12 w-12 flex items-center justify-center
                             rounded-xl bg-indigo-100 text-indigo-600"
                >
                  <Award size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Issued by{" "}
                    <span className="font-medium">
                      {cert.issuer}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
