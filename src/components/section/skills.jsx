import { motion } from "motion/react";

export default function Skills() {
  // Variants untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Variants untuk card dengan efek floating
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 255, 255, 0.6)",
      transition: { duration: 0.3 },
    },
  };

  // Floating icon animation
  const floatingIconVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Judul dengan efek fade-in */}
        <motion.h2
          className="text-center text-5xl font-extrabold text-[#00FFFF] mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        {/* Grid Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["Backend Developer", "Frontend Developer", "Database"].map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-8 bg-gray-800 rounded-2xl shadow-xl"
              variants={cardVariants}
              whileHover="hover"
            >
              
              <motion.div className="flex justify-center mb-6" variants={floatingIconVariants} initial="initial" animate="animate">
              <img
  src={
    skill === "Backend Developer"
      ? "https://img.icons8.com/nolan/64/backend-development.png"
      : skill === "Frontend Developer"
      ? "/frontend.png"
      :  skill === "Database" 
      ? "https://img.icons8.com/nolan/64/data-configuration.png":""  // Gambar default jika skill tidak cocok
  }
  alt={skill}
  className="w-24 h-24 object-contain filter grayscale group-hover:filter-none transition duration-300"
/>

              </motion.div>
              <h3 className="text-center text-2xl font-bold text-[#FF00FF] group-hover:text-[#00FFFF] transition-colors duration-300">
                {skill}
              </h3>
              <p className="mt-4 text-center text-gray-400">
                {skill === "Backend Developer" && "Expert in Node.js, Express, REST API."}
                {skill === "Frontend Developer" && "Skilled in React, Vue, and UI/UX design."}
                {skill === "Database" && "Proficient in SQL, NoSQL, and data modeling."}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
