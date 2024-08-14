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
    </div>
  );
}

export default App;
