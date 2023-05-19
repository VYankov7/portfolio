import React from "react";
import { SiTailwindcss } from "react-icons/si/";
import logolight from "../assets/logo.png";

const Footer = () => {
  return (
    <div className=" w-full h-[4rem] bg-white dark:bg-yellow-400 flex items-center justify-around">
      
      <p className="dark:text-black justify-center text-center font-signature text-xl">
        Handcrafted by me - 2023
      </p>
    
      <img className="w-14" src={logolight} alt="img"/>
      <div>
        
        <a
          href="https://tailwindcss.com/"
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center font-signature text-xl">
            Made with &nbsp;
            <SiTailwindcss /> &nbsp;
            Tailwind CSS
          </button>
          
        </a>
      </div>
    </div>
  );
};

export default Footer;
