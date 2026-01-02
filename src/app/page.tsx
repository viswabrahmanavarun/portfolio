import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      {/* FIXED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-24">
        {/* HOME / HERO */}
        <Hero />

        {/* SKILLS */}
        <Skills />

        {/* PROJECTS */}
        <Projects />

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* CONTACT */}
        <Contact />
      </main>
    </>
  );
}
