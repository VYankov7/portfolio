import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import { TiArrowRightOutline } from "react-icons/ti";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-700 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm Front End Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have half year of experience building and desgining the front-end of web applications.
            Currently, I love to work on web applications using technologies like
            React, Redux, TypeScript, TailwindCSS
          </p>

          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <TiArrowRightOutline className='ml-1' size={22}/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt='myPic' className='rounded-3xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home