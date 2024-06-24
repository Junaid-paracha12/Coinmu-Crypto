import React from "react";

const PopupModal = ({ navlinks }) => {
  return (
    <>
      <nav className=" fixed top-16 right-14 bg-transparent bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-40 h-auto py-5 px-6 transition-transform duration-300 border-2 border-dotted border-slate-300/25">
        <ul className="flex items-start flex-col gap-3 text-white bg-transparent">
          {navlinks?.map((val, i) => (
            <li key={i} className="bg-transparent">
              <a to={"#"} className="text-sm text-white bg-transparent">
                {val.link}
              </a>
            </li>
          ))}
          <li className="bg-transparent">
            <button type="button" className=" text-sm  bg-transparent">
              Sign UP
            </button>
          </li>
          <li className="bg-transparent w-22 ">
            <button type="button" className="text-sm bg-transparent">
              Log IN
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopupModal;
