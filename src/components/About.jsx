import React from "react";
import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-scroll";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-600 dark:to-gray-900 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lmblue dark:border-yellow-400 font-signaturetwo">
            About
          </p>
        </div>

        <div className="max-w-[1024px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right ">
            <p className="text-2xl font-signaturetwo">My name is Vladislav Yankov, I'm 24 years old, based in Varna, Bulgaria. <span class="fi fi-bg"></span> </p>
            <br/>
            <p className="text-6xl max-sm:text-6xl font-bold ">I'm a Front End Developer</p>
          </div>
          <div className="text-xl">
            I have half year of experience building and desgining the front-end
            of web applications. Currently, I love to work on web applications
            using technologies like React, Redux, TypeScript, TailwindCSS...
            <Link
            to="projects"
            smooth
            duration={500}
            className=" text-black dark:text-white w-fit px-6 py-3 my-2 flex items-center "
          >
            <button
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 dark:from-slate-300 dark:to-gray-600 rounded-md hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-100 ease-in-out group-hover:text-white">
                My Projects
              </span>
              <span className="group-hover:rotate-90 duration-300 group-hover:text-white">
                <TbArrowBadgeRight className="ml-1" size={18} />
              </span>
            </button>
          </Link>
          </div>
    
          
          
        </div>
      </div>
    </div>
  );
};

export default About;
