"use client";

import {
  BiCodeAlt,
  BiEnvelope,
  BiMenu,
  BiMoon,
  BiSun,
  BiUser,
  BiX
} from "react-icons/bi";
import NavBarItem from "./NavBarItem";
import { useState } from "react";
import NavBarList from "./NavBarList";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative">
        <div className="justify-end p-6 mr-6 animate-fade-out-top hidden sm:flex sm:visible">
          <ul className="flex gap-6 font-manrope font-extrabold">
            <NavBarList />
          </ul>
        </div>
        <div className="sm:hidden sm:opacity-0 flex justify-end p-6 animate-fade-out-top">
          {isMenuOpen ? (
            <BiX onClick={() => setIsMenuOpen(false)} size={25} />
          ) : (
            <BiMenu onClick={() => setIsMenuOpen(true)} size={25} />
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="relative sm:hidden sm:opacity-0 ">
          <div className="absolute overflow-hidden pr-4 h-screen w-full top-0 left-0 bg-background-light dark:bg-background-dark animate-fade-out-top">
            <ul className="flex flex-col items-end">
              <NavBarList />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
