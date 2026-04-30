import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Hero from "./components/section/hero";
import Skills from "./components/section/skills";
import NavBar from "./components/section/navbar";
import Projects from "./components/section/projects";
import Contact from "./components/section/contact";
import Footer from "./components/section/footer";
import About from "./components/section/about";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
    // Delay mounting heavy components slightly after fade starts
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} blueprint-grid min-h-screen relative`}>
        <div className="scanline-effect"></div>
        
        {/* Global Architectural Spine - Starts after Hero */}
        <div className="absolute top-[100vh] left-1/2 -translate-x-1/2 w-[1.5px] h-[calc(100%-100vh)] bg-white/10 z-[50] pointer-events-none"></div>


        <NavBar />

        <main className="relative z-10">
          {/* Mount sections only when needed or after loader to save initial LCP resources */}
          {showContent && (
            <>
              <Hero />
              
              <Skills />
              <Projects />
              <About />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
