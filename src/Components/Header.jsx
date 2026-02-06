import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">Universal Fire & Security</div>

        {/* Desktop Nav */}
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

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </span>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>
          Products
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
}

export default Header;
