import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Gunakan react-icons untuk burger

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi toggle burger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md h-auto py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-2xl font-bold text-neon-blue" href="#">
          MyPortfolio
        </a>

        {/* Tombol Burger */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-3xl text-neon-blue" />
          ) : (
            <FaBars className="text-3xl text-neon-blue" />
          )}
        </div>

        {/* Menu pada mobile */}
        <ul className={`space-y-4  text-center md:flex space-x-6 ${isOpen ? "flex justify-center flex-col absolute top-16 left-0 w-full  py-4" : "hidden"}`}>
        
          <li><a className="hover:text-neon-purple" href="#home">Home</a></li>
          <li><a className="hover:text-neon-purple" href="#skills">Skills</a></li>
          <li><a className="hover:text-neon-purple" href="#projects">Projects</a></li>
          <li><a className="hover:text-neon-purple" href="#contact">Contact</a></li>
        </ul>

        {/* Icon Close untuk Burger Menu */}
        
      </div>
    </nav>
  );
}
