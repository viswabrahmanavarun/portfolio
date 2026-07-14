"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Integrated M.Tech in Software Engineering",
    institution: "Vellore Institute of Technology",
    duration: "2020 – 2025",
    location: "Vellore, India",
    description: "Specialized in full-stack development, cloud computing, and machine learning. Actively involved in research and technical projects.",
    color: "from-blue-500 to-cyan-400",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            My academic background and key research focus.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.color}`} />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-blue-400 mb-4">
                    <GraduationCap size={20} />
                    <span className="text-sm font-bold uppercase tracking-widest">{item.institution}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 text-sm text-white/40 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
