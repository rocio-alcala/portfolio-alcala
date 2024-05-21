import Link from "next/link";
import Button from "./Button";
import ProjectCard, { Project } from "./ProjectCard";

async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const projects = await fetch(
    "https://portfolio-77ff1-default-rtdb.firebaseio.com/projects.json",
  );
  if (!projects.ok) {
    throw new Error("Error fetching projects");
  }
  const returnProjects: Project[] = await projects.json();
  return returnProjects;
}

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
