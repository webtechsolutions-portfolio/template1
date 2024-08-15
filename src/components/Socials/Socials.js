import React from "react";
import "./Socials.css";
import { TbWorldBolt } from "react-icons/tb";
import { IconContext } from "react-icons";
import { IoLogoFacebook, IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Socials = () => {
  return (
    <div className="socials__container">
      <div className="socials__wrapper__row">
        <IconContext.Provider value={{ color: "white", size: "14vh" }}>
          <TbWorldBolt />
        </IconContext.Provider>
        <h1>Twoja firma</h1>
      </div>
      <div className="socials__wrapper__row">
        <div className="socials__wrapper__column">
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
        </div>
        <div className="socials__wrapper__column">
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
        </div>
      </div>
      <div className="socials__wrapper__row">
        <div className="socials__wrapper__column">
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h2>Lorem Ipsum Lorem Ipsum</h2>
        </div>
        <div className="socials__wrapper__column">
          <div className="socials__icons__wrapper">
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <IoLogoFacebook />
              <h2>@facebook.com</h2>
            </IconContext.Provider>
          </div>
          <div className="socials__icons__wrapper">
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <FaInstagram />
              <h2>@instagram.com</h2>
            </IconContext.Provider>
          </div>
          <div className="socials__icons__wrapper">
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <IoLogoTiktok />
              <h2>@tiktok.com</h2>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="socials__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Socials;
