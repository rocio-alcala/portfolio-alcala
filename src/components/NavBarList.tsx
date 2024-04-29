import { BiCodeAlt, BiEnvelope, BiMoon, BiSun, BiUser } from "react-icons/bi";
import NavBarItem from "./NavBarItem";
import { useEffect, useState } from "react";
import { isRunningOnClient } from "../../helpers";

export default function NavBarList() {
  console.log(isRunningOnClient());

  const [darkMode, setDarkMode] = useState(() => {
    const storageMode = isRunningOnClient() && localStorage.getItem("mode");
    if (storageMode) {
      return storageMode === "dark" ? true : false;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false;
  });

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("mode", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("mode", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
            onClick={() => setDarkMode(!darkMode)}
            size={25}
          />
        ) : (
          <BiMoon
            className="animate-fade-out-top hover:text-secondary-text-light dark:hover:text-secondary-text-dark transition-* duration-300"
            onClick={() => setDarkMode(!darkMode)}
            size={25}
          />
        )}
      </div>
    </>
  );
}
