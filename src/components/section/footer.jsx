"use client";

import { FaChevronUp } from "react-icons/fa";
import { navLinks, socialLinks } from "../../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 md:gap-16 mb-16 md:mb-20">

          {/* Brand Section */}
          <div
            data-aos="fade-up"
            className="text-center lg:text-left space-y-6 md:space-y-8 max-w-sm"
          >
            <a href="#home" className="inline-flex items-center gap-4 group justify-center lg:justify-start">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-500 font-black text-lg md:text-xl font-orbitron">
                H
              </div>
              <h2 className="text-xl md:text-2xl font-orbitron font-black text-white tracking-[0.2em] uppercase">
                HAM<span className="text-cyan-400/80">BALI</span>
              </h2>
            </a>
            <p className="text-gray-500 text-[9px] md:text-[10px] leading-relaxed font-light tracking-widest uppercase">
              Building clean and reliable software solutions with a focus on quality and performance.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-400 transition-all"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-2 gap-x-12 md:gap-x-16 gap-y-8 text-center lg:text-left"
          >
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.4em]">Menu</h3>
              <ul className="space-y-3 md:space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[9px] md:text-[10px] font-bold text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.4em]">Services</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Web Development</li>
                <li className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Software Engineering</li>
                <li className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Ai Engineering</li>
                <li className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Data Analysis</li>
              </ul>
            </div>
          </div>

          {/* Status Hook */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center lg:text-right space-y-6"
          >
            <h3 className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-[0.4em]">Availability</h3>
            <p className="text-gray-400 text-[9px] md:text-[10px] max-w-[200px] lg:ml-auto uppercase tracking-widest leading-loose font-light">
              I am open to new projects and full-time opportunities.
            </p>
            <a 
              href="mailto:bastian.soltech@gmail.com"
              className="inline-block px-6 md:px-8 py-2 md:py-3 border border-cyan-500/30 text-cyan-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="font-mono text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} HAMBALI. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 md:gap-4 text-gray-500 hover:text-cyan-400 transition-all font-mono text-[7px] md:text-[8px] uppercase tracking-[0.4em]"
          >
            Back to Top
            <span className="w-7 h-7 md:w-8 md:h-8 border border-white/10 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all">
              <FaChevronUp className="text-[8px] md:text-[10px]" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
