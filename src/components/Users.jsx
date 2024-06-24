import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

import Marquee from "react-fast-marquee";

const Users = ({ user: { title, text, content, content2 } }) => {
  return (
    <>
      <div className=" my-16">
        <div className="grid justify-items-center gap-5">
          <div className="bg-slate-300/10 rounded-full px-1 bg-opacity-20 flex items-center gap-2 w-44 py-0.5">
            <StarIcon className="w-4 bg-transparent fill-slate-100" />
            <p className="text-xs bg-transparent text-slate-300">
              satisfied Coinmu Users
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-3xl sm:text-2xl xsm:text-xl">
              {title}
            </h1>
            <span className="flex justify-center">
              {" "}
              <p className="text-slate-300 md:text-sm sm:text-xs max-w-xl py-4">
                {text}
              </p>
            </span>
          </div>
        </div>
        <Marquee className="mt-3 scroll-hidden ">
          <div className="flex items-center ">
            {content?.map((v, i) => (
              <div
                key={i}
                className="hover-theme h-auto bg-slate-200/5 bg-opacity-40 shadow-xl shadow-slate-300/5 py-4 px-8 w-full rounded-xl text-white border-2 border-slate-300/10 mx-2"
              >
                <div className="flex items-center gap-2.5 bg-transparent">
                  <img
                    src={v.imgscr}
                    alt="icon"
                    className="bg-transparent w-9 h-9 rounded-full"
                  />
                  <span className="flex flex-col bg-transparent">
                    <h1 className="bg-transparent text-xl">{v.name}</h1>

                    <p className="bg-transparent text-sm md:text-xs text-slate-200 ">
                      {v.title}
                    </p>
                  </span>
                </div>

                <p className="bg-transparent text-xs text-slate-300 max-w-xs py-2">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee className="mt-3 scroll-hidden">
          <div className="flex items-center">
            {content2?.map((v, i) => (
              <div
                key={i}
                className="hover-theme h-auto bg-slate-200/5 bg-opacity-40 shadow-xl shadow-slate-300/5 py-4 px-8 w-full rounded-xl text-white border-2 border-slate-300/10 mx-2"
              >
                <div className="flex items-center gap-2.5 bg-transparent">
                  <img
                    src={v.imgscr}
                    alt="icon"
                    className="bg-transparent w-9 h-9 rounded-full object-cover"
                  />
                  <span className="flex flex-col bg-transparent">
                    <h1 className="bg-transparent text-xl md:text-lg">
                      {v.name}
                    </h1>

                    <p className="bg-transparent text-sm md:text-xs text-slate-200">
                      {v.title}
                    </p>
                  </span>
                </div>

                <p className="bg-transparent  text-xs max-w-xs py-2 text-slate-300">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Users;
