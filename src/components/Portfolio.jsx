import React from "react";
import gerichRest from "../assets/portfolio/gerichRest.png";
import chatGPT3 from "../assets/portfolio/chatGPT3.png";
import reactCalculator from "../assets/portfolio/reactCalculator.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import installNode from "../assets/portfolio/installNode.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  
  const openDemo = url => {
    console.log(url)
    window.open(url.hrefDemo, '_blank');
  };
  
  const openCode = url => {
    console.log(url)
    window.open(url.hrefCode, '_blank');
  };


  const portfolios = [
    {
      id: 1,
      src: gerichRest,
      hrefDemo: "https://delicate-toffee-946104.netlify.app/",
      hrefCode: "https://github.com/VYankov7/gerich-restaurant"
    },
    {
      id: 2,
      src: chatGPT3,
      hrefDemo: "https://cheerful-pegasus-44127f.netlify.app/",
      hrefCode: "https://github.com/VYankov7/gpt-3-react-project-for-practicing"
    },
    {
      id: 3,
      src: reactCalculator,
      hrefDemo: "https://yankov-react-calculator.netlify.app/",
      hrefCode: "https://github.com/VYankov7/react-calculator"
    },
    {
      id: 4,
      src: reactSmooth,
      hrefDemo: "https://delicate-toffee-946104.netlify.app/",
      hrefCode: "https://github.com/VYankov7/gerich-restaurant"
    },
    {
      id: 5,
      src: installNode,
      hrefDemo: "https://delicate-toffee-946104.netlify.app/",
      hrefCode: "https://github.com/VYankov7/gerich-restaurant"
    },
    {
      id: 6,
      src: reactWeather,
      hrefDemo: "https://delicate-toffee-946104.netlify.app/",
      hrefCode: "https://github.com/VYankov7/gerich-restaurant"
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-emerald-100 to-white dark:from-gray-900 dark:to-gray-600 dark:text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-300">Portfolio</p>
          <p className="py-6">Chek out some of my recent work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-40">
        {
          portfolios.map(({id, src, hrefDemo, hrefCode}) => (
          <div key={id} className="shadow-lg shadow-gray-500 rounded-lg">
            <img src={src} alt="pic" className="rounded-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
              <button onClick={() => openDemo(portfolios.href={hrefDemo})}  className="w-1/2 px-5 py-3 m-4 duration-200 hover:scale-110 hover:text-gray-500">Demo</button>
              <button onClick={() => openCode(portfolios.href={hrefCode})}  className="w-1/2 px-5 py-3 m-4 duration-200 hover:scale-110 hover:text-gray-500">Code</button>
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
