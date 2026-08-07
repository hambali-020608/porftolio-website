import { FaCode, FaBrain, FaDesktop, FaChartBar, FaMagic } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiPython,
  SiLangchain,
  SiN8N,
  SiOpenai,
  SiPandas,
  SiTableau,
  SiDocker,
  SiGit,
  SiFigma,
} from "react-icons/si";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";

// Curated map — direct imports only. No barrel imports, keeps bundle lean.
// Add new icon names here when the database grows.
const iconMap = {
  FaCode,
  FaBrain,
  FaDesktop,
  FaChartBar,
  FaMagic,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiPython,
  SiLangchain,
  SiN8N,
  SiOpenai,
  SiPandas,
  SiTableau,
  SiDocker,
  SiGit,
  SiFigma,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
};

export const getIconComponent = (iconName) => {
  if (!iconName || typeof iconName !== "string") return FaCode;
  return iconMap[iconName] || FaCode;
};
