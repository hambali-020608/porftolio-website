"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { socialLinks } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" aria-label="Contact Information" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          index="05"
          badge={t.badge}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {socialLinks.map((info, idx) => (
              <a
                key={info.name}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group relative p-8 md:p-12 bg-gray-950 hover:bg-white/[0.01] transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded border border-white/10 flex items-center justify-center mb-6 md:mb-10 text-gray-500 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <info.icon size={24} />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="font-mono text-[8px] md:text-[9px] text-gray-600 uppercase tracking-[0.4em] mb-2">{info.name}</h3>
                  <p className="text-white text-xs md:text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {info.name === "Email" ? "bastian.soltech@gmail.com" : info.name === "Github" ? "@bastian-soltech" : "@tyan.dev"}
                  </p>

                  <div className="pt-4 md:pt-6">
                    <div className="inline-flex items-center gap-2 text-[9px] md:text-[10px] text-cyan-500/60 font-bold uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-all">
                      {t.reachOut} <FaExternalLinkAlt className="text-[8px]" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

       
        </div>
      </div>
    </section>
  );
}
