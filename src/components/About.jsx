import React from "react";
import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-scroll";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-600 dark:to-gray-900 dark:text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl max-sm:text-2xl font-bold inline border-b-4 border-lmblue dark:border-yellow-400 font-signaturetwo">
            About
          </p>
        </div>

        <div className="max-w-[1024px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right ">
            <p className="text-2xl max-sm:text-xl font-signaturetwo">My name is Vladislav Yankov, I'm 26 years old, based in Varna, Bulgaria. <span class="fi fi-bg"></span> </p>
            <br/>
            <p className="text-4xl max-sm:text-sm font-bold ">I'm a Developer with 7 months of experience working on personal practice projects, focusing on both front-end and back-end development.</p>
          </div>
          <div className="text-xl max-sm:text-sm">
           After these seven months, I'm lucky to have started working in a real-world environment at 411 Marketing as a Browser Automation Specialist in October 2023. In this role, I'm using the technologies and the skills I've previously learned , including HTML, CSS, and JavaScript, to develop and maintain scripts that automate marketing processes. With over a year of real-world work experience, I've gained valuable skills, including working effectively in a team, mastering industry-specific tools and software, managing the time, and working under pressure to meet project deadlines  - skills that only a real-world work environment can provide. I'm excited to continue applying and expanding the skills I've learned and, of course, discover new opportunities for growth along the way. Below, you can see my projects and the technologies I used to create them.
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
              <span className="max-sm:text-sm relative w-full text-left transition-colors duration-100 ease-in-out group-hover:text-white">
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
