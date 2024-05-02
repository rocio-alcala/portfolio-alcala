import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../../db.json";
import { usePathname } from "next/navigation";

export default function ProjectsSection() {
  return (
    <section className="animate-fade-in flex flex-wrap justify-center gap-3 m-8 flex-1">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
