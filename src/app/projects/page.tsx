import { Suspense } from "react";
import Projects from "@/components/Projects";
import Loading from "@/components/Loading";

export default async function ProjectsSection() {
  return (
    <Suspense fallback={<Loading />}>
      <Projects />
    </Suspense>
  );
}
