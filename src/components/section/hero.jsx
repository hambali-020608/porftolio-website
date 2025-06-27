import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Konten Teks */}
      <motion.div
        className="z-10 w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00FFFF] drop-shadow-lg">
          Hi, I'm Hambali
        </motion.h1>
            <ReactTyped
      strings={[
        "Fullstack Web Developer",
        "Game Developer",
        "Software engineer",
        "Ai engineer",
        "Data analyst",
        "Data scientis",
      ]}
      className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-md"
      typeSpeed={40}
      backSpeed={50}
      
      loop
    ></ReactTyped>
        <motion.p
          className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 max-w-md mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I create websites using fast and latest technologies.
        </motion.p>
        <motion.div className="mt-6" variants={buttonVariants} whileHover="hover">
          <a
            href="#projects"
            className="px-5 py-2 md:px-6 md:py-3 bg-[#FF00FF] text-white font-medium rounded-full shadow-lg hover:bg-[#CC00CC] transition duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Gambar Karakter */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center md:justify-end items-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src="people.webp"
          alt="Cyberpunk character standing in a neon-lit environment, wearing a high-tech jacket with glowing lines and a transparent visor displaying digital data"
          width={400}
          className="rounded-lg w-3/4 md:w-[500px] lg:w-[600px]"
        />
      </motion.div>

      {/* Overlay Transparan */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
}
