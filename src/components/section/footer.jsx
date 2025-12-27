import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaChevronUp,FaTiktok,FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 pt-20 pb-10 overflow-hidden border-t border-gray-800">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

          {/* Brand Section */}
          <div
            data-aos="fade-up"
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-orbitron font-bold text-white mb-2">
              HAM<span className="text-cyan-400">BALI</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences with code, creativity, and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest"
          >
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>

          {/* Socials */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center gap-4"
          >
            { [
              { icon: FaGithub, href: "https://github.com/hambali-020608" },
              { icon: FaTiktok, href: "https://www.tiktok.com/@tyan.dev?is_from_webapp=1&sender_device=pc" },
              { icon: FaEnvelope, href: "https://mail.google.com/mail/?view=cm&fs=1&to=subastianhambali@gmail.com&su=Tanya%20Project&body=Halo%20Hambali," }, 
              // { icon: FaLinkedin, href: "#" },
              // { icon: FaInstagram, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:-translate-y-1 hover:text-cyan-400"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">

          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all text-sm font-medium group hover:-translate-y-1"
          >
            Back to Top
            <span className="p-2 rounded-full bg-gray-900 border border-gray-700 group-hover:border-cyan-500 transition-colors">
              <FaChevronUp className="text-xs" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
