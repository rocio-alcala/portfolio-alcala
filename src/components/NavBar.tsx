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

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <nav>
        <div className="justify-end p-6 mr-6 animate-fade-out-top hidden sm:flex sm:visible">
          <ul className="flex gap-6 font-manrope font-extrabold">
            <NavBarItem>
              <BiUser size={25} />
              About me
            </NavBarItem>
            <NavBarItem>
              <BiCodeAlt size={25} />
              Projects
            </NavBarItem>
            <NavBarItem>
              <BiEnvelope size={25} />
              Contact me
            </NavBarItem>
            <div className="hover:cursor-pointer m-2 p-1 flex items-center">
              {darkMode ? (
                <BiMoon
                  className="animate-fade-out-top hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-* duration-300"
                  onClick={handleDarkModeToggle}
                  size={25}
                />
              ) : (
                <BiSun
                  className="animate-fade-out-top hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-* duration-300"
                  onClick={handleDarkModeToggle}
                  size={25}
                />
              )}
            </div>
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
    </>
  );
}
