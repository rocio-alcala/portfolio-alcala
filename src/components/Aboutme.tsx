import Image from "next/image";
import Loading from "./LoadingBar";
import StackItem from "./StackItem";

export default function AboutMe() {
  return (
    <section className=" flex flex-1 flex-col justify-around p-10 font-inconsolata font-semibold">
      <div className="flex animate-fade-in-right flex-wrap items-center justify-center">
        <article className="flex min-w-[50%] flex-1 flex-shrink flex-col px-3 md:px-3 lg:px-8 min-[1088px]:my-10">
          <h2 className="mb-2 items-start py-2 font-poppins text-4xl font-bold md:text-6xl">
            Me as a developer
          </h2>
          <p className="text-2xl">
            Hi there! My name is Rocio, you can call me Rosie. I am a front end
            developer currently based in Argentina, captivated by the magic
            behind what makes the web work with each click. I work as a React
            developer and enjoy learning new tools to develop and improve
            applications, I have a keen interest in design, what I most enjoy
            about my work is bringing designs to life to create unique and
            beautiful interfaces.
          </p>
          <span className="relative w-fit text-2xl before:absolute before:bottom-[0px] before:left-0 before:z-[-10] before:h-4 before:w-full before:bg-background-secondary-light after:absolute after:bottom-[0px] after:left-0 after:z-[-10] after:h-4 after:w-0 after:bg-[#F6AB16] after:transition-all after:duration-700 after:hover:w-full hover:after:transition-all hover:after:duration-700 dark:before:bg-background-secondary-dark dark:after:bg-[#241901]">
            We eat with our eyes.
          </span>
        </article>
        <Image
          height={500}
          width={500}
          alt="coding"
          src="/coding-1.png"
          className="animate-slow-sink"
        />
      </div>
      <div className="onview my-10 flex animate-fade-in flex-wrap justify-center p-4 md:mx-32 md:my-32 xl:mx-52">
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        <StackItem src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
      </div>
      <div className="onview flex animate-fade-in-right flex-wrap items-center justify-center">
        <article className="flex min-w-[50%] flex-1 animate-fade-in-left flex-col items-end px-3 md:px-3 lg:px-8 min-[1088px]:my-10">
          <h2 className="mb-2 items-start py-2 text-end font-poppins text-4xl font-bold md:text-6xl">
            When I'm not coding
          </h2>
          <p className="text-end text-2xl">
            I'm also a biologist, gardener, pastry chef, hiker, ceramist, and
            animal lover. Curious and passionate about nature, and love spending
            time with my cat, who enjoys stepping onto my keyboard and messing
            up my code.
          </p>
        </article>
        <Image
          height={500}
          width={500}
          alt="gardening"
          src="/gardening.png"
          className="animate-slow-sink min-[1088px]:order-first"
        />
      </div>
    </section>
  );
}
