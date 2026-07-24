"use client";
import { useEffect } from "react";
import NavBar from "../components/section/navbar";
import Hero from "../components/section/hero";
import Skills from "../components/section/skills";
import Projects from "../components/section/projects";
import Certificates from "../components/section/certificates";
import About from "../components/section/about";
import Contact from "../components/section/contact";
import Footer from "../components/section/footer";

export default function Home() {
  
  return (
    <>
      <div className="blueprint-grid min-h-screen relative">
        <div className="scanline-effect"></div>
        
        <div className="absolute top-[100vh] left-1/2 -translate-x-1/2 w-[1.2px] h-[calc(100%-100vh)] bg-white/10 z-[50] pointer-events-none"></div>

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