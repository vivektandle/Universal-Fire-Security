// src/pages/About.js
import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.avif"; // Replace with your image path

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        {/* LEFT SIDE IMAGE */}
        <div className="about-left">
          <img src={aboutImage} alt="Fire Safety" />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="about-right">
        <h1>About us</h1>
          <h1 className="about-slogan">
            We Are Leader In Fire Safety Solution Providers
          </h1>
          <p>
            We would like to introduce ourselves as one of the leading provider
            in the field of Fire Safety Products having headquarter at
            Bangalore. We provide complete solutions on FIRE SAFETY PRODUCTS,
            CCTV, PA SYSTEMS & SECURITY SYSTEMS at your workplace.
          </p>
          <p>
            We have been in the field of helping our customers create a safer
            workplace since 2007 – and our experience shows in our excellent
            work! We are known for our wonderful customer service, our expertise
            and our reliability.
          </p>
          <p>
            Trust us to safeguard your premises with modern fire safety
            technology, proactive inspections, and tailored solutions designed
            to minimize risk and maximize protection.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
