import { BiCodeAlt, BiEnvelope, BiMoon, BiSun, BiUser } from "react-icons/bi";
import NavBarItem from "./NavBarItem";
import { useState } from "react";

export default function NavBarList() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
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
          <BiSun
            className="animate-fade-out-top hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-* duration-300"
            onClick={handleDarkModeToggle}
            size={25}
          />
        ) : (
          <BiMoon
            className="animate-fade-out-top hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-* duration-300"
            onClick={handleDarkModeToggle}
            size={25}
          />
        )}
      </div>
    </>
  );
}
