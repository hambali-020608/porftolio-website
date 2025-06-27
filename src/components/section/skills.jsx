import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 15px 30px rgba(0, 255, 255, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const floatingIconVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.1,
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const techStack = [
    { tech: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { tech: "Laravel", img: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
    { tech: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { tech: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" },
    { tech: "Vue.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { tech: "Blitz.js", img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMzk0IiB2aWV3Qm94PSIwIDAgMjU2IDM5NCI+PHBhdGggZmlsbD0iIzY3MDBlYiIgZD0iTTY1LjA2MiAxOTYuNjg3YTc4LjggNzguOCAwIDAgMSA2Mi45NjUgMzEuNDJsNjQuMTc4IDg1LjI4N2E1LjI1IDUuMjUgMCAwIDEgLjQ3IDUuNTY5bC0zNi45OTQgNzEuNjc1Yy0xLjc3NSAzLjQ0LTYuNTMzIDMuODQzLTguODYzLjc1NEwwIDE5Ni42ODd6bTQ0LjEyLTE5NC41OTZMMjU2IDE5Ni43OTZoLTY1LjA2MmE3OC44IDc4LjggMCAwIDEtNjIuOTY1LTMxLjQyTDYzLjc5NSA4MC4wODlhNS4yNSA1LjI1IDAgMCAxLS40Ny01LjU2OGwzNi45OTQtNzEuNjc3YzEuNzc0LTMuNDM5IDYuNTMyLTMuODQzIDguODYyLS43NTMiLz48L3N2Zz4=" },
    { tech: "Svelte", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
    { tech: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { tech: "Go", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { tech: "CodeIgniter", img: "https://img.icons8.com/?size=100&id=r4UrHt1gLC2t&format=png&color=000000" },
    { tech: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { tech: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { tech: "Excel", img: "https://img.icons8.com/?size=100&id=117561&format=png&color=000000" }, // Ganti kalau punya yang lebih cocok
    { tech: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { tech: "Unity", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { tech: "Godot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
    { tech: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { tech: "C#", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { tech: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { tech: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { tech: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { tech: "Tailwind", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { tech: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { tech: "Prisma", img: "https://avatars.githubusercontent.com/u/17219288?s=280&v=4" },
    { tech: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { tech: "OpenCv", img: "https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000" },
    { tech: "Scikit-learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { tech: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { tech: "HuggingFace", img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { tech: "PyTorch", img: "https://pytorch.org/assets/images/pytorch-logo.png" },
    { tech: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { tech: "Docker", img: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000" },
    { tech: "Github", img: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000" },
    
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-30"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      />
      <div className="container mx-auto px-4">
        {/* Title */}
       <motion.h2
  className="text-center text-5xl font-extrabold text-[#00FFFF] mb-16"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  My Skills
</motion.h2>

<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-12"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {[
    {
      title: "Game Developer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
      desc: "Experienced in building 2D and 3D games using Unity and Godot, focusing on gameplay, physics, and immersive user experience.",
    },
    {
      title: "Fullstack Web Developer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Proficient in modern fullstack development using React, Laravel, Node.js, and Express with a strong grasp of RESTful architecture.",
    },
    {
      title: "Data Analyst",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "Adept in data visualization, cleaning, and business intelligence using tools like Excel, Pandas, Matplotlib, and SQL.",
    },
    {
      title: "Data Scientist",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      desc: "Specialized in building predictive models using Python, TensorFlow, and Scikit-learn, turning complex data into actionable insights.",
    },
    {
      title: "Software Engineer",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      desc: "Strong foundation in software architecture and engineering principles, experienced in C++ and software lifecycle management.",
    },
    {
      title: "AI Engineer",
      img: "https://pytorch.org/assets/images/pytorch-logo.png",
      desc: "Focused on building intelligent systems using machine learning, deep learning, and NLP with tools like PyTorch and HuggingFace.",
    },
  ].map((skill, index) => (
    <motion.div
      key={index}
      className="group relative p-8 bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.div
        className="flex justify-center mb-6"
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
      >
        <img
          src={skill.img}
          alt={skill.title}
          className="w-24 h-24 object-contain transition duration-300"
        />
      </motion.div>
      <h3 className="text-center text-2xl font-bold text-[#FF00FF] group-hover:text-[#00FFFF] transition-colors duration-300">
        {skill.title}
      </h3>
      <p className="mt-4 text-center text-gray-400">{skill.desc}</p>
    </motion.div>
  ))}
</motion.div>

        {/* Tech Stack */}
        <motion.h2
          className="text-center text-5xl font-extrabold text-[#00FFFF] mt-24 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
        {techStack.map((skill, index) => (
  <motion.div
    key={index}
    className="group p-4 bg-gray-800 rounded-xl shadow hover:shadow-lg flex flex-col items-center transition-all"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <motion.img
      src={skill.img}
      alt={skill.tech}
      className="w-16 h-16 object-contain transition duration-300"
      variants={floatingIconVariants}
      initial="initial"
      animate="animate"
    />
    <h4 className="mt-4 text-center text-white font-medium capitalize">
      {skill.tech}
    </h4>
  </motion.div>
))}

        </motion.div>
      </div>
    </section>
  );
}
