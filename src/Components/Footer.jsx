import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Our Office</h4>
          <p>
            &#127968; # 192, 2nd main road, milk colony Subramanya Nagara,
            Rajajinagar Bangalore - 560021
          </p>
          <p>&#128222;+91 9092459092</p>
          <p>&#9993; bangalorecfss@gmail.com</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/"> &raquo; Home</Link>
            </li>
            <li>
              <Link to="/about">&raquo; About</Link>
            </li>
            <li>
              <Link to="/services"> &raquo; Services</Link>
            </li>
            <li>
              <Link to="/products"> &raquo; Products</Link>
            </li>
            <li>
              <Link to="/contact"> &raquo; Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Business Hours</h4>
          <p>&raquo; Mon-Sat: 9AM - 6PM</p>
          <p>&raquo; Sat: 9AM - 12PM</p>
          <p>&raquo; Sunday: Closed</p>
        </div>
        <div className="footer-column">
          <h4>Location</h4>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7196856469327!2d77.55952437425466!3d12.98977231448127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae162075147209%3A0x1398fc8e367c21b1!2s5th%20Cross%20Rd%20%26%201st%20Main%20Rd%2C%20Ramachandrapuram%2C%20S.S.I.Area%2C%20Dayananda%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560021!5e0!3m2!1sen!2sin!4v1688540198256!5m2!1sen!2sin"
            width="300"
            height="200"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7196856469327!2d77.55952437425466!3d12.98977231448127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae162075147209%3A0x1398fc8e367c21b1!2s5th%20Cross%20Rd%20%26%201st%20Main%20Rd%2C%20Ramachandrapuram%2C%20S.S.I.Area%2C%20Dayananda%20Nagar%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560021!5e0!3m2!1sen!2sin!4v1688540198256!5m2!1sen!2sin"
            title="office-map"
            width="100%"
            height="100"
            style={{ border: 0 }}
          />
        </div>
        <a
          href="https://wa.me/919092459092?text=Hello%20I%20want%20to%20enquire%20about%20Universal%20fire%20and%20Security"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className="copyright">
        Copyright © 2026 Universal Fire & Security, All Right Reserved ||
        Designed By RCS Technology
      </p>
    </footer>
  );
}

export default Footer;
