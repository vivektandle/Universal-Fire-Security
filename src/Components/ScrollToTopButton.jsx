// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ⬆
      </button>
    )
  );
}

export default ScrollToTopButton;
