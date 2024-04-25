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

export const metadata: Metadata = {
  title: "Rocio Alcala",
  description: "Portfolio"
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
        className={`${inconsolata.variable} ${manrope.variable} flex flex-col min-h-svh bg-background-light dark:bg-background-dark text-primary-text-light dark:text-primary-text-dark`}
      >
        <NavBar />
        {children}
        <footer className="bg-background-secondary-light dark:bg-background-secondary-dark p-3 px-12 text-center flex justify-between">
          <div className="flex">
            Made with love <BiHeart size={25} />
          </div>
          <div className="flex gap-4">
            <BiLogoGithub
              size={25}
              className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
            />
            <BiLogoLinkedinSquare
              className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
              size={25}
            />
            <BiLogoGmail
              className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition duration-500"
              size={25}
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
