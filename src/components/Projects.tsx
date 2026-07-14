"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Restaurant Management System",
    description: "A full-stack web application designed to simplify and automate restaurant operations by managing menus, orders, and reviews.",
    details: "Built using Next.js and MongoDB with a focus on performance, scalability, and responsive UI. Implemented authentication, cart logic, and order workflows.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Express"],
    github: "https://github.com/viswabrahmanavarun/Restaurant-Management-System-",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Shopverse E-Commerce",
    description: "Full-stack e-commerce application with product browsing, cart management, and secure payments.",
    details: "Built using Next.js and MongoDB with a focus on performance and responsive UI. Implemented JWT authentication and real-time order tracking.",
    tech: ["Next.js", "JavaScript", "MongoDB", "Tailwind"],
    github: "https://github.com/viswabrahmanavarun/Shopverse_ECommerce_Project",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Chicken Disease Detection",
    description: "Machine learning system to detect poultry diseases with automated training and versioning.",
    details: "End-to-end MLOps pipeline including data preprocessing, model training with TensorFlow, and Dockerized deployment.",
    tech: ["Python", "TensorFlow", "Docker", "MLflow"],
    github: "https://github.com/viswabrahmanavarun/Project",
    category: "AI/MLOps",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Superstore Sales Analysis",
    description: "Interactive Power BI dashboard analyzing sales, profit, and customer trends.",
    details: "Performed data cleaning and built dynamic dashboards using Power BI and DAX for actionable business insights.",
    tech: ["Power BI", "DAX", "Data Analysis"],
    github: "https://github.com/viswabrahmanavarun/Superstore-Sales-Analysis-PowerBI",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "AI-RFP System",
    description: "AI-powered platform for automated RFP generation and vendor proposal comparison.",
    details: "Used LLMs (Groq) to generate structured RFPs and compare vendor responses with scoring algorithms.",
    tech: ["LLMs", "Next.js", "React", "Node.js"],
    github: "https://github.com/viswabrahmanavarun/ai-rfp-system",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Listings Manager",
    description: "Product listing system with search, filtering, and mocked APIs using MSW.",
    details: "Implemented MSW for realistic API mocking and built a performant frontend using Vite and TypeScript.",
    tech: ["Vite", "React", "TypeScript", "MSW"],
    github: "https://github.com/viswabrahmanavarun/listings-manager",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1000",
  },
];

const ProjectCard = ({ project, index, setActiveProject }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onClick={() => setActiveProject(project)}
      className="group relative cursor-pointer glass-card overflow-hidden transition-all duration-500 hover:border-blue-500/50 shadow-2xl"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-56 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
        <div className="absolute top-4 right-4 translate-z-20">
          <span className="px-3 py-1 text-[8px] font-black bg-white/10 backdrop-blur-md text-white rounded-full uppercase tracking-widest border border-white/10">
            {project.category}
          </span>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="p-8"
      >
        <h3 className="text-2xl font-black mb-3 text-white group-hover:text-blue-400 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-white/40 text-sm mb-6 line-clamp-2 font-medium">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {project.tech.slice(0, 2).map((t: string) => (
              <span key={t} className="text-[9px] font-black text-blue-500 uppercase tracking-tighter bg-blue-500/5 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="text-white/20 group-hover:text-blue-500 group-hover:translate-x-2 transition-all">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <section id="projects" className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest text-blue-500 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Portfolio
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
            Digital <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-white/30 text-lg max-w-2xl mx-auto font-medium">
            A fusion of design and engineering to solve complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              setActiveProject={setActiveProject} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotateX: -20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 50, rotateX: 20 }}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_100px_rgba(37,99,235,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 md:h-96">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-3 bg-white/5 text-white rounded-full hover:bg-white/10 transition-colors border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-10 md:p-14 -mt-20 relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
                  <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">{activeProject.title}</h3>
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-black hover:bg-blue-700 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                  >
                    <Github size={20} /> VIEW SOURCE
                  </a>
                </div>

                <p className="text-white/60 text-xl mb-12 leading-relaxed font-medium">
                  {activeProject.details}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6">Stack Overview</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.tech.map((t: string) => (
                        <span key={t} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6">Category</h4>
                    <div className="px-5 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold inline-block">
                      {activeProject.category}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
