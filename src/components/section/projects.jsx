import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import DecryptText from "../Decrypt";
export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Music Downloader",
      desc: "A powerful tool to search and download music including Spotify support. Features a clean UI and fast processing.",
      domain: ["musical-down.vercel.app"],
      image: "/music.png",
      github: "#",
      live: "https://musical-down.vercel.app",
    },
    {
      title: "Youtube Downloader",
      desc: "Fast, ad-free Youtube video and audio downloader. Supports multiple formats and high-quality resolutions.",
      domain: ["ytdl-prof.vercel.app"],
      image: "/yt.png",
      github: "#",
      live: "https://ytdl-prof.vercel.app",
    },
    {
      title: "CoffeeShop Website",
      desc: "An interactive and modern e-commerce platform for ordering premium coffee with real-time cart functionality.",
      domain: ["senja-kita.vercel.app"],
      image: "/coffe.png",
      github: "#",
      live: "https://senja-kita.vercel.app",
    },
    {
      title: "Movies Platform",
      desc: "Stream the latest and most popular movies for free. Features category filtering, search, and detailed info.",
      domain: ["nonton-yuk21.vercel.app"],
      image: "/movie.png",
      github: "#",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden min-h-screen">
      
      {/* HUD Background Elements */}
      <div className="absolute inset-0 hud-grid-bg opacity-20 pointer-events-none"></div>
      
      {/* Fixed HUD Frame */}
      <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center p-4 md:p-10">
        <div className="w-full h-full max-w-7xl border border-cyan-500/10 relative">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400 opacity-30"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400 opacity-30"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-40" >
          <h2 className="text-5xl md:text-7xl font-black text-white font-orbitron tracking-widest uppercase">
            <DecryptText text="My" speed={70} delay={1000} /> <DecryptText text="Projects" speed={70} delay={1000} />
          </h2>
          <div className="mt-4 flex justify-center items-center gap-4 text-cyan-400 font-mono text-sm">
            <span className="w-12 h-[1px] bg-cyan-500"></span>
            <DecryptText text="PROJECT_ARCHIVE_V2.0" speed={60} delay={1000} />
            <span className="w-12 h-[1px] bg-cyan-500"></span>
          </div>
        </div>

        <div className="space-y-[30vh] max-w-5xl mx-auto pb-40">
          {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
            <div
              key={index}
              className="relative group"
              // AOS ANIMATION PROPERTIES
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-offset="100"
            >
              {/* Parallax HUD Data Side (AOS zoom-in) */}
              <div 
                className="absolute -left-24 top-0 font-mono text-[10px] text-cyan-500 hidden xl:block"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <p className="animate-pulse">TRACKING ID: 00{index + 1}</p>
                <p>STATUS: OPTIMIZED</p>
                <div className="w-16 h-[1px] bg-cyan-500/40 mt-2"></div>
              </div>

              {/* Main Project Card */}
              <div className="relative bg-gray-900/60 backdrop-blur-xl border-l-4 border-gray-800 group-hover:border-cyan-500 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                
                {/* Scanline Effect (Only visible on hover or through CSS animation) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-2 bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-[scanline_3s_linear_infinite]"></div>
                </div>

                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden border-r border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-transparent"></div>
                  </div>

                  <div className="flex-1 p-8 md:p-12">
                    <div className="flex justify-between items-center mb-6">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-mono border border-cyan-500/20">
                        PROJECT_{index + 1}
                      </span>
                      <div className="flex gap-4">
                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20}/></a>
                        <a href={project.live} className="text-gray-400 hover:text-cyan-400 transition-colors"><FaExternalLinkAlt size={18}/></a>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white font-orbitron mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-8">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.domain.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-cyan-500/60">
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center" data-aos="fade-up">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-10 py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono tracking-widest text-sm hover:border-cyan-400 transition-all overflow-hidden"
          >
            <span className="relative z-10">{showAll ? "DEACTIVATE_ARCHIVE" : "ACCESS_FULL_DATABASE"}</span>
            <div className="absolute inset-0 bg-cyan-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}