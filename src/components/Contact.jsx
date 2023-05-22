import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-white  to-sky-200 dark:from-gray-900 dark:to-gray-600 p-4 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl max-sm:text-2xl font-bold inline border-b-4 border-lmyellow dark:border-yellow-400 font-signaturetwo">
            Contact
          </p>
          <p className="text-lg font-signaturetwo py-6">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/55429dd5-65b2-4a44-85b0-57e2ad9eb828"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none placeholder-gray-200 focus:placeholder-gray-400 hover:placeholder-gray-400"
              required="required"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none placeholder-gray-200 focus:placeholder-gray-400 hover:placeholder-gray-400"
              required="required"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none placeholder-gray-200 focus:placeholder-gray-400 hover:placeholder-gray-400"
              required="required"
            ></textarea>

            <button
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 dark:from-slate-300 dark:to-gray-600 rounded-md hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left transition-colors duration-100 ease-in-out group-hover:text-white">
                Send
              </span>
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
