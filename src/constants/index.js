import { 
  FaGithub, FaTiktok, FaEnvelope, 
  FaCode, FaDatabase, FaBrain, FaChartBar, FaDesktop, FaServer, FaMagic
} from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiLaravel, SiMongodb, SiMysql,  SiPrisma, 
  SiPython, SiTensorflow, SiPytorch, SiPandas, SiDocker, 
  SiGit, SiFigma, SiJavascript, SiTypescript, SiPostgresql, 
  SiTableau, 
  SiLangchain, SiN8N, SiOpenai,
  SiHtml5,
  SiCss3
} from "react-icons/si";

import { PiMicrosoftWordLogoFill,PiMicrosoftPowerpointLogoFill,PiMicrosoftExcelLogoFill } from "react-icons/pi";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const certificates = [
  {
    title: "AI Engineering Fundamentals",
    issuer: "DeepLearning.AI",
    date: "2024",
    id: "CERT-AI-882",
    image: "/certificates/ai-cert.png", // Path to your images
  },
  {
    title: "Fullstack Web Architecture",
    issuer: "Meta",
    date: "2023",
    id: "CERT-FS-109",
    image: "/certificates/meta-cert.png",
  },
  {
    title: "Advanced Data Analysis",
    issuer: "Google",
    date: "2023",
    id: "CERT-DA-441",
    image: "/certificates/google-cert.png",
  },
];

export const socialLinks = [
  {
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/bastian-soltech",
    color: "hover:text-gray-100",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@tyan.dev",
    color: "hover:text-pink-400",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:bastian.soltech@gmail.com",
    color: "hover:text-cyan-400",
  },
];

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Mastered", value: "25+" },
];

export const expertiseCards = [
  {
    title: "AI Engineer",
    icon: FaBrain,
    desc: "Developing intelligent agents and automated workflows using LLMs, LangChain, and advanced prompting.",
    color: "border-cyan-500",
    glow: "shadow-cyan-500/20",
    role: "AI"
  },
  {
    title: "Fullstack Developer",
    icon: FaDesktop,
    desc: "Building modern web applications with focus on clean architecture and high-performance frontends.",
    color: "border-blue-500",
    glow: "shadow-blue-500/20",
    role: "FD"
  },
  {
    title: "Data Analyst",
    icon: FaChartBar,
    desc: "Finding patterns in complex data and building automated tools to extract meaningful insights.",
    color: "border-purple-500",
    glow: "shadow-purple-500/20",
    role: "DA"
  },
];

export const skillsData = [
  // Web Development
  { name: "HTML", icon: SiHtml5, category: "web" },
  { name: "CSS", icon: SiCss3, category: "web" },
  { name: "JavaScript", icon: SiJavascript, category: "web" },
  { name: "TypeScript", icon: SiTypescript, category: "web" },
  { name: "React", icon: SiReact, category: "web" },
  { name: "Next.js", icon: SiNextdotjs, category: "web" },
  { name: "Tailwind", icon: SiTailwindcss, category: "web" },
  { name: "Node.js", icon: SiNodedotjs, category: "web" },
  { name: "Express", icon: SiExpress, category: "web" },
  { name: "Laravel", icon: SiLaravel, category: "web" },
  
  // Databases & Backend
  { name: "MongoDB", icon: SiMongodb, category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
  { name: "MySQL", icon: SiMysql, category: "backend" },
  { name: "Prisma", icon: SiPrisma, category: "backend" },

  // Data & AI
  { name: "Python", icon: SiPython, category: "data" },
  { name: "LangChain", icon: SiLangchain, category: "data" },
  { name: "n8n", icon: SiN8N, category: "data" },
  { name: "Prompt Eng", icon: FaMagic, category: "data" },
  { name: "FastMCP", icon: SiOpenai, category: "data" }, // Using OpenAI icon for MCP context
  { name: "Pandas", icon: SiPandas, category: "data" },
  { name: "Tableau", icon: SiTableau, category: "data" },
  { name: "Excel", icon: PiMicrosoftExcelLogoFill, category: "data" },

  // Tools
  { name: "Docker", icon: SiDocker, category: "tools" },
  { name: "Git", icon: SiGit, category: "tools" },
  { name: "Figma", icon: SiFigma, category: "tools" },
  { name: "Word", icon: PiMicrosoftWordLogoFill, category: "tools" },
  { name: "PowerPoint", icon: PiMicrosoftPowerpointLogoFill, category: "tools" },
  // { name: "Excel", icon: PiMicrosoftExcelLogoFill, category: "tools" },
];

export const skillCategories = [
  { id: "all", label: "All_Skills", icon: "⚡" },
  { id: "web", label: "Frontend", icon: "🌐" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "data", label: "Data/AI", icon: "📊" },
  { id: "tools", label: "Tools", icon: "🛠️" },
];

export const projects = [
  {
    title: "Music Downloader",
    desc: "A powerful tool to search and download music including Spotify support. Features a clean UI and fast processing.",
    tags: ["React", "Node.js", "API"],
    image: "/music.png",
    github: "#",
    live: "https://musical-down.vercel.app",
    id: "01"
  },
  {
    title: "Youtube Downloader",
    desc: "Fast, ad-free Youtube video and audio downloader. Supports multiple formats and high-quality resolutions.",
    tags: ["Next.js", "Tailwind", "Python"],
    image: "/yt.png",
    github: "#",
    live: "https://ytdl-prof.vercel.app",
    id: "02"
  },
  {
    title: "CoffeeShop Website",
    desc: "An interactive and modern e-commerce platform for ordering premium coffee with real-time cart functionality.",
    tags: ["React", "Firebase", "Stripe"],
    image: "/coffe.png",
    github: "#",
    live: "https://senja-kita.vercel.app",
    id: "03"
  },
  {
    title: "Movies Platform",
    desc: "Stream the latest and most popular movies for free. Features category filtering, search, and detailed info.",
    tags: ["React", "TMDB API", "CSS Modules"],
    image: "/movie.png",
    github: "#",
    live: "#",
    id: "04"
  }
];
