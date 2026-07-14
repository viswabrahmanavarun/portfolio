"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    icon: Award,
    color: "text-blue-400",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    date: "2023",
    icon: Award,
    color: "text-red-400",
  },
  {
    title: "MERN Stack Internship",
    issuer: "Ethnus",
    date: "2024",
    icon: Briefcase,
    color: "text-green-400",
  },
  {
    title: "Web Development Internship",
    issuer: "Bharat Intern",
    date: "2023",
    icon: Briefcase,
    color: "text-yellow-400",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Awards & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            My professional journey and certifications that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="glass-card p-6 group transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-xl bg-white/5 group-hover:scale-110 transition-transform ${cert.color}`}>
                  <cert.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white/90 group-hover:text-blue-400 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-black text-white/20 uppercase tracking-tighter">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">
                    Issued by <span className="text-white font-semibold">{cert.issuer}</span>
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
