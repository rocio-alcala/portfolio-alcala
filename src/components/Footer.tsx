import Link from "next/link";
import { BiHeart, BiLogoGithub, BiLogoGmail, BiLogoLinkedinSquare } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="flex animate-fade-out-bottom justify-between bg-background-secondary-light p-3 px-12 text-center dark:bg-background-secondary-dark">
      <div className="flex">
        Made with love <BiHeart size={25} />
      </div>
      <div className="flex gap-4">
        <Link href="https://github.com/rocio-alcala">
          <BiLogoGithub
            size={25}
            className="transition duration-500 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/rocio-alcala-784174185/">
          <BiLogoLinkedinSquare
            className="transition duration-500 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
            size={25}
          />
        </Link>
        <Link href={"mailto:rro.alcala@gmail.com"}>
          <BiLogoGmail
            className="transition duration-500 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
            size={25}
          />
        </Link>
      </div>
    </footer>
  );
}
