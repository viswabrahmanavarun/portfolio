"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, X } from "lucide-react";
import { useState } from "react";
import BackgroundEffects from "@/components/BackgroundEffects";

/* ===============================
   PROJECTS DATA
================================ */
const projects = [
  {
    title: "Restaurant Management System",
    description:
      "A full-stack web application designed to simplify and automate restaurant operations by managing menus, orders, kitchen workflows, reservations, and customer reviews from a single platform.",
    details:
      "Built using Next.js and MongoDB with a focus on performance, scalability, and responsive UI. Implemented authentication, cart logic, and order workflows.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/viswabrahmanavarun/Restaurant-Management-System-",
  },
  {
    title: "E-Commerce Project Using Next.js",
    description:
      "Full-stack e-commerce application with authentication, product browsing, cart management, order processing, and secure payments.",
    details:
      "Built using Next.js and MongoDB with a focus on performance, scalability, and responsive UI. Implemented authentication, cart logic, and order workflows.",
    tech: ["Next.js", "JavaScript", "MongoDB", "Tailwind"],
    github: "https://github.com/viswabrahmanavarun/e-commerce-project",
  },
  {
    title: "Chicken Disease Detection (MLOps)",
    description:
      "Machine learning system to detect poultry diseases with automated training, versioning, and deployment.",
    details:
      "End-to-end MLOps pipeline including data preprocessing, model training, experiment tracking using MLflow, and Dockerized deployment.",
    tech: ["Python", "Machine Learning", "Docker", "MLflow"],
    github: "https://github.com/viswabrahmanavarun/Project",
  },
  {
    title: "Superstore Sales Analysis Using Power BI",
    description:
      "Interactive Power BI dashboard analyzing sales, profit, customer trends, and regional performance.",
    details:
      "Performed data cleaning, modeling, and built dynamic dashboards using Power BI and DAX for actionable insights.",
    tech: ["Power BI", "DAX", "Data Analysis"],
    github:
      "https://github.com/viswabrahmanavarun/Superstore-Sales-Analysis-PowerBI",
  },
  {
    title: "AI-RFP System Using LLMs",
    description:
      "AI-powered platform for automated RFP generation and vendor proposal comparison.",
    details:
      "Used LLMs to generate structured RFPs and compare vendor responses with scoring and insights.",
    tech: ["LLMs (Groq)", "Next.js", "React", "Node.js", "Express"],
    github: "https://github.com/viswabrahmanavarun/ai-rfp-system",
  },
  {
    title: "Listings Manager System Using MSW",
    description:
      "Product listing system with search, filtering, sorting, pagination, and mocked APIs.",
    details:
      "Implemented MSW for realistic API mocking and built a performant frontend using Vite and TypeScript.",
    tech: ["Vite", "React", "TypeScript", "MSW", "Yarn"],
    github: "https://github.com/viswabrahmanavarun/listings-manager",
  },
  {
    title: "Educational Geodemographic Classification using GNNs",
    description:
      "GNN-based system to classify educational geodemographic data.",
    details:
      "Modeled spatial and socioeconomic relationships using Graph Neural Networks for accurate classification.",
    tech: ["Python", "Neural Networks", "Pandas", "NumPy", "PyTorch"],
    github: "#",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
    >
      {/* ===============================
         SAME BACKGROUND AS HERO
      ================================ */}
      <BackgroundEffects />

      {/* ===============================
         CONTENT
      ================================ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-14"
        >
          Projects
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer rounded-2xl bg-white/80 backdrop-blur
                         border p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-700 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                               bg-indigo-100 text-indigo-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===============================
         MODAL
      ================================ */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center
                       justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white max-w-xl w-full
                         rounded-xl p-6 relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h3 className="text-xl font-semibold mb-3">
                {activeProject.title}
              </h3>

              <p className="text-gray-700 mb-4">
                {activeProject.details}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                               bg-indigo-100 text-indigo-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={activeProject.github}
                target="_blank"
                className="flex items-center gap-2
                           text-gray-700 hover:text-black"
              >
                <Github size={16} />
                GitHub Repository
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
