// src/pages/Contact.js
import React from "react";
import "./Contact.css";
import contactImage from "../assets/contact-image.jfif"; // Replace with your fire safety image

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-section">
        {/* LEFT SIDE - Contact Info */}
        <div className="contact-left">
          <h1 className="contact-heading">Get in Touch</h1>
          <div className="contact-info">
            <p>
              <strong>&#128222; Phone:</strong> 9731599035, 9740564236
            </p>
            <p>
              <strong>&#9993; Email:</strong> davangaricfss@gmail.com,
              bangalorecfss@gmail.com
            </p>
            <p>
              <strong>&#127968; Address:</strong> #192, 2nd main road, milk
              colony Subramanya Nagara, Rajajinagar Bangalore - 560021
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="contact-right">
          <img src={contactImage} alt="Fire Safety" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
