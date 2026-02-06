
import React from "react";
import "./Home.css"; // Create this CSS file for styling
import { FaUserTie, FaSmile, FaProjectDiagram, FaUsers } from "react-icons/fa"; // icons for stats
import img1 from "../assets/image1.jfif";
import img2 from "../assets/image2.jfif";
import img3 from "../assets/image3.jfif";
import img4 from "../assets/image4.avif";

import aboutImage from "../assets/about-image.avif";
import { Link } from "react-router-dom";


import {useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    img: img1,
    title: "Complete Fire Safety Solutions",
    text: "Protecting lives and property with advanced fire systems.",
  },
  {
    img: img2,
    title: "Certified & Trusted Experts",
    text: "Government approved, ISO certified fire protection services.",
  },
  {
    img: img3,
    title: "24/7 Emergency Support",
    text: "Quick response team ready whenever you need us.",
  },
  {
    img: img4,
    title: "Installation & Maintenance",
    text: "End-to-end fire safety system setup and servicing.",
  },
];




function Home() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <div className="home-page">
      {/* ================= Hero Slider Section ================= */}
      <section className="hero-slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="slider-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </section>

      {/* ================= About Preview Section ================= */}
      <section className="home-about-section">
        <div className="container home-about-container">
          {/* LEFT IMAGE */}
          <div className="home-about-left">
            <img src={aboutImage} alt="About Fire Safety" />
          </div>

          {/* RIGHT TEXT */}
          <div className="home-about-right">
            <h2>About Us</h2>
            <p>
              We are one of the leading providers of advanced fire safety
              solutions, delivering reliable protection systems for homes,
              industries, and commercial spaces.
            </p>
            <p>
              Our expertise includes fire alarms, suppression systems, CCTV, and
              complete security solutions tailored to your needs.
            </p>
            <p>
              With years of experience and certified professionals, we ensure
              top-quality service, safety compliance, and long-term reliability.
            </p>
            <p>
              We believe safety is not optional — it’s essential. Our team works
              tirelessly to safeguard lives and property with cutting-edge
              technology.
            </p>

            <Link to="/about" className="about-btn">
              About Us More →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <FaUserTie className="stat-icon" />
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>200</h3>
            <p>Team Members</p>
          </div>
          <div className="stat-card">
            <FaSmile className="stat-icon" />
            <h3>200</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <FaProjectDiagram className="stat-icon" />
            <h3>150</h3>
            <p>Projects Done</p>
          </div>
        </div>
      </section>

      {/* Industries section content */}
      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-card">Residential</div>
            <div className="industry-card">Hospitals</div>
            <div className="industry-card">Schools</div>
            <div className="industry-card">Factories</div>
            <div className="industry-card">Offices</div>
            <div className="industry-card">Malls</div>
          </div>
        </div>
      </section>
      {/*  certifications-section*/}

      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications & Compliance</h2>
          <div className="certifications-grid">
            <div className="cert-card">Government Approved</div>
            <div className="cert-card">ISO Certified</div>
            <div className="cert-card">Fire Dept. Certified</div>
            <div className="cert-card">NBC Compliant</div>
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us Section ================= */}
      <section className="why-choose-us-section">
        <div className="container why-container">
          <div className="why-left">
            <div className="why-card">
              <img src={img1} alt="Fire Safety Service 1" />
            </div>
            <div className="why-card">
              <img src={img2} alt="Fire Safety Service 2" />
            </div>
            <div className="why-card">
              <img src={img3} alt="Fire Safety Equipment" />
            </div>
            <div className="why-card">
              <img src={img4} alt="Emergency Support Team" />
            </div>
          </div>

          <div className="why-right">
            <h2>Why Choose Us</h2>
            <p>Few Reasons Why People Choosing Us!</p>
            <p>
              We offer quality, cost-effective solutions and pride ourselves on
              our great customer satisfaction, have a look at some of our
              testimonials.We understand that the continued success of our
              business depends on the satisfaction of our customers, which is
              why we are totally committed to going the extra mile to achieve
              this.
            </p>
            <p>No Compromise with Quality.</p>
            <p>operate to all standards and norms.</p>
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </section>

      {/* ================= Testimonials Section ================= */}

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>“Professional team and timely service. Highly recommended.”</p>
              <h4>- John Doe</h4>
            </div>
            <div className="testimonial-card">
              <p>“Great installation experience and support.”</p>
              <h4>- Priya Sharma</h4>
            </div>
            <div className="testimonial-card">
              <p>“Trusted fire safety solutions for our factory.”</p>
              <h4>- Ramesh Kumar</h4>
            </div>
            <div className="testimonial-card">
              <p>“Excellent maintenance team, responsive and skilled.”</p>
              <h4>- Ananya Singh</h4>
            </div>
            <div className="testimonial-card">
              <p>“Highly professional, we feel safe with their systems.”</p>
              <h4>- Akash Mehta</h4>
            </div>
            <div className="testimonial-card">
              <p>“Highly professional, we feel safe with their systems.”</p>
              <h4>- Ajay Kumar </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
