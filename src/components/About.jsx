import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-white to-emerald-100 dark:from-gray-600 dark:to-gray-900 dark:text-white justify-center">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg">
        <div className="max-w-[1024px] w-full px-4 grid grid-cols-2 gap-8">
           <div className=" sm:text-right pb-8 pt-20">
              <p className="text-4xl font-bold inline border-b-4 border-emerald-300 ">About</p>
           </div>
           <div></div>
           </div>
           <div className="max-w-[1024px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">
              <p>Hi. I'm Vladislav, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto, possimus quo hic natus ratione iste? Harum saepe et esse debitis eligendi cupiditate, quibusdam necessitatibus, id dolor non quo deleniti quod magni laudantium?
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
