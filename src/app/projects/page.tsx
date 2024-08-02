import Projects from "@/components/Projects";
import Link from "next/link";
import Button from "@/components/Button";
import Experience from "@/components/Experience";

export default async function ProjectsSection() {
  return (
    <section className="m-2 flex flex-1 animate-fade-in flex-col items-center justify-around md:m-8">
      <Experience />
      <Projects />
      <Link href="https://drive.google.com/file/d/1P1y5WqXfmC50StkWep8UNUlGj59HSeIt/view?usp=sharing">
        <Button className="mt-8 w-80 rounded-3xl transition-all duration-500">
          DOWNLOAD CV
        </Button>
      </Link>
    </section>
  );
}
