"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Layers, Settings, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "REST APIs", "Prisma", "JWT", "GraphQL"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"],
    color: "from-purple-500 to-indigo-400",
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    skills: ["Docker", "Git", "AWS", "GCP", "Vercel", "CI/CD"],
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Testing",
    icon: Layers,
    skills: ["Cypress", "Selenium", "Jest", "Mocha", "Playwright"],
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "AI & Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "C++", "Machine Learning", "TensorFlow"],
    color: "from-red-500 to-orange-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-white/90 group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
