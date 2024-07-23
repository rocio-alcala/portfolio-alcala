import React from "react";
import { Project } from "./ProjectCard";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { getProjects } from "@/services/getProjects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ id }: { id: number }) {
  // should use a get project by id
  const projects = await getProjects();
  const project = projects.find((project) => project.id == id);
  if (!project) return notFound();

  return (
    <div className="flex max-w-[1100px] flex-col p-8 md:p-14">
      <h1 className=" my-4 font-poppins text-3xl font-bold md:text-4xl">
        {project.name}
      </h1>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <Image
          className="aspect-[5/3] rounded-md shadow-md lg:w-[65%]"
          width={600}
          height={450}
          src={project.img}
          alt={`${project.name} image`}
        />

        <div className="flex flex-col items-start justify-around gap-4 self-stretch lg:w-[35%]">
          <p className="text-lg">{project.description}</p>
          <Link href={project.url}>
            <Button className="w-fit rounded-xl">VIEW PROJECT</Button>
          </Link>
          <div className="flex flex-wrap">
            {project.tags.map((tag, index) => (
              <span
                key={tag + index}
                className="m-1 rounded-full bg-background-secondary-dark px-2 py-1 text-sm text-secondary-text-dark dark:bg-background-secondary-light dark:text-primary-text-light"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
