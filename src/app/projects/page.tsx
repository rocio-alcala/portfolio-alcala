import Projects from "@/components/Projects";
import Link from "next/link";
import Button from "@/components/Button";

export default async function ProjectsSection() {
  return (
    <section className="m-8 flex flex-1 animate-fade-in flex-col items-center justify-around">
      <Projects />
      <Link href="https://drive.google.com/file/d/1KAuuPrkc5mLjWSZMcAJ98foh7Pi5_zed/view?usp=sharing">
        <Button className="mt-8 w-80 rounded-3xl transition-all duration-500">
          DOWNLOAD CV
        </Button>
      </Link>
    </section>
  );
}
