import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import Sidebar from "../Sidebar/Sidebar";

const Header = ({ sectionRefs }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="header__container">
      <img src={logo} alt="logo" />
      <div className="header__wrapper">
        <button>
          Kontakt <FaArrowRight />
        </button>
        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <IoMenuSharp onClick={toggleSidebar} />
        </IconContext.Provider>
      </div>
      <Sidebar
        sectionRefs={sectionRefs}
        onClose={toggleSidebar}
        isOpen={isSidebarOpen}
      />
    </div>
  );
};

export default Header;
