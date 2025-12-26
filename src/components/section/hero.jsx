import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa";
import Hero3D from "../canvas/Hero3D";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 bg-gray-950 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-700/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse delay-75"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(3,7,18,0.8)_100%)] z-0 pointer-events-none"></div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between z-10 w-full max-w-7xl">

        {/* Left Content: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight font-orbitron"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-md">
              Hambali
            </span>
          </h1>

          <div
            className="h-12 md:h-16 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              I am a{" "}
              <ReactTyped
                strings={[
                  "Fullstack Web Dev",
                  "Game Developer",
                  "Software Engineer",
                  "AI Engineer",
                  "Data Analyst",
                  "Data Scientist",
                ]}
                typeSpeed={50}
                backSpeed={40}
                className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                loop
              />
            </span>
          </div>

          <p
            className="text-base md:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed max-w-xl"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Crafting immersive digital experiences with cutting-edge technologies. I build scalable webs, intelligent AI systems, and engaging games.
          </p>

          {/* Social & CTA */}
          <div
            className="flex flex-col md:flex-row items-center gap-6 mt-8"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-cyan-500/20 overflow-hidden transition-all hover:scale-105 hover:shadow-cyan-500/40"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
              View My Work
            </a>

            <div className="flex items-center gap-5 text-gray-400">
              <a href="https://github.com/hambali-020608" className="hover:text-white hover:scale-110 transition-all duration-300 text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-blue-400 hover:scale-110 transition-all duration-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-pink-400 hover:scale-110 transition-all duration-300 text-2xl">
                <FaTiktok />
              </a>
              {/* <a href="#" className="hover:text-pink-400 hover:scale-110 transition-all duration-300 text-2xl">
                 <FaInstagram />
               </a> */}
              <a href="mailto:subastianhambali@gmail.com" className="hover:text-green-400 hover:scale-110 transition-all duration-300 text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {/* 3D Model Container */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] cursor-grab active:cursor-grabbing">
            <Hero3D />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-sm uppercase tracking-widest text-xs">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
}