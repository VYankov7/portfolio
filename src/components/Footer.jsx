import React from "react";
import { SiTailwindcss } from "react-icons/si/";
import logolight from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-[4rem] bg-white dark:bg-yellow-400 flex items-center justify-around">
      
      <p className="max-sm:text-sm dark:text-black hover:text-gray-500 dark:hover:text-gray-600 justify-center text-center font-signature text-xl">
        Handcrafted by me - 2023
      </p>
    
      <img className="w-14 rounded-[30%70%] border-solid ring-2" src={logolight} alt="img"/>
      <div>
        
        <a
          href="https://tailwindcss.com/"
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="max-sm:text-sm flex items-center font-signature text-xl dark:hover:text-gray-600 hover:text-gray-500">
            Created with &nbsp;
            <SiTailwindcss /> &nbsp;
            Tailwind CSS
          </button>
          
        </a>
      </div>
    </div>
  );
};

export default Footer;
