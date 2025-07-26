import React from "react";
import "./CitiesSection.scss";

const CitiesSection = () => {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
  ];

  return (
    <section className="cities-section">
      <div className="container">
        <div className="cities-content">
          <div className="cities-column">
            <h3 className="cities-title">Cities with food delivery</h3>
            <div className="cities-list">
              {cities.slice(0, 12).map((city, index) => (
                <span key={index} className="city-item">
                  {city}
                </span>
              ))}
              <button className="show-more-btn">Show More</button>
            </div>
          </div>

          <div className="cities-column">
            <h3 className="cities-title">Cities with grocery delivery</h3>
            <div className="cities-list">
              {cities.slice(0, 8).map((city, index) => (
                <span key={index} className="city-item">
                  {city}
                </span>
              ))}
              <button className="show-more-btn">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
