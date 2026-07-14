"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Github, Linkedin, Mail } from "lucide-react";
import Magnetic from "./Magnetic";

const roles = ["Software Engineer", "Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const rotateX = useTransform(smoothY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothX, [-500, 500], [-10, 10]);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
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
    }, reverse ? 30 : 60);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const name = "Varun Viswabrahmana";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      <motion.div 
        style={{ rotateX, rotateY, z: 100 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase glass-card"
        >
          Architecting Digital Experiences
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
          {name.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-4 last:mr-0">
              {word.split("").map((char, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: (i * 10 + j) * 0.03,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className={`inline-block ${i === 0 ? "text-gradient" : "text-white/90"}`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl md:text-4xl font-bold text-white/50 h-12 flex items-center justify-center"
        >
          {text}
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="ml-2 w-1 h-8 md:h-12 bg-blue-500"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Building high-performance, scalable web ecosystems with 
          <span className="text-white"> Modern Tech Stacks</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          <Magnetic>
            <a
              href="#projects"
              className="group relative flex items-center gap-3 px-10 py-5 rounded-full bg-blue-600 text-white font-black overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Briefcase size={20} className="relative z-10" />
              <span className="relative z-10">EXPLORE WORK</span>
            </a>
          </Magnetic>

          <div className="flex items-center gap-6">
            {[
              { Icon: Github, href: "https://github.com/Viswabrahmanavarun" },
              { Icon: Linkedin, href: "https://linkedin.com/in/varun-viswabrahmana" },
              { Icon: Mail, href: "mailto:v.varun2355@gmail.com" },
            ].map((social, i) => (
              <Magnetic key={i}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full glass-card hover:text-blue-400 hover:scale-110 transition-all duration-300"
                >
                  <social.Icon size={24} />
                </a>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-white/20 uppercase tracking-[0.5em] text-[8px] font-black"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}
