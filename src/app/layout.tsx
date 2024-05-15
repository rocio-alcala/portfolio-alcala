import type { Metadata } from "next";
import { inconsolata, manrope, poppins } from "./font";
import "./globals.css";
import {
  BiHeart,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rocio Alcala",
  description: "Portfolio Rocio Alcala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-text-light scrollbar-thumb-rounded-full dark:scrollbar-thumb-primary-text-dark"
    >
      <head>
        <link rel="icon" type="image" href="/icon.png" />
      </head>
      <body
        className={`${inconsolata.variable} ${manrope.variable} ${poppins.variable}  flex  min-h-svh flex-col scroll-smooth bg-background-light pt-14 font-inconsolata text-primary-text-light transition-all duration-500 md:pt-20 dark:bg-background-dark dark:text-primary-text-dark`}
      >
        <NavBar />
        {children}

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
      </body>
    </html>
  );
}
