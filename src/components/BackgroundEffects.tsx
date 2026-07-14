"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDocker,
  SiGit, SiPython,
} from "react-icons/si";

const backgroundIcons = [
  { Icon: SiJavascript, className: "top-20 left-16 text-yellow-400" },
  { Icon: SiReact, className: "top-40 right-24 text-cyan-400" },
  { Icon: SiNextdotjs, className: "top-16 right-1/2 text-white/70" },
  { Icon: SiHtml5, className: "bottom-32 left-24 text-orange-500" },
  { Icon: SiCss3, className: "bottom-24 right-40 text-blue-500" },
  { Icon: SiTailwindcss, className: "top-1/2 left-10 text-sky-400" },
  { Icon: SiNodedotjs, className: "top-1/3 left-1/2 text-green-500" },
  { Icon: SiMongodb, className: "top-24 left-1/3 text-green-600" },
  { Icon: SiDocker, className: "top-1/2 right-20 text-sky-500" },
  { Icon: SiPython, className: "top-3/4 left-1/2 text-yellow-500" },
];

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(generatedStars);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const spotlightX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const parallaxX = useTransform(mouseX, [0, 2000], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, 1000], [-20, 20]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Parallax Starfield */}
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px white`,
            }}
          />
        ))}
      </motion.div>

      {/* Spotlight */}
      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY,
          transform: "translate(-50%, -50%)",
        }}
        className="absolute w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[150px]"
      />

      {/* Floating Nebula Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[120px]"
      />

      {/* Tech Icons with Independent Floating */}
      {backgroundIcons.map(({ Icon, className }, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -30, 0], 
            rotate: [0, 15, 0],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${className} text-7xl pointer-events-none filter blur-[1px] md:blur-0`}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150" />
    </div>
  );
}
