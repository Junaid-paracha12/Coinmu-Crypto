import React, { useState } from "react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const FrequentlyAsk = ({ faqs: { item, title, btn1, btn2, text } }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16 app-container">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-1 ">
        <div className="flex flex-col gap-3 md:text-center">
          <div className="flex md:justify-center">
            <div className="bg-slate-300/10 rounded-full px-1 bg-opacity-20 flex items-center gap-2 w-44 py-0.5">
              <StarIcon className="w-4 bg-transparent fill-slate-100" />
              <p className="text-xs bg-transparent text-slate-300">
                Your Queries,Our Answer
              </p>
            </div>
          </div>
          <h1 className=" text-4xl lg:text-3xl md:text-2xl sm:text-xl py-4 font-semibold text-white">
            {title}
          </h1>
          <p className=" md:text-sm text-slate-300/50 ">{text}</p>
          <div className="flex items-center flex-wrap md:justify-center gap-4 mt-5">
            <button type="button" className="button-light text-white">
              {btn1}
            </button>
            <button
              type="button"
              className="button-emrald flex items-center gap-1"
            >
              {btn2} <ArrowRightIcon className=" bg-transparent h-5" />
            </button>
          </div>
        </div>
        <div>
          {item?.map((v, index) => (
            <div key={index} className="border-b-slate-300/5 border-b-2  ">
              <button
                className="flex w-full justify-between   px-4 py-3 mb-2 font-medium  lg:text-sm sm:text-xs text-white border-white"
                onClick={() => toggleAnswer(index)}
              >
                {v.question}
                {openIndex === index ? (
                  <ChevronUpIcon className="w-7 h-7 " />
                ) : (
                  <ChevronDownIcon className="w-7 h-7 " />
                )}
              </button>
              {openIndex === index && (
                <p className="text-slate-300/50 flex w-full justify-between  px-4 mb-2  text-sm pb-2  md:text-sm sm:text-xs">
                  {v.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
