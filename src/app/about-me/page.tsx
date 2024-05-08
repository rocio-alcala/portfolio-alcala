"use client";

import AboutMe from "@/components/Aboutme";
import Loading from "@/components/Loading";
import { useDelay } from "@/hooks/useDelay";

export default function AboutMePage() {
  const isLoading = useDelay(1000);

  return <> {isLoading ? <Loading /> : <AboutMe />}</>;
}
