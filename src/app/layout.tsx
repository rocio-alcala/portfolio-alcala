import type { Metadata } from "next";
import { inconsolata, manrope } from "./font";
import "./globals.css";
import NavBarItem from "@/components/NavBarItem";

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
      <body
        className={`${inconsolata.variable} ${manrope.variable} flex flex-col min-h-svh bg-background-light dark:bg-background-dark text-primary-text-light dark:text-primary-text-dark`}
      >
        <nav className="flex justify-end p-6 mr-6 animate-fade-out-top">
          <ul className="flex gap-6 font-manrope font-extrabold">
            <NavBarItem>About me</NavBarItem>
            <NavBarItem>Projects</NavBarItem>
            <NavBarItem>Contact me</NavBarItem>
          </ul>
        </nav>
        {children}
        <footer className="bg-background-secondary-light dark:bg-background-secondary-dark p-3 text-center">
          Made with love
        </footer>
      </body>
    </html>
  );
}
