import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Music Downloader",
      desc: "A powerful tool to search and download music including Spotify support. Features a clean UI and fast processing.",
      tech: ["React", "Node.js", "API"],
      image: "/music.png",
      github: "#",
      live: "#",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Youtube Downloader",
      desc: "Fast, ad-free Youtube video and audio downloader. Supports multiple formats and high-quality resolutions.",
      tech: ["Next.js", "Python", "FFmpeg"],
      image: "/yt.png",
      github: "#",
      live: "#",
      color: "from-red-600 to-red-500"
    },
    {
      title: "CoffeeShop Website",
      desc: "An interactive and modern e-commerce platform for ordering premium coffee with real-time cart functionality.",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      image: "/coffe.png",
      github: "#",
      live: "#",
      color: "from-amber-600 to-orange-500"
    },
    {
      title: "Movies Platform",
      desc: "Stream the latest and most popular movies for free. Features category filtering, search, and detailed info.",
      tech: ["React", "TMDB API", "Redux"],
      image: "/movie.png",
      github: "#",
      live: "#",
      color: "from-cyan-500 to-blue-500"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center mb-20"
        >
          <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-500/5">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 font-orbitron">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-20 mix-blend-overlay z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gray-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-20 backdrop-blur-sm">
                  <a
                    href={project.github}
                    className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all hover:scale-110 hover:rotate-6"
                    title="View Code"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-cyan-500/20 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all hover:scale-110 hover:-rotate-6"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={22} />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative">
                {/* Glow Line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                <h3 className="text-2xl font-bold text-white mb-3 font-orbitron group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-center mt-20"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
          >
            View All Archives <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

      </div>
    </section>
  );
}
