import { BiCircle, BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

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
    <div className="flex flex-col max-w-[26rem] hover:scale-105 transition-all duration-500 ">
      <div className="flex flex-col border-2  border-primary-text-light dark:border-primary-text-dark">
        {/*       barra busqueda */}
        <div className="flex justify-between items-center py-2 border-b-2 border-primary-text-light dark:border-primary-text-dark h-[10%]">
          <h3 className="ml-2 font-semibold">{project.name}</h3>
          <div className="flex justify-center items-center gap-1">
            <BiCircle />
            <BiCircle />
            <BiCircle className="mr-1" />
          </div>
        </div>
        {/*       contenido de navegador */}
        <div className="flex justify-between flex-1">
          <div className="flex-1 relative border-r-2 border-primary-text-light dark:border-primary-text-dark">
            <img
              src={project.img}
              alt={project.name}
              className="object-fill h-full w-full animate-appear"
            ></img>
            <p className="hidden md:block text-gray-900 rounded absolute top-0 left-0 h-full p-3 backdrop-blur-3xl opacity-0 hover:opacity-100 transition-all duration-700">
              {project.description}
            </p>
          </div>
          <div className="w-[5%] flex flex-col justify-between">
            <BiSolidUpArrow className=" border-b-2 w-full border-primary-text-light dark:border-primary-text-dark" />
            <BiSolidDownArrow className="border-t-2 w-full border-primary-text-light dark:border-primary-text-dark" />
          </div>
        </div>
        {/*       barra inferior */}
        <div className="h-[5%] border-t-2 border-primary-text-light dark:border-primary-text-dark"></div>
      </div>
      <p className="pt-3 md:hidden">{project.description}</p>
    </div>
  );
}
