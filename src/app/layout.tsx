import type { Metadata } from "next";
import { inconsolata, manrope, poppins } from "./font";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
