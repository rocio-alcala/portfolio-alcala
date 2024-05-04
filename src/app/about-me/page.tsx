import StackItem from "@/components/StackItem";

export default function AboutMe() {
  return (
    <section className=" font-inconsolata font-semibold p-10 flex flex-1 flex-col justify-around">
      <article className="flex flex-col animate-fade-in-right my-10 sm:w-[70%] px-6 md:px-14 lg:px-32">
        <h2 className="text-4xl md:text-6xl py-2 mb-2 items-start font-bold font-poppins">
          Me as a developer
        </h2>
        <p className="text-2xl">
          Hi there! My name is Rocio, you can call me Rosie. I am a front end
          developer currently based in Argentina, captivated by the magic behind
          what makes the web work with each click. I work as a React developer
          and enjoy learning new tools to develop and improve applications, but
          what I most enjoy is bringing designs to life to create unique and
          beautiful interfaces.
        </p>
        <span className="text-2xl w-fit relative after:z-[-10] before:z-[-10] before:absolute before:bottom-[0px] before:left-0 before:bg-background-secondary-light dark:before:bg-background-secondary-dark before:w-full after:absolute after:bottom-[0px] after:left-0 after:bg-[#F6AB16] dark:after:bg-[#241901] before:h-4 after:h-4 after:hover:w-full after:w-0 hover:after:transition-all after:transition-all after:duration-700 hover:after:duration-700">
          We eat with our eyes.
        </span>
      </article>
      <div className="about animate-fade-in flex flex-wrap justify-center p-4 my-10 md:my-32 md:mx-32 xl:mx-52">
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
      </div>
      <article className="about flex flex-col items-end self-end animate-fade-in-left my-10 mb-16 sm:w-[70%] px-6 md:px-14 lg:px-32">
        <h2 className="text-4xl md:text-6xl py-2 mb-2 items-start font-bold font-poppins text-end">
          When I'm not coding
        </h2>
        <p className="text-end text-2xl">
          I'm also a biologist, gardener, pastry chef, hiker, ceramist, and
          animal lover. Curious and passionate about nature, and I love spending
          time with my cat.
        </p>
      </article>
    </section>
  );
}
