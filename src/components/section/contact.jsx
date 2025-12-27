import { FaEnvelope, FaTiktok, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "subastianhambali@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=subastianhambali@gmail.com&su=Tanya%20Project&body=Halo%20Hambali,",
      color: "from-green-500/20 to-emerald-500/20",
      textColor: "text-green-400"
    },
    {
      icon: <FaTiktok className="text-2xl" />,
      label: "TikTok",
      value: "@tyan.dev",
      link: "https://www.tiktok.com/@tyan.dev?is_from_webapp=1&sender_device=pc",
      color: "from-pink-500/20 to-purple-500/20",
      textColor: "text-pink-400"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "Github",
      value: "hambali-020608",
      link: "https://github.com/hambali-020608",
      color: "from-gray-500/20 to-slate-500/20",
      textColor: "text-gray-300"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div
          
          className="text-center mb-20"
        >
          <span data-aos="fade-down"
          data-aos-duration="1000" className="text-cyan-400 font-medium tracking-wider uppercase text-sm border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-500/5">
            Get In Touch
          </span>
          <h2 data-aos="fade-down"
          data-aos-duration="1000" className="text-4xl md:text-5xl font-extrabold text-white mt-4 font-orbitron">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
          </h2>
          <div data-aos="zoom-in"
          data-aos-duration="1000" className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className={`w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center mb-6 ${info.textColor} group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg`}>
                  {info.icon}
                </div>

                <div className="relative z-10">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1 font-bold">{info.label}</p>
                  <p className="text-white font-medium mb-4">{info.value}</p>

                  <div className={`inline-flex items-center gap-2 text-sm ${info.textColor} font-semibold`}>
                    Contact Me <FaExternalLinkAlt className="text-xs" />
                  </div>
                </div>

                {/* Bottom Line Decor */}
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${info.color.replace('/20', '')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </a>
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              I'm always open to new projects, collaborations, or even just a friendly chat.
              Feel free to reach out through any of these platforms!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
