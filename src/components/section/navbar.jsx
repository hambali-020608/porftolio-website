"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { navLinks } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: t.home, href: "#home" },
    { name: t.skills, href: "#skills" },
    { name: t.projects, href: "#projects" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <header>
      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-gray-950/80 backdrop-blur-md border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="relative group flex items-center gap-2">
            <div className="w-8 h-8 bg-transparent border border-cyan-500/40 rounded flex items-center justify-center text-cyan-400 font-bold text-sm group-hover:bg-cyan-500/10 transition-all">
              H
            </div>
            <span className="text-sm font-orbitron font-black text-white tracking-[0.2em] uppercase hidden sm:block">
              HAM<span className="text-cyan-400/80">BALI</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 lg:space-x-12 items-center">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-[10px] font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.3em] group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500/60 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            
            {/* Language Toggle */}
            <li>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded font-mono text-[9px] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all uppercase tracking-widest"
              >
                <FaGlobe className="text-[10px]" />
                {language === 'en' ? 'ID' : 'EN'}
              </button>
            </li>

            <li>
              <a
                href="#contact"
                className="px-6 py-2 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all active:scale-95"
              >
                {t.talk}
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="px-2 py-1 border border-white/10 rounded font-mono text-[9px] text-gray-400 uppercase tracking-widest"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle navigation menu"
              className="text-white focus:outline-none p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-950/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-500 z-[90] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
        }`}
      >
        {menuLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`text-3xl font-orbitron font-bold text-white hover:text-cyan-400 tracking-widest transition-all ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="px-10 py-4 bg-cyan-600 text-white rounded-full font-bold uppercase tracking-widest shadow-xl shadow-cyan-500/20"
        >
          {t.talk}
        </a>
      </div>
    </header>
  );
}
