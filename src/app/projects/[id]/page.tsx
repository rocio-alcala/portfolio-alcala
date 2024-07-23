import LoadingBar from "@/components/LoadingBar";
import ProjectPage from "@/components/ProjectPage";
import { getProjects } from "@/services/getProjects";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <ProjectPage id={id} />
    </div>
  );
}
