import "./globals.css";

export default function Home() {
  return (
    <main className="font-inconsolata font-semibold flex-1">
      <div className="p-10 text-2xl sm:text-4xl md:text-6xl mt-24">
        <h1 className="text-3xl sm:text-5xl md:text-8xl">Hi, I'm Rocio.</h1>
        <div className="w-max">
          <h2 className="typetext border-r-6 border-white">
            I'm a front end developer
          </h2>
        </div>
        <div className="w-max">
          <h2 className="typetext2 border-primary-text-light dark:border-primary-text-dark">
            I build user interfaces
          </h2>
        </div>
      </div>
    </main>
  );
}
