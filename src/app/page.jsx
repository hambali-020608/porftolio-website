"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";

const NavBar = dynamic(() => import("../components/section/navbar"), { ssr: false });
const Hero = dynamic(() => import("../components/section/hero"), { ssr: false });
const Skills = dynamic(() => import("../components/section/skills"), { ssr: false });
const Projects = dynamic(() => import("../components/section/projects"), { ssr: false });
const Certificates = dynamic(() => import("../components/section/certificates"), { ssr: false });
const About = dynamic(() => import("../components/section/about"), { ssr: false });
const Contact = dynamic(() => import("../components/section/contact"), { ssr: false });
const Footer = dynamic(() => import("../components/section/footer"), { ssr: false });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="blueprint-grid min-h-screen relative">
        <div className="scanline-effect"></div>
        
        <div className="absolute top-[100vh] left-1/2 -translate-x-1/2 w-[1.5px] h-[calc(100%-100vh)] bg-white/10 z-[50] pointer-events-none"></div>

        <NavBar />

        <main className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Certificates />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
