import React from "react";
import "./ServiceCards.scss";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "FOOD DELIVERY FROM RESTAURANTS",
      description: "UPTO 60% OFF",
      image: "🍽️",
      bgColor: "#f8f9fa",
    },
    {
      id: 2,
      title: "INSTAMART INSTANT GROCERY",
      description: "UPTO 60% OFF",
      image: "🛒",
      bgColor: "#fff5f5",
    },
    {
      id: 3,
      title: "DINEOUT EAT OUT & SAVE MORE",
      description: "UPTO 50% OFF",
      image: "🍴",
      bgColor: "#f0f9ff",
    },
  ];

  return (
    <section className="service-cards">
      <div className="container">
        <div className="service-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="service-image">
                <span className="emoji">{service.image}</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
