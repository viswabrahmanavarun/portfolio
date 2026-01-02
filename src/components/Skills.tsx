"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    color: "blue",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "green",
    items: ["Node.js", "Express.js", "REST APIs", "Prisma"],
  },
  {
    title: "Databases",
    color: "purple",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    color: "orange",
    items: ["AWS", "Google Cloud Platform (GCP)", "Git", "Docker"],
  },
  {
    title: "Testing",
    color: "yellow",
    items: ["Cypress", "Selenium", "Mocha", "Chai"],
  },
  {
    title: "AI / Data",
    color: "red",
    items: ["Python", "Machine Learning", "MLOps", "Power BI"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
    >
      {/* SAME LIGHT BACKGROUND AS HERO & PROJECTS */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50" />

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-24 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group bg-white/80 backdrop-blur border border-gray-200
                         rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Color Line */}
              <div className="mb-4">
                <div
                  className={`h-1 w-12 rounded-full
                    ${skill.color === "blue" && "bg-blue-500"}
                    ${skill.color === "green" && "bg-green-500"}
                    ${skill.color === "purple" && "bg-purple-500"}
                    ${skill.color === "orange" && "bg-orange-500"}
                    ${skill.color === "yellow" && "bg-yellow-500"}
                    ${skill.color === "red" && "bg-red-500"}
                  `}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-5">
                {skill.title}
              </h3>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    className={`text-sm px-4 py-1.5 rounded-full
                      bg-gray-100 border border-gray-200 text-gray-700
                      transition cursor-default
                      ${skill.color === "blue" && "hover:bg-blue-100 hover:text-blue-700"}
                      ${skill.color === "green" && "hover:bg-green-100 hover:text-green-700"}
                      ${skill.color === "purple" && "hover:bg-purple-100 hover:text-purple-700"}
                      ${skill.color === "orange" && "hover:bg-orange-100 hover:text-orange-700"}
                      ${skill.color === "yellow" && "hover:bg-yellow-100 hover:text-yellow-700"}
                      ${skill.color === "red" && "hover:bg-red-100 hover:text-red-700"}
                    `}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
