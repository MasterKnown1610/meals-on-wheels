import React, { useState } from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  const [location, setLocation] = useState("Western Hills, Jal Vayu...");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in", location);
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Order food & groceries. Discover best restaurants. Meels on Wheels
            it!
          </h1>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-container">
              <div className="location-input">
                <i className="fas fa-map-marker-alt"></i>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                />
              </div>

              <div className="search-input">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for restaurant, item or more"
                />
              </div>

              <button type="submit" className="btn btn-primary search-btn">
                Find Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
