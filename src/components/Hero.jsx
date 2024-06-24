import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Hero = ({ hero: { title, text, btn, content } }) => {
  return (
    <>
      <div className="app-container">
        <div className="grid items-center justify-center  mt-36 mb-16 md:mt-28 md:mb-12 text-center gap-6">
          <div className="max-w-2xl">
            {" "}
            <h1 className="text-white text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-medium py-4">
              {title}
            </h1>
            <p className="text-slate-300 md:text-sm sm:text-xs ">{text}</p>
          </div>
          <form className="relative flex items-center justify-center md:flex-col md:gap-4 ">
            <input
              placeholder="Enter your Email"
              name="email"
              type={"email"}
              className="py-2 px-5 ring-1 ring-slate-300 bg-slate-300/10 opacity-70 flex items-center shadow-md  w-full text-base rounded-full  placeholder:text-white "
            />
            <button
              type="button"
              className="button-emrald absolute right-0.5 ml-64 sm:ml-0 sm:text-xs md:w-auto"
            >
              {btn}
            </button>
          </form>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {content?.map((v, i) => (
              <div
                key={i}
                className=" bg-slate-300/10 rounded-full px-3 bg-opacity-20"
              >
                <div className="flex items-center bg-transparent gap-1">
                  {" "}
                  <StarIcon className=" bg-transparent w-4 fill-slate-300" />
                  <p className=" bg-transparent text-slate-300/50 text-xs py-2 ">
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
