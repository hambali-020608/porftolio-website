import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ikon dari react-icons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-opacity-30 backdrop-blur-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a className="text-2xl font-bold text-neon-blue" href="#">
          MyPortfolio
        </a>

        {/* Burger Button (Mobile) */}
        <button
          className="md:hidden text-neon-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a className="hover:text-neon-purple" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-neon-purple" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="hover:text-neon-purple" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:text-neon-purple" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Menu Mobile (Muncul saat tombol ditekan) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="text-center space-y-6 text-2xl text-white">
          <li>
            <a
              className="hover:text-neon-purple"
              href="#home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-neon-purple"
              href="#skills"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-neon-purple"
              href="#projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-neon-purple"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
