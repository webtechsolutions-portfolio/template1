import React from "react";
import "./Location.css";
import { MdOutlineLocationCity } from "react-icons/md";
import { IconContext } from "react-icons";

const Location = () => {
  return (
    <div className="location__container">
      <div className="location__wrapper">
        <div className="location__item">
          <IconContext.Provider value={{ color: "white", size: "12vw" }}>
            <MdOutlineLocationCity />
          </IconContext.Provider>
          <h1>Lorem Ipsum </h1>
          <h2>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum
          </h2>
          <h3>email@example.com</h3>
          <h3>+48 123 456 789</h3>
        </div>
        <div className="location__item">
          <IconContext.Provider value={{ color: "white", size: "12vw" }}>
            <MdOutlineLocationCity />
          </IconContext.Provider>
          <h1>Lorem Ipsum </h1>
          <h2>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum
          </h2>
          <h3>email@example.com</h3>
          <h3>+48 123 456 789</h3>
        </div>
        <div className="location__item">
          <IconContext.Provider value={{ color: "white", size: "12vw" }}>
            <MdOutlineLocationCity />
          </IconContext.Provider>
          <h1>Lorem Ipsum </h1>
          <h2>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum
          </h2>
          <h3>email@example.com</h3>
          <h3>+48 123 456 789</h3>
        </div>
        <div className="location__item">
          <IconContext.Provider value={{ color: "white", size: "12vw" }}>
            <MdOutlineLocationCity />
          </IconContext.Provider>
          <h1>Lorem Ipsum </h1>
          <h2>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum
          </h2>
          <h3>email@example.com</h3>
          <h3>+48 123 456 789</h3>
        </div>
      </div>
    </div>
  );
};

export default Location;
