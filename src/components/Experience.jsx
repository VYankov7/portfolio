import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import axios from "../assets/axios.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import reduxImg from "../assets/redux.png";
import typescript from "../assets/typescript.png"

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
      className="bg-gradient-to-b from-white to-emerald-50 dark:from-gray-700 dark:to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full dark:text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
