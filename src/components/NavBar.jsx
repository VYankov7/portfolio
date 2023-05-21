import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import LightButton from "./buttons/LightDarkButton";

const NavBar = () => {
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
      link: "projects",
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
    <div className="flex fixed z-50 justify-between items-center w-full h-16 px-3 text-black bg-white  dark:bg-black dark:text-white">
      <div>
        <div className="inline">
          <LightButton />
        </div>

        <Link
          to="about"
          smooth
          duration={500}
          className="text-4xl font-signature ml-3 cursor-pointer max-sm:text-2xl max-md:text-3xl"
        >
          Portfolio of Vladislav Yankov
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium dark:text-gray-300 hover:text-gray-500 dark:hover:text-yellow-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-500 md:hidden"
      >
        <div className="inline-block ">
          {nav ? (
            <FaTimes className="mr-2" size={30} />
          ) : (
            <FaBars className="mr-2" size={30} />
          )}
        </div>
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b dark:from-black
           dark:to-gray-500 text-gray-500"
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
    </div>
  );
};

export default NavBar;
