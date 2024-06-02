import { Project } from "@/components/ProjectCard";

export async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const projects = await fetch(
    "https://portfolio-aad0e-default-rtdb.firebaseio.com/projects.json",
  );
  if (!projects.ok) {
    throw new Error("Error fetching projects");
  }
  const returnProjects: Project[] = await projects.json();
  return returnProjects;
}
