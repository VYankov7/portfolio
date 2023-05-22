import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import axios from "../assets/axios.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import reduxImg from "../assets/redux.png";
import typescript from "../assets/typescript.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-cssblue",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-rblue",
    },
    {
      id: 5,
      src: typescript,
      title: "TypeScript",
      style: "shadow-tscript",
    },
    {
      id: 6,
      src: reduxImg,
      title: "Redux",
      style: "xl:bg-transparent shadow-iblue",
    },

    {
      id: 7,
      src: axios,
      title: "Axios",
      style: "shadow-axioscolor",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-tblue",
    },

    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-sky-200 to-white dark:from-gray-600 dark:to-gray-900 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white">
        <div className="mt-14">
          <p className="text-4xl max-sm:text-2xl font-bold border-b-4 inline border-lmyellow dark:border-yellow-400 font-signaturetwo">
            Experience
          </p>
          <p className="text-lg max-sm:text-sm font-signaturetwo py-6 ">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 max-sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 max-sm:pb-20">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="pic" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
