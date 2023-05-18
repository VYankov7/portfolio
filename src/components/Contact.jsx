import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-sm:pt-[20rem] w-full h-screen bg-gradient-to-b from-emerald-100 to-white dark:from-gray-900 dark:to-gray-600 p-4 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-emerald-300">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/55429dd5-65b2-4a44-85b0-57e2ad9eb828" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none placeholder-gray-700 focus:placeholder-gray-400"
              required="required"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none placeholder-gray-700 focus:placeholder-gray-400"
              required="required"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none placeholder-gray-700 focus:placeholder-gray-400"
              required="required"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-gray-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
