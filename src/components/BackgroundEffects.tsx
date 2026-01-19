"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPython,
} from "react-icons/si";

/* ===============================
   FLOATING ICON CONFIG (GLOBAL)
================================ */
const backgroundIcons = [
  { Icon: SiJavascript, className: "top-20 left-16 text-yellow-400" },
  { Icon: SiReact, className: "top-40 right-24 text-cyan-400" },
  { Icon: SiNextdotjs, className: "top-16 right-1/2 text-black/70" },
  { Icon: SiHtml5, className: "bottom-32 left-24 text-orange-500" },
  { Icon: SiCss3, className: "bottom-24 right-40 text-blue-500" },
  { Icon: SiTailwindcss, className: "top-1/2 left-10 text-sky-400" },

  { Icon: SiNodedotjs, className: "top-1/3 left-1/2 text-green-500" },
  { Icon: SiExpress, className: "bottom-1/3 right-1/3 text-gray-600" },

  { Icon: SiMongodb, className: "top-24 left-1/3 text-green-600" },
  { Icon: SiMysql, className: "bottom-16 left-1/4 text-blue-600" },
  { Icon: SiPostgresql, className: "top-2/3 right-16 text-indigo-600" },

  { Icon: SiDocker, className: "top-1/2 right-20 text-sky-500" },
  { Icon: SiGit, className: "bottom-1/2 left-20 text-red-500" },

  { Icon: SiPython, className: "top-3/4 left-1/2 text-yellow-500" },
];

export default function BackgroundEffects() {
  return (
    <>
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-rose-50 z-0" />

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-24 w-96 h-96
                   bg-sky-200/40 rounded-full blur-3xl z-0"
      />

      <motion.div
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-24 w-[28rem] h-[28rem]
                   bg-rose-200/40 rounded-full blur-3xl z-0"
      />

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-80 h-80
                   bg-purple-200/30 rounded-full blur-3xl z-0"
      />

      {/* Floating Icons */}
      {backgroundIcons.map(({ Icon, className }, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${className}
                      text-7xl opacity-20 z-0
                      pointer-events-none`}
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
}
