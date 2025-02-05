import { motion } from "motion/react";
export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Variants untuk animasi gambar
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Variants untuk animasi tombol
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
    id="home"
    className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
  >
    {/* Konten Teks */}
    <motion.div
      className="z-10 md:w-1/2 p-4 text-center md:text-left"
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-[#00FFFF] drop-shadow-lg"
      >
        Hi, I'm Hambali
      </motion.h1>
      <motion.h2
        className="mt-2 text-3xl md:text-4xl font-semibold text-white drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Fullstack Web Developer
      </motion.h2>
      <motion.p
        className="mt-6 text-lg md:text-xl  max-w-xl mx-auto md:mx-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        I create websites using fast and latest technologies.
      </motion.p>
      <motion.div
        className="mt-8"
        variants={buttonVariants}
        whileHover="hover"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-[#FF00FF] text-white font-medium rounded-full shadow-lg hover:bg-[#CC00CC] transition duration-300"
        >
          View My Work
        </a>
      </motion.div>
    </motion.div>

    {/* Gambar Karakter */}
    <motion.div
      className="relative md:w-1/2 flex justify-center items-center p-4"
      initial="hidden"
      animate="visible"
      variants={imageVariants}
    >
      <img
        src="people.webp"
        alt="Cyberpunk character standing in a neon-lit environment, wearing a high-tech jacket with glowing lines and a transparent visor displaying digital data"
        width={600}
        className="rounded-lg"
      />
    </motion.div>

    {/* Overlay Transparan */}
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </section>
     );
}
