import ProjectCard, { Project } from "./ProjectCard";
import { getProjects } from "@/services/getProjects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="mb-2 items-start py-2 text-start font-poppins text-4xl font-bold md:text-4xl">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
