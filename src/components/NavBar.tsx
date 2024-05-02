"use client";

import { BiMenu, BiX } from "react-icons/bi";
import { useEffect, useState } from "react";
import NavBarList from "./NavBarList";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
  /*  useEffect(() => {
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
  }, [isMenuOpen]); */

  return (
    <>
      <nav>
        {/* desktop navbar */}
        <div className="justify-end fixed items-center bg-background-light dark:bg-background-dark transition-all duration-500 w-full z-50 top-0 right-0 p-6 h-20 animate-fade-out-top hidden md:flex md:visible ">
          <ul className="flex gap-6 font-extrabold">
            <NavBarList />
          </ul>
        </div>
        {/* toggle mobile navbar */}
        <div className="fixed w-full items-center z-50 top-0 right-0 h-14 md:hidden md:opacity-0 flex justify-end p-2 pr-5 animate-fade-out-top bg-background-light dark:bg-background-dark transition-all duration-500">
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
          {/* mobile navbar */}
          <div className="md:hidden md:opacity-0">
            <div
              className={`absolute ${
                isMenuOpen ? "top-[56px]" : "top-[-898px]"
              } pr-4 h-screen w-full left-0 z-50 bg-background-light dark:bg-background-dark animate-fade-out-top transition-all duration-500`}
            >
              <ul className="flex flex-col items-end">
                <NavBarList onItemClick={handleMenuToggle} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
