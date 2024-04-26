import type { Metadata } from "next";
import { inconsolata, manrope } from "./font";
import "./globals.css";
import {
  BiHeart,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedinSquare
} from "react-icons/bi";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rocio Alcala",
  description: "Portfolio Rocio Alcala"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image" href="/icon.png" />
      </head>
      <body
        className={`${inconsolata.variable} ${manrope.variable} flex flex-col min-h-svh bg-background-light dark:bg-background-dark text-primary-text-light dark:text-primary-text-dark transition-all duration-500`}
      >
        <NavBar />
        {children}
        <footer className="bg-background-secondary-light dark:bg-background-secondary-dark p-3 px-12 text-center flex justify-between">
          <div className="flex">
            Made with love <BiHeart size={25} />
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/rocio-alcala">
              <BiLogoGithub
                size={25}
                className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/rocio-alcala-784174185/">
              <BiLogoLinkedinSquare
                className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
                size={25}
              />
            </Link>
            <Link href={"mailto:rro.alcala@gmail.com"}>
              <BiLogoGmail
                className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
                size={25}
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
