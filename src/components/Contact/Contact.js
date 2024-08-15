import React from "react";
import "./Contact.css";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [selectedHeader, setSelectedHeader] = useState(0);

  const handleHeaderClick = (headerIndex) => {
    setSelectedHeader(headerIndex);
  };

  const headers = [
    {
      title: "Lorem Ipsum1",
      content: (
        <form>
          <input type="text" placeholder="Lorem Ipsum1" name="user_name" />
          <input
            type="email"
            placeholder="email1@example.com"
            name="user_email"
          />
          <input type="text" placeholder="Lorem Ipsum1" name="user_name" />
          <input type="text" placeholder="Lorem Ipsum1" name="user_name" />
          <textarea placeholder="Lorem Ipsum1" name="message" />
          <div className="contact__button__container">
            <button type="submit">
              Wyślij <FaArrowRight />
            </button>
          </div>
        </form>
      ),
    },
    {
      title: "Lorem Ipsum2",
      content: (
        <form>
          <input type="text" placeholder="Lorem Ipsum2" name="user_name" />
          <input
            type="email"
            placeholder="email2@example.com"
            name="user_email"
          />
          <input type="text" placeholder="Lorem Ipsum2" name="user_name" />
          <input type="text" placeholder="Lorem Ipsum2" name="user_name" />
          <textarea placeholder="Lorem Ipsum2" name="message" />
          <div className="contact__button__container">
            <button type="submit">
              Wyślij <FaArrowRight />
            </button>
          </div>
        </form>
      ),
    },
  ];
  return (
    <div className="contact__container">
      <div className="contact__wrapper">
        <h1>Lorem Ipsum</h1>
        <h2>Lorem Ipsum Lorem Ipsum</h2>
      </div>
      <div className="contact__wrapper">
        <div className="contact__headers">
          {headers.map((header, index) => (
            <h3
              key={index}
              onClick={() => handleHeaderClick(index)}
              className={
                selectedHeader === index ? "contact__header--selected" : ""
              }
            >
              {header.title}
            </h3>
          ))}
        </div>
        <div className="contact__content">
          {headers.map(
            (header, index) =>
              selectedHeader === index && (
                <p key={index} className="contact__fade-in">
                  {header.content}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
