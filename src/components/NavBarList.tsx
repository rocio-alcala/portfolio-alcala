import {
  BiCodeAlt,
  BiEnvelope,
  BiHomeAlt,
  BiMoon,
  BiSun,
  BiUser,
} from "react-icons/bi";
import NavBarItem from "./NavBarItem";
import { useEffect, useState } from "react";
import { isRunningOnClient } from "../../helpers";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavBarList {
  onItemClick?: () => void;
}

export default function NavBarList({ onItemClick }: NavBarList) {
  const currentPath = usePathname();
  const [darkMode, setDarkMode] = useState(() => {
    if (isRunningOnClient()) {
      const storageMode = localStorage.getItem("mode");
      if (storageMode) {
        return storageMode === "dark" ? true : false;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false;
    } else {
      return false;
    }
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
      <Link href={"/"}>
        <NavBarItem onClick={onItemClick} active={currentPath === "/"}>
          <BiHomeAlt size={25} />
          home()
        </NavBarItem>
      </Link>
      <Link href={"/about-me"}>
        <NavBarItem onClick={onItemClick} active={currentPath === "/about-me"}>
          <BiUser size={25} />
          about()
        </NavBarItem>
      </Link>
      <Link href={"/projects"}>
        <NavBarItem onClick={onItemClick} active={currentPath === "/projects"}>
          <BiCodeAlt size={25} />
          projects()
        </NavBarItem>
      </Link>
      <Link href={"/contact"}>
        <NavBarItem onClick={onItemClick} active={currentPath === "/contact"}>
          <BiEnvelope size={25} />
          contact()
        </NavBarItem>
      </Link>
      <div className="m-2 flex items-center p-1 hover:cursor-pointer">
        {darkMode ? (
          <BiSun
            className="transition-* animate-fade-out-top duration-300 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
            onClick={() => setDarkMode(!darkMode)}
            size={25}
          />
        ) : (
          <BiMoon
            className="transition-* animate-fade-out-top duration-300 hover:text-secondary-text-light dark:hover:text-secondary-text-dark"
            onClick={() => setDarkMode(!darkMode)}
            size={25}
          />
        )}
      </div>
    </>
  );
}
