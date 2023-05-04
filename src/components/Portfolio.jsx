import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  

  // Tui e onClick funkciqta
  const openInNewTab = url => {
    console.log(url)
    window.open(url.href, '_blank');
  };


  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      href: "https://delicate-toffee-946104.netlify.app/",
    },
    {
      id: 2,
      src: reactParallax,
      href: "https://google.com",
    },
    {
      id: 3,
      src: navbar,
      href: "https://delicate-toffee-946104.netlify.app/",

    },
    {
      id: 4,
      src: reactSmooth
    },
    {
      id: 5,
      src: installNode,
    
    },
    {
      id: 6,
      src: reactWeather
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-600 dark:text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Chek out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
          portfolios.map(({id, src, href}) => (
          <div key={id} className="shadow-lg shadow-gray-500 rounded-lg">
            <img src={src} alt="pic" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <button onClick={() => openInNewTab(href={href})}  className="w-1/2 px-5 py-3 m-4 duration-200 hover:scale-110 hover:text-gray-500">Demo</button>
              <button className="w-1/2 px-5 py-3 m-4 duration-200 hover:scale-110 hover:text-gray-500">Code</button>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
