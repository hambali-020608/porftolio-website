import { useState } from "react";
import "./App.css";
import Hero from "./components/section/hero";
import Skills from "./components/section/skills";
import NavBar from "./components/section/navbar";
import Projects from "./components/section/projects";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import About from "./components/section/about";

function App() {
  return (<>
      {/* Navigation Bar */}
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <About/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
