import BaseModal from "@/components/BaseModal";
import LoadingBar from "@/components/LoadingBar";
import ProjectPage from "@/components/ProjectPage";
import React, { Suspense } from "react";

export default async function Page({
  params: { id },
}: {
  params: { id: number };
}) {
  return (
    <BaseModal isOpen={true}>
      <Suspense fallback={<LoadingBar className="w-28 md:m-10 md:w-96" />}>
        <ProjectPage id={id} />
      </Suspense>
    </BaseModal>
  );
}
