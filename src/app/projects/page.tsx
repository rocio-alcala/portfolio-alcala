import ProjectCard from "@/components/ProjectCard";
import { projects } from "../../../db.json";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

export default function ProjectsSection() {
  return (
    <section className="animate-fade-in flex-1 flex flex-col justify-around items-center m-8">
      <div className="flex flex-wrap justify-center gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Button className="w-80 rounded-3xl transition-all duration-500">
        <a href="https://drive.google.com/file/d/1KAuuPrkc5mLjWSZMcAJ98foh7Pi5_zed/view?usp=sharing">
          DOWNLOAD CV
        </a>
      </Button>
    </section>
  );
}
