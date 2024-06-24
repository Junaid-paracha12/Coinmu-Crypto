import React, { useEffect, useState } from "react";
import menu from "../images/menu.svg";
import PopupModal from "./PopupModal";
import logo from "../images/logo.png";

const Navbar = ({ navlinks }) => {
  const [navState, setNavState] = useState(false);
  const [popupModalState, setPopupModalState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 120) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 opacity-100 z-40 ${
          navState
            ? "bg-green-800/5 backdrop-blur-md top-0 py-3 border-b border-black/20"
            : "bg-transparent top-10"
        } transition-all duration-300`}
      >
        <nav className="flex items-center justify-between app-container bg-transparent">
          <a href="/" className="flex items-center gap-1 bg-transparent">
            <sub className="bg-transparent">
              <img src={logo} alt="" className="h-6 bg-transparent" />{" "}
            </sub>
            <sub className=" bg-transparent">
              {" "}
              <h1 className=" bg-transparent text-white font-semibold text-xl">
                Coinmu
              </h1>
            </sub>
          </a>
          <ul className="flex items-center lg:hidden gap-7 bg-transparent">
            {navlinks?.map((val, i) => (
              <li key={i} className="bg-transparent">
                <a to={"#"} className="text-sm text-white bg-transparent ">
                  {val.link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 lg:hidden bg-transparent">
            <li className="bg-transparent">
              <button type="button" className="button-light">
                Sign UP
              </button>
            </li>
            <li className="bg-transparent">
              <button type="button" className="button-emrald">
                Log In
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center bg-transparent">
            <li className="bg-transparent grid items-center">
              <button
                className={`flex items-center gap-2 bg-transparent ${
                  navState ? "bg-transparent" : " bg-transparent"
                } p-1.5 rounded-full`}
                onClick={() => setPopupModalState(!popupModalState)}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className={`  bg-transparent ${
                    navState ? "text-white" : "text-black"
                  }`}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {popupModalState && <PopupModal navlinks={navlinks} />}
    </>
  );
};

export default Navbar;
