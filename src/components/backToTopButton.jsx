import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'

function BackToTopButton() {
  const [backToTopButton, setbackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button className=' duration-200 text-gray-600 text-3xl hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600'
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          height: "50px",
          width: "50px",

        }}
          onClick={scrollUp}>
            <AiOutlineArrowUp className=' bg-transparent text-3xl m-8'/>
          </button>
      )}
    </div>
  );
}

export default BackToTopButton;
