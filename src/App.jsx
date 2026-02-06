// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

// Import common components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import ScrollToTop from "./Components/Scrolltotop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures every route scrolls to top */}
      <Header />
      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer visible on all pages */}
      <Footer />
      {/* Jump to Top Button */}
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
