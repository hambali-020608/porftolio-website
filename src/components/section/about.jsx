import { FaCode, FaBrain, FaGamepad, FaRocket, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies Mastered", value: "15+" },
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 font-orbitron">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Column: Image Area */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                <img
                  src="/my2.jpeg"
                  alt="Hambali Subastian"
                  className="w-96 h-96 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div
                data-aos="zoom-in"
                // data-aos-delay="100"
                className="absolute bottom-0 right-10 bg-gray-900 border border-gray-700 p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-cyan-500/20 p-2 rounded-full text-cyan-400">
                  <FaRocket />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="text-sm font-bold text-white">Open to Work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full lg:w-1/2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Driven by <span className="text-purple-400">Innovation</span> & <span className="text-cyan-400">Technology</span>
            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              I'm <span className="text-white font-semibold">Hambali Subastian</span>, a passionate technologist based in Indonesia.
              My journey spans across <span className="text-cyan-400">Fullstack Development</span>, <span className="text-purple-400">Game Dev</span>, and <span className="text-pink-400">AI</span>.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I am obsessed with the intersection of code, mathematics, and creativity. Whether I'm building complex web systems, training neural networks, or crafting immersive game worlds, I always strive for excellence and innovation.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <h4 className="text-2xl md:text-3xl font-bold text-white font-orbitron">{stat.value}</h4>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-2">
              <a href="mailto:subastianhambali@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <FaEnvelope />
                </div>
                <span className="text-sm">subastianhambali@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-sm">Indonesia (+62 882-9890-9654)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
