import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-10 px-6">
        {/* Judul */}
        <motion.h2
          className="text-center text-5xl font-extrabold text-[#00FFFF] mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          About Me
        </motion.h2>

        {/* Konten: Gambar + Teks */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Gambar dengan animasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src="/my.jpg"
              alt="My Profile"
              className="w-64 h-64 md:w-64 md:h-64  object-cover rounded-full border-4 border-[#00FFFF] shadow-2xl"
            />
          </motion.div>

          {/* Deskripsi teks dengan animasi */}
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white text-xs md:text-xl leading-relaxed max-w-2xl"
          >
          <p className="font-bold mb-10 text-xl text-[#FF00FF]">  I'm Hambali Subastian </p>
            <p>
              Saya adalah seorang{" "}
              <strong className="text-[#00FFFF]">Fullstack Developer</strong>,{" "}
              <strong className="text-[#00FFFF]">AI Engineer</strong>,{" "}
              <strong className="text-[#00FFFF]">Data Analyst</strong>,{" "}
              <strong className="text-[#00FFFF]">Data Scientist</strong>, dan{" "}
              <strong className="text-[#00FFFF]">Game Developer</strong> asal Indonesia.
            </p>
            <p className="mt-5">
              Saya sangat tertarik dan terobsesi dengan dunia ilmu komputer dan teknologi, pemrograman,
              kecerdasan buatan, dan matematika.
            </p>

            <p className="mt-5">
                <ul>
                    <li>Email: subastianhambali@gmail.com</li>
                    <li>Place:  Hambali, Indonesia +6288298909654</li>
                </ul>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
