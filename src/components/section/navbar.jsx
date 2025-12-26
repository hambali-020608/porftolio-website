import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="1000"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-lg"
        : "bg-transparent backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="relative group">
          <span className="text-2xl font-orbitron font-bold text-white tracking-wider">
            My<span className="text-cyan-400">PORTFOLIO</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-widest group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full box-shadow-glow"></span>
              </a>
            </li>
          ))}
          <button
            className="px-5 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/10 transition-all hover:scale-105 active:scale-95"
          >
            Hire Me
          </button>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50 relative">
          {/* z-50 ensures button is above the menu if needed, though menu is also z something */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none relative z-50">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-950 flex flex-col items-center justify-center space-y-8 md:hidden transition-transform duration-300 z-40 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-orbitron text-gray-300 hover:text-cyan-400 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
