import BaseModal from "@/components/BaseModal";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/services/getProjects";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  // should use a get project by id
  const projects = await getProjects();
  const project = projects.find((project) => project.id == id);
  if (!project) return notFound();

  return (
    <BaseModal isOpen={true}>
      <ProjectCard project={project} />
    </BaseModal>
  );
}
