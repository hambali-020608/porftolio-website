import { motion } from "motion/react";

export default function Projects() {
  // Variants untuk container grid (mengatur stagger)
 
  // Variants untuk setiap kartu proyek
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants untuk setiap kartu proyek
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-5xl font-bold text-[#00FFFF] mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card Project 1 */}
          <motion.div
            className="relative group overflow-hidden rounded-2xl shadow-2xl"
            variants={cardVariants}
          >
            <motion.img
              src="/music.png"
              alt="Screenshot of Project 1"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
            <motion.div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.h3
                className="text-3xl font-bold text-[#FF00FF] mb-2"
                whileHover={{ color: "#00FFFF" }}
              >
                Music Downloader
              </motion.h3>
              <motion.p className="text-white px-4 text-center">
                For search and download a music. it also can download with a spotify link
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Card Project 2 */}
          <motion.div
            className="relative group overflow-hidden rounded-2xl shadow-2xl"
            variants={cardVariants}
          >
            <motion.img
              src="/yt.png"
              alt="ytdownloader"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
            <motion.div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.h3
                className="text-3xl font-bold text-[#FF00FF] mb-2"
                whileHover={{ color: "#00FFFF" }}
              >
                Youtube Downloader
              </motion.h3>
              <motion.p className="text-white px-4 text-center">
                a fast youtube downloader, free and no ads
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Card Project 3 */}
          <motion.div
            className="relative group overflow-hidden rounded-2xl shadow-2xl"
            variants={cardVariants}
          >
            <motion.img
              src="/coffe.png"
              alt="Screenshot of Project 3"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
            <motion.div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.h3
                className="text-3xl font-bold text-[#FF00FF] mb-2"
                whileHover={{ color: "#00FFFF" }}
              >
              CoffeShop Website
              </motion.h3>
              <motion.p className="text-white px-4 text-center">
                an interactive website to buy a coffe
              </motion.p>
            </motion.div>
            
          </motion.div>
           <motion.div
            className="relative group overflow-hidden rounded-2xl shadow-2xl"
            variants={cardVariants}
          >
            <motion.img
              src="/movie.png"
              alt="Screenshot of Project 1"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.05 }}
            />
            <motion.div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <motion.h3
                className="text-3xl font-bold text-[#FF00FF] mb-2"
                whileHover={{ color: "#00FFFF" }}
              >
                Movies Website
              </motion.h3>
              <motion.p className="text-white px-4 text-center">
               For streaming, search, and get latest and popular movies, it's free
              </motion.p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
