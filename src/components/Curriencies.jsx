import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Curriencies = ({ curriencies }) => {
  return (
    <>
      <div className=" mt-11">
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            pagination: false,
            rewind: true,
            autoplay: true,
            type: "loop",
            gap: "1rem",
            arrows:false,
            breakpoints: {
              991: {
                perPage: 3,
                gap: "1rem",
              },
              767: {
                perPage: 2,
                gap: "1rem",
              },
              551: {
                perPage: 1,
                gap: "1rem",
              },
            },
          }}
          className="mt-5"
        >
          {curriencies?.map((v, i) => (
            <SplideSlide
              key={i}
              className=" bg-slate-200/5 bg-opacity-40 shadow-xl shadow-slate-300/5 border-2 border-slate-300/25 p-4 w-full rounded-xl text-white "
            >
              <div className="flex items-center gap-1.5 bg-transparent">
                <img
                  src={v.iconsrc}
                  alt="icon"
                  className=" bg-transparent w-8 h-8"
                />
                <h1 className=" bg-transparent text-xl">{v.title}</h1>
                <p className=" bg-transparent text-sm text-slate-300">
                  {v.text}
                </p>
              </div>
              <div className=" bg-transparent flex items-center justify-between py-5">
                <h1 className="bg-transparent text-2xl md:text-xl sm:text-lg xsm:text-base">
                  {v.price}
                </h1>
                <span className="flex items-center  bg-green-300/25 shadow-lg rounded-xl px-2">
                  <img
                    src={v.icon}
                    alt="icon"
                    className="w-5 h-5 bg-transparent"
                  />
                  <p className=" bg-transparent text-green-500 text-xs">
                    {v.index}
                  </p>
                </span>
              </div>
              <div className=" border-t-2 border-slate-300/25 bg-transparent flex items-center justify-between">
                <p className="bg-transparent text-xs py-2 text-slate-300/70">
                  {v.date}
                </p>
                <p className=" bg-transparent text-xs py-2 text-slate-300/70">
                  {v.price}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Curriencies;
