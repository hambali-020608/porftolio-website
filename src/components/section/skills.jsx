import { useState } from "react";
import React from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: "⚡" },
    { id: "web", label: "Web", icon: "🌐" },
    { id: "game", label: "Game Dev", icon: "🎮" },
    { id: "ai", label: "AI/Data", icon: "🤖" },
    { id: "tools", label: "Tools", icon: "🛠️" },
  ];

  const techStack = [
    // Web Development
    { tech: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "web" },
    { tech: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "web" },
    { tech: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "web" },
    { tech: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "web" },
    { tech: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg", category: "web" },
    { tech: "Vue.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "web" },
    { tech: "Svelte", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg", category: "web" },
    { tech: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "web" },
    { tech: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "web" },
    { tech: "Laravel", img: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg", category: "web" },
    { tech: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", category: "web" },
    { tech: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "web" },
    { tech: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "web" },
    { tech: "Prisma", img: "https://avatars.githubusercontent.com/u/17219288?s=280&v=4", category: "web" },

    // Game Development
    { tech: "Unity", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", category: "game" },
    { tech: "Godot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", category: "game" },
    { tech: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", category: "game" },

    // AI & Data Science
    { tech: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "ai" },
    { tech: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "ai" },
    { tech: "PyTorch", img: "https://pytorch.org/assets/images/pytorch-logo.png", category: "ai" },
    { tech: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", category: "ai" },

    // Tools
    { tech: "Docker", img: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", category: "tools" },
    { tech: "Github", img: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000", category: "tools" },
    { tech: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
    { tech: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools" },
  ];

  const skillCards = [
    {
      title: "Game Developer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
      desc: "Building immersive 2D/3D worlds with advanced physics and mechanics.",
      color: "border-purple-500",
      glow: "shadow-purple-500/20"
    },
    {
      title: "Fullstack Developer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Creating scalable web apps with modern frontend & backend stacks.",
      color: "border-cyan-500",
      glow: "shadow-cyan-500/20"
    },
    {
      title: "AI Engineer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      desc: "Developing intelligent models for data analysis and automation.",
      color: "border-yellow-500",
      glow: "shadow-yellow-500/20"
    },
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === "all"
    ? techStack
    : techStack.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div
         
          className="text-center mb-20"
        >

          <h2  data-aos="fade-down"
          data-aos-duration="1000" className="text-4xl md:text-5xl font-extrabold text-white mt-4 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400">
              My Expertise & Skills
            </span>
          </h2>
          <div  data-aos="zoom-in"
          data-aos-duration="1000" className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Top Feature Cards (Expertise) */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {skillCards.map((card, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`group relative p-8 bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-opacity-100 transition-all duration-300 ${card.color} hover:shadow-2xl ${card.glow} hover:-translate-y-2 hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                  <img src={card.img} alt={card.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-orbitron">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Tabs */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 font-orbitron">Tech Stack</h3>

          <div className="flex flex-wrap justify-center gap-4 bg-gray-900/60 p-2 rounded-full border border-gray-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30" : "text-gray-400 hover:text-white"
                  }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{cat.icon}</span> {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto min-h-[400px]"
        >
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.tech}
              data-aos="zoom-in"
              data-aos-duration="500"
              className="group relative bg-gray-800/20 hover:bg-gray-800/60 border border-gray-700/50 hover:border-cyan-500/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-default hover:scale-105"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-900/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <img src={skill.img} alt={skill.tech} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors">
                {skill.tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}