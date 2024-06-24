import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const Discover = ({ discover: { title, text, content } }) => {
  return (
    <>
      <div className="app-container my-16">
        <div className="grid justify-items-center gap-4 text-center">
          <div className="bg-slate-300/10 rounded-full px-1 bg-opacity-20 flex items-center gap-2 w-44 py-0.5 ">
            <StarIcon className="w-4 bg-transparent fill-slate-100" />
            <p className="text-xs bg-transparent text-slate-300">
              Discover Our Features
            </p>
          </div>
          <h1 className="text-white text-4xl lg:text-3xl md:text-2xl sm:text-xl font-medium">
            {title}
          </h1>
          <span className="max-w-xl">
            {" "}
            <p className="text-slate-300/70 text-sm">{text}</p>
          </span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6 text-center">
          {content?.map((v, i) => (
            <div key={i} className="grid justify-items-center">
             
              <img
                src={v.iconsrc}
                alt="icon"
                className="w-8 bg-emerald-300 bg-opacity-80 p-2 rounded-md"
              />

              <h1 className="text-white py-3">{v.title}</h1>
             <span></span> <p className=" text-slate-300/70 text-xs w-56">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
