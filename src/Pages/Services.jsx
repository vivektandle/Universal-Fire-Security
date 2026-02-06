import React from "react";
import "./Services.css";

import extinguisherImg from "../assets/extinguisher.avif";
import alarmImg from "../assets/alarm.jpg";
import sprinklerImg from "../assets/sprinkler.jfif";
import hydrantImg from "../assets/hydrant.jfif";
import auditImg from "../assets/audit.jfif";
import amcImg from "../assets/amc.jfif";

function Services() {
  const services = [
    {
      name: "Fire Extinguisher Systems",
      description: "Supply, installation & refilling",
      image: extinguisherImg,
    },
    {
      name: "Fire Alarm Systems",
      description: "Smoke, heat, and multi-sensor alarms",
      image: alarmImg,
    },
    {
      name: "Sprinkler Systems",
      description: "Automatic fire suppression",
      image: sprinklerImg,
    },
    {
      name: "Hydrant Systems",
      description: "Firefighting water pipeline systems",
      image: hydrantImg,
    },
    {
      name: "Fire Safety Audits",
      description: "Risk assessment & compliance",
      image: auditImg,
    },
    {
      name: "AMC Services",
      description: "Annual Maintenance Contracts",
      image: amcImg,
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-card-inner">
              <img src={service.image} alt={service.name} />
              <p>{service.name}</p>
              <h3>{service.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
