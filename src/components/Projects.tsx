import Link from "next/link";
import Button from "./Button";
import ProjectCard, { Project } from "./ProjectCard";

async function getProjects() {
  const projects = await fetch(
    "https://portfolio-77ff1-default-rtdb.firebaseio.com/projects.json"
  );
  if (!projects.ok) {
    throw new Error("Error fetching projects");
  }
  return projects.json();
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="animate-fade-in flex-1 flex flex-col justify-around items-center m-8">
      <div className="flex flex-wrap justify-center gap-3">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link href="https://drive.google.com/file/d/1KAuuPrkc5mLjWSZMcAJ98foh7Pi5_zed/view?usp=sharing">
        <Button className="w-80 mt-8 rounded-3xl transition-all duration-500">
          DOWNLOAD CV
        </Button>
      </Link>
    </section>
  );
}
