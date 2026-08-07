"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import NavBar from "../../components/section/navbar";
import Footer from "../../components/section/footer";
import { ExpandableCard } from "../../components/card";
import { skillCategories } from "../../constants";
import { getIconComponent } from "../../lib/icon-mapper";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "motion/react";

// react-pdf needs DOMMatrix (client-only) — load lazily, never on the server.
const CertificatesContent = dynamic(
  () => import("../../components/section/CertificatesContent"),
  { ssr: false, loading: () => null }
);

const TABS = ["projects", "certificates", "tech"];

export default function ArchiveContent({ projects, certificates, techStack }) {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === "undefined") return "projects";
    const param = new URLSearchParams(window.location.search).get("tab");
    return TABS.includes(param) ? param : "projects";
  });

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTech = useMemo(() => {
    if (activeCategory === "all") return techStack;
    return techStack.filter((skill) => skill.category === activeCategory);
  }, [activeCategory, techStack]);

  const tabLabels = {
    projects: t.projects.title,
    certificates: t.certificates.title,
    tech: t.skills.techStack,
  };

  return (
    <>
      <div className="blueprint-grid min-h-screen relative">
        <NavBar />
        <main className="relative z-10 container mx-auto px-6 md:px-12 py-32 min-h-[60vh]">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 text-[9px] font-bold uppercase tracking-widest text-gray-400 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
              >
                <FaArrowLeft size={10} /> Home
              </Link>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white font-orbitron tracking-tighter uppercase">
              Archive<span className="text-cyan-400">_Sys</span>
            </h1>
            <p className="max-w-xl mx-auto mt-4 text-xs md:text-sm text-gray-400 leading-relaxed font-light tracking-wide">
              Full collection of projects, certificates, and technologies.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    window.history.replaceState(null, "", `?tab=${tab}`);
                  }}
                  className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                    activeTab === tab
                      ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      : "text-gray-500 border-white/10 hover:border-cyan-500/40 hover:text-cyan-400"
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project) => (
                <ExpandableCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.tags?.slice(0, 2).join(" | ") || ""}
                  src={project.image}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                      <span className="text-[10px] font-mono text-cyan-500 tracking-widest uppercase">
                        Active_Project
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-white/5 border border-white/10 text-gray-500 text-[8px] font-bold uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-white/5">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[10px] font-mono tracking-widest"
                        >
                          <FaGithub size={14} /> SRC_CODE
                        </a>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-500/70 hover:text-cyan-400 transition-colors text-[10px] font-mono tracking-widest"
                        >
                          <FaExternalLinkAlt size={12} /> LIVE_SYS
                        </a>
                      )}
                    </div>
                  </div>
                </ExpandableCard>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === "certificates" && (
            <CertificatesContent certificatesData={certificates} t={t.certificates} />
          )}

          {/* Tech Stack Tab */}
          {activeTab === "tech" && (
            <div className="space-y-12">
              <div className="flex flex-wrap justify-center gap-2">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                      activeCategory === cat.id
                        ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        : "text-gray-500 border-white/10 hover:border-cyan-500/40 hover:text-cyan-400"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {filteredTech.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="group relative bg-gray-950/50 border border-white/5 p-5 flex flex-col items-center gap-3 text-center transition-colors duration-300 hover:bg-white/[0.05] hover:border-cyan-500/30 cursor-pointer"
                    >
                      <Icon className="text-3xl text-gray-500 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110" />
                      <span className="text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {projects.length === 0 && certificates.length === 0 && techStack.length === 0 && (
            <div className="py-20 text-center font-mono text-gray-500 text-[10px] uppercase tracking-[0.3em]">
              ARCHIVE_EMPTY
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
