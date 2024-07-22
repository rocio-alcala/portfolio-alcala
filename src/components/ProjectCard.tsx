import Image from "next/image";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";

export type Project = {
  name: string;
  description: string;
  id: number;
  url: string;
  repo: string;
  img: string;
  tags: string[]
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative m-2 max-w-96 flex-col justify-center rounded-md border-2 p-3 transition-all duration-500 hover:scale-105">
      <div className="flex justify-between ">
        <h3 className="pb-2 text-xl font-bold">{project.name}</h3>{" "}
        <Link href={project.repo}>
          <BiLogoGithub
            size={25}
            className="transition duration-500 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
          />
        </Link>
      </div>
      <p className="pb-3 md:hidden">{project.description}</p>
      <Link href={`projects/${project.id}`} scroll={false}>
        <div className="relative">
          <Image
            className="aspect-[5/3] animate-[appear_1.8s_ease] cursor-pointer rounded"
            src={project.img}
            alt={project.name}
            width={356}
            height={210}
          />

          <p className="absolute left-0 top-0 hidden h-full cursor-pointer rounded p-3 text-gray-500 opacity-0 backdrop-blur-3xl transition-all duration-700 hover:opacity-100 md:block">
            {project.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
