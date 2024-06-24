import React from "react";
import logo from "../images/logo.png";

const Footer = ({ footerAPI: { content, sociallinks } }) => {
  return (
    <>
      <footer className=" mt-20 border-t-2 border-slate-300/5 py-4 ">
        <div className="app-container">
          <div className="grid items-start justify-items-center sm:justify-items-start grid-cols-4 sm:grid-cols-2 gap-5">
            {content?.map((val, i) => (
              <div
                key={i}
                className="grid items-start last:justify-items-end w-full first:justify-items-start   gap-3 sm:even:justify-items-end  justify-items-center sm:justify-items-start"
              >
                <h1 className="text-xl lg:text-base text-white">
                  {val.title}
                </h1>
                <ul className="grid justify-items-start items-start gap-1">
                  {val.list?.map((v, i) => (
                    <li key={i} className="text-slate-300 text-sm sm:text-xs">
                      {v.link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className=" mt-4">
            <div className="h-[0.1vh] bg-slate-300/20 my-7 md:my-5"></div>
            <div className="flex items-center justify-between  md:gap-5 md:flex-col-reverse py-3">
              <p className="text-sm md:text-center text-slate-300">
                Copyright<sup className="text-base font-bold">&copy;</sup>2023
                coinmu{" "}
              </p>
              <a href="/" className="flex items-center gap-1 bg-transparent">
                <sub className="bg-transparent">
                  <img src={logo} alt="icon" className="h-6 bg-transparent" />{" "}
                </sub>
                <sub>
                  {" "}
                  <h1 className="text-white font-bold text-lg">Coinmu</h1>
                </sub>
              </a>

              <div className="flex items-center gap-3 fill-white">
                {sociallinks?.map((val, i) => (
                  <div key={i} className="bg-slate-300/25 rounded-full p-1">
                    <img
                      src={val.icon}
                      alt="social/icons"
                      className="w-4 h-4 bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
