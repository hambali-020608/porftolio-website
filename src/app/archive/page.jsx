import { getActiveProjects, getCertificates, getSkillsAndTechStack } from "../../lib/data";
import ArchiveContent from "./ArchiveContent";

export const metadata = {
  title: "Archive | Hambali Subastian",
  description: "All projects, certificates, and tech stack of Hambali Subastian.",
};

export default async function ArchivePage() {
  const [{ skills, techStack }, projects, certificates] = await Promise.all([
    getSkillsAndTechStack(),
    getActiveProjects(),
    getCertificates(),
  ]);

  return (
    <ArchiveContent
      projects={projects}
      certificates={certificates}
      skills={skills}
      techStack={techStack}
    />
  );
}
