import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gray-900 text-center overflow-hidden">
      {/* Efek Neon Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-1/4 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-1/4 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h3 className="text-3xl font-bold text-[#00FFFF] mb-4 drop-shadow-lg">
          Let's Connect
        </h3>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          Feel free to reach out for collaborations, projects, or just to say hi!
        </p>

        <nav className="flex justify-center gap-6 text-gray-300 mb-6">
          <a href="#projects" className="hover:text-[#00FFFF] transition">Projects</a>
          <a href="#skills" className="hover:text-[#00FFFF] transition">Skills</a>
          <a href="#contact" className="hover:text-[#00FFFF] transition">Contact</a>
        </nav>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
