"use client";

import { BiMenu, BiX } from "react-icons/bi";
import { useEffect, useState } from "react";
import NavBarList from "./NavBarList";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    // restore original overflow on unmount
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav>
        {/* desktop navbar */}
        <div className="justify-end p-6 mr-6 animate-fade-out-top hidden sm:flex sm:visible">
          <ul className="flex gap-6 font-manrope font-extrabold">
            <NavBarList />
          </ul>
        </div>
        {/* toggle navbar */}
        <div className="sm:hidden sm:opacity-0 flex justify-end p-6 animate-fade-out-top ">
          {isMenuOpen ? (
            <BiX
              className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-all duration-500"
              onClick={handleMenuToggle}
              size={25}
            />
          ) : (
            <BiMenu
              className="hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-all duration-500"
              onClick={handleMenuToggle}
              size={25}
            />
          )}
        </div>
        {/* mobile navbar */}
        <div className="relative sm:hidden sm:opacity-0 ">
          <div
            className={`absolute ${
              isMenuOpen ? "top-0" : "top-[-898px]"
            } pr-4 h-screen w-full left-0 bg-background-light dark:bg-background-dark animate-fade-out-top transition-all duration-500`}
          >
            <ul className="flex flex-col items-end">
              <NavBarList />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
