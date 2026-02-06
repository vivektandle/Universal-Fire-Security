// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // optional for styling
// import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header">
      <div className="logo">Universal Fire & Security</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="call-button">
        <a href="tel:+919092459092">📞 +91 - 9092459092</a>
      </div>
    </header>
  );
}

export default Header;
