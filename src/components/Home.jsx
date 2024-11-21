import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-[150px] max-sm:pt-[6rem] w-full h-screen bg-gradient-to-b  from-white  to-sky-200 dark:from-black dark:to-gray-600 dark:text-white"
    >
      <div className="max-w-[1024px] mx-auto px-8 grid sm:grid-cols-2 items-center justify-center h-full ">
        <div className="flex flex-col justify-center h-full">
          <h1 className=" text-xl sm:text-xl max-sm:text-sm font-bold text-lmyellow dark:text-yellow-400">
            &lt;Hey There!/&gt;
          </h1>
          <br></br>
          <h2 className="text-4xl sm:text-5xl max-sm:text-2xl font-bold text-black dark:text-white">
          I'm Vladislav, nice to meet you. 
          </h2>
          <p className="text-gray-700 py-4 max-w-md max-xs:text-4xl dark:text-gray-300">
          Please take a look around to explore my work, learn more about me, and discover the projects I've been working on.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className=" text-black dark:text-white w-fit px-6 py-3 my-2 flex items-center "
            >
              <button
                href="#_"
                className="relative inline-flex items-center justify-start  px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 dark:from-slate-300 dark:to-gray-600 rounded-md hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="max-sm:text-sm max-sm:justify-center relative w-full text-left transition-colors duration-100 ease-in-out group-hover:text-white">
                  More about me...
                </span>
                <span className="group-hover:rotate-90 duration-300 group-hover:text-white">
                  <TbArrowBadgeRight className="ml-1" size={18} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="myPic"
            className="rounded-3xl mx-auto max-sm:w-[13rem] max-sm:mb-10 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
