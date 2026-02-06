import React from "react";
import "./Products.css";

import abcExtinguisher from "../assets/abc-extinguisher.png";
import co2Extinguisher from "../assets/co2-extinguisher.jfif";
import smokeDetector from "../assets/smoke-detector.avif";
import fireHose from "../assets/fire-hose.jfif";
import alarmPanel from "../assets/alarm-panel.jfif";
import sprinklerHead from "../assets/sprinkler-head.jfif";

function Products() {
  const products = [
    { name: "ABC Fire Extinguisher", image: abcExtinguisher },
    { name: "CO₂ Fire Extinguisher", image: co2Extinguisher },
    { name: "Smoke Detector", image: smokeDetector },
    { name: "Fire Hose Reel", image: fireHose },
    { name: "Alarm Control Panel", image: alarmPanel },
    { name: "Sprinkler Head", image: sprinklerHead },
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">Our Products</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-card-inner">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
