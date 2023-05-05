import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Head from "next/head";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projets from "@/components/Projects";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className=" bg-gray-950 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* header */}
      <Header />

      {/* hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-start">
        <About />
      </section>

      {/* experience */}
      <section id="experience" className="snap-start">
        <Experience />
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className=" snap-start">
        <Projects />
      </section>

      {/* contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </main>
  );
}
