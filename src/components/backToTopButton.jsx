import React, { useState, useEffect } from 'react';
import { TiArrowUpOutline } from 'react-icons/ti'

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
        <button className='ring-2 ring-gray-600 ring-inset rounded-full hover:ring-gray-400 duration-200'
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          height: "50px",
          width: "50px",
          fontSize: "50px",
        }}
          onClick={scrollUp}>
            <TiArrowUpOutline className='group text-gray-600 text-3xl m-2.5'/>
          </button>
      )}
    </div>
  );
}

export default BackToTopButton;
