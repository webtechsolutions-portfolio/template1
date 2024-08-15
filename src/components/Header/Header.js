import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} alt="logo" />
      <div className="header__wrapper">
        <button>
          Kontakt <FaArrowRight />
        </button>
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <IoMenuSharp />
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Header;
