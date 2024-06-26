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
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex-col relative justify-center border-2 rounded-md p-3 m-2 max-w-96 hover:scale-105 transition-all duration-500">
      <div className="flex justify-between ">
        <h3 className="text-xl font-bold pb-2">{project.name}</h3>{" "}
        <Link href={project.repo}>
          <BiLogoGithub
            size={25}
            className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
          />
        </Link>
      </div>
      <p className="pb-3 md:hidden">{project.description}</p>
      <Link href={project.url}>
        <div className="relative">
          <Image
            className="rounded cursor-pointer animate-[appear_1.8s_ease]"
            src={project.img}
            alt={project.name}
            width={356}
            height={210}
          />

          <p className="hidden cursor-pointer md:block text-gray-900 rounded absolute top-0 left-0 h-full p-3 backdrop-blur-3xl opacity-0 hover:opacity-100 transition-all duration-700">
            {project.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
