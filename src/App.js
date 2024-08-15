import "./App.css";
import { useRef, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Mainpage from "./components/Mainpage/Mainpage";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Socials from "./components/Socials/Socials";

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
        }, 500);
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
        <Header />
      </header>
      <section ref={(el) => (sectionRefs.current[0] = el)}>
        <Mainpage />
      </section>
      <section ref={(el) => (sectionRefs.current[1] = el)}>
        <Location />
      </section>
      <section ref={(el) => (sectionRefs.current[2] = el)}>
        <Contact />
      </section>
      <section ref={(el) => (sectionRefs.current[3] = el)}>
        <Team />
      </section>
      <footer ref={(el) => (sectionRefs.current[4] = el)}>
        <Socials />
      </footer>
    </div>
  );
}

export default App;
