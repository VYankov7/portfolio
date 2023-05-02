import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RxSun } from "react-icons/rx";
import { BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  //DarkMode
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Navigation
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex fixed z-50 justify-between items-center w-full h-16 px-4 text-black bg-white  dark:bg-black dark:text-white">
      <div>
        <Link
          to="about"
          smooth
          duration={500}
          className="text-5xl font-signature ml-2 cursor-pointer"
        >
          Vladislav Yankov
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium dark:text-gray-300 hover:text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
           to-gray-500 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleThemeSwitch}>
        {theme === "dark" ? (
          <RxSun className="hover:text-yellow-300 text-xl duration-200" />
        ) : (
          <BsMoon className="hover:text-gray-500 text-xl duration-200" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
