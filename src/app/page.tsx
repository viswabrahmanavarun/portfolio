import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <main className="space-y-0">
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-10 text-center text-white/20 text-xs border-t border-white/5">
        <p>© {new Date().getFullYear()} Varun Viswabrahmana. Built with Next.js & Framer Motion.</p>
      </footer>
    </>
  );
}
