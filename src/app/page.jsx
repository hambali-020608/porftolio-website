import NavBar from "../components/section/navbar";
import Hero from "../components/section/hero";
import Skills from "../components/section/skills";
import Projects from "../components/section/projects";
import Certificates from "../components/section/certificates";
import Footer from "../components/section/footer";
import dynamic from "next/dynamic";
import { getActiveProjects, getCertificates, getSkillsAndTechStack } from "../lib/data";

const About = dynamic(() => import("../components/section/about"));
const Contact = dynamic(() => import("../components/section/contact"));

const HOME_LIMITS = {
  projects: 4,
  certificates: 3,
  techStack: 10,
};

export default async function Home() {
  const [{ skills: expertise, techStack }, projectsData, certificatesData] = await Promise.all([
    getSkillsAndTechStack(),
    getActiveProjects(),
    getCertificates(),
  ]);

  const limitedProjects = projectsData.slice(0, HOME_LIMITS.projects);
  const limitedCertificates = certificatesData.slice(0, HOME_LIMITS.certificates);
  const limitedTechStack = techStack.slice(0, HOME_LIMITS.techStack);

  return (
    <>
      <div className="blueprint-grid min-h-screen relative">
        <div className="scanline-effect"></div>

        <div className="absolute top-[100vh] left-1/2 -translate-x-1/2 w-[1.2px] h-[calc(100%-100vh)] bg-white/10 z-[50] pointer-events-none"></div>

        <NavBar />

        <main className="relative z-10">
          <Hero />
          <Skills expertise={expertise} techStack={limitedTechStack} />
          <Projects projects={limitedProjects} total={projectsData.length} />
          <Certificates certificates={limitedCertificates} />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
