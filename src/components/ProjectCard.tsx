import Image from "next/image";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";

type Project = {
  name: string;
  description: string;
  id: number;
  url: string;
  repo: string;
  img: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className="cursor-pointer" href={project.url}>
      <div className="flex-col justify-center border-2 rounded-md p-3 m-2 h-86 w-80 hover:scale-105 transition-all duration-500">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{project.name}</h3>{" "}
          <Link href={project.repo}>
            <BiLogoGithub
              size={25}
              className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
            />
          </Link>
        </div>
        <p>{project.description}</p>
        <img src={project.img} alt={project.name} />
      </div>
    </Link>
  );
}
