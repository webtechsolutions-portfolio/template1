import React, { useEffect, useRef, useCallback } from "react";
import "./Sidebar.css";

const Sidebar = ({ sectionRefs, onClose, isOpen }) => {
  const sidebarRef = useRef();

  const handleClickOutside = useCallback(
    (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
    onClose(); // Close the sidebar after clicking
  };

  return (
    <div
      ref={sidebarRef}
      className={`sidebar__container ${isOpen ? "open" : "closed"}`}
    >
      <button onClick={() => scrollToSection(0)}>Mainpage</button>
      <button onClick={() => scrollToSection(1)}>Location</button>
      <button onClick={() => scrollToSection(2)}>Contact</button>
      <button onClick={() => scrollToSection(3)}>Team</button>
      <button onClick={() => scrollToSection(4)}>Socials</button>
    </div>
  );
};

export default Sidebar;
