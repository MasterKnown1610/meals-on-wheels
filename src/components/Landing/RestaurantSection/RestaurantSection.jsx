import React from "react";
import "./RestaurantSection.scss";

const RestaurantSection = () => {
  const restaurants = [
    {
      id: 1,
      name: "Chaitanya Food Court",
      cuisine: "North Indian",
      cost: "₹200 for two",
      offer: "Flat 15% off on walk-in",
      image: "🏪",
    },
    {
      id: 2,
      name: "Tabla",
      cuisine: "North Indian",
      cost: "₹400 for two",
      offer: "Flat 30% off on pre-booking",
      image: "🍽️",
    },
    {
      id: 3,
      name: "Platform 65 - The Train",
      cuisine: "Multi-cuisine",
      cost: "₹300 for two",
      offer: "Up to 10% off with bank offers",
      image: "🚂",
    },
    {
      id: 4,
      name: "California Burrito",
      cuisine: "Mexican",
      cost: "₹250 for two",
      offer: "Flat 20% off",
      image: "🌯",
    },
    {
      id: 5,
      name: "Barkaas Indo Arabian",
      cuisine: "Arabian",
      cost: "₹350 for two",
      offer: "Flat 25% off",
      image: "🍖",
    },
  ];

  return (
    <section className="restaurant-section">
      <div className="container">
        <h2 className="section-title">Discover best restaurants on Dineout</h2>
        <div className="restaurant-scroll">
          <div className="restaurant-container">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">
                  <span className="emoji">{restaurant.image}</span>
                </div>
                <div className="restaurant-content">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                  <p className="restaurant-cost">{restaurant.cost}</p>
                  <p className="restaurant-offer">{restaurant.offer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
