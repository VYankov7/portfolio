import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b  from-amber-50 to-white dark:from-black dark:to-gray-700 dark:text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have half year of experience building and desgining the front-end
            of web applications. Currently, I love to work on web applications
            using technologies like React, Redux, TypeScript, TailwindCSS.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" text-black dark:text-white w-fit px-6 py-3 my-2 flex items-center "
            >

              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 dark:from-slate-300 dark:to-gray-600 rounded-md hover:bg-white group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left transition-colors duration-100 ease-in-out group-hover:text-white">
                  Portfolio
                </span>
                <span className="group-hover:rotate-90 duration-300 group-hover:text-white"> 
                <TbArrowBadgeRight className="ml-1" size={18} />
              </span>
              </a>
              
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="myPic"
            className="rounded-3xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
