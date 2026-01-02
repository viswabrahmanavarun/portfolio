"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = item.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50
                 bg-white/80 backdrop-blur-md border-b"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight"
        >
          Varun's Portfolio
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium transition
                  ${
                    active === item.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-black"
                  }`}
              >
                {item.label}
              </a>

              {/* Animated underline */}
              {active === item.id && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute left-0 -bottom-2 h-[2px] w-full bg-blue-600 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hint */}
        <span className="md:hidden text-xs text-gray-500">
          Scroll ↓
        </span>
      </nav>
    </header>
  );
}
