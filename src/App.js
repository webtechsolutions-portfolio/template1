import "./App.css";
import logo from "../src/assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import { useRef, useState, useEffect } from "react";

function App() {
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);

      if (!isScrolling) {
        setIsScrolling(true);

        if (delta > 0 && currentSection < sectionRefs.current.length - 1) {
          setCurrentSection((prevSection) => prevSection + 1);
        } else if (delta < 0 && currentSection > 0) {
          setCurrentSection((prevSection) => Math.max(0, prevSection - 1));
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 500); // Delay to wait for scroll to finish
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, isScrolling]);

  useEffect(() => {
    if (sectionRefs.current[currentSection]) {
      const targetPosition = sectionRefs.current[currentSection].offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, [currentSection]);

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
          <input type="text" placeholder="Lorem Ipsum2" name="user_name" />
          <input type="text" placeholder="Lorem Ipsum2" name="user_name" />
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
    <div className="App">
      <header>
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
      </header>
      <section ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="mainpage__container">
          <div className="mainpage__wrapper">
            <h1>Lorem Ipsum</h1>
            <h2>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum
            </h2>
            <h3>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum
            </h3>
          </div>
        </div>
      </section>
      <section ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="location__container">
          <div className="location__wrapper">
            <div className="location__item">
              <IconContext.Provider value={{ color: "white", size: "12vw" }}>
                <MdOutlineLocationCity />
              </IconContext.Provider>
              <h1>Lorem Ipsum </h1>
              <h2>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
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
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
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
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
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
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
              </h2>
              <h3>email@example.com</h3>
              <h3>+48 123 456 789</h3>
            </div>
          </div>
        </div>
      </section>
      <section ref={(el) => (sectionRefs.current[2] = el)}>
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
      </section>
    </div>
  );
}

export default App;
