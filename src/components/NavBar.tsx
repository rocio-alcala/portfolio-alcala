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
        <div className="fixed right-0 top-0 z-50 hidden h-20 w-full animate-fade-out-top items-center justify-end bg-background-light p-6 transition-all duration-500 md:visible md:flex dark:bg-background-dark ">
          <ul className="flex gap-6 font-extrabold">
            <NavBarList />
          </ul>
        </div>
        {/* toggle mobile navbar */}
        <div className="fixed right-0 top-0 z-50 flex h-14 w-full animate-fade-out-top items-center justify-end bg-background-light p-2 pr-5 transition-all duration-500 md:hidden md:opacity-0 dark:bg-background-dark">
          {isMenuOpen ? (
            <BiX
              className="transition-all duration-500 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
              onClick={handleMenuToggle}
              size={25}
            />
          ) : (
            <BiMenu
              className="transition-all duration-500 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
              onClick={handleMenuToggle}
              size={25}
            />
          )}
          {/* mobile navbar */}
          <div className="md:hidden md:opacity-0">
            <div
              className={`absolute ${
                isMenuOpen ? "top-[56px]" : "top-[-898px]"
              } left-0 z-50 h-screen w-full animate-fade-out-top bg-background-light pr-4 transition-all duration-500 dark:bg-background-dark`}
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
