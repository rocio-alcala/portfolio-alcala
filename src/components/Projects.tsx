import ProjectCard, { Project } from "./ProjectCard";
import { getProjects } from "@/services/getProjects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
