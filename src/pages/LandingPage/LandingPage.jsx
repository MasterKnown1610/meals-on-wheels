import React from "react";
import "./LandingPage.scss";
import Header from "../../components/Landing/Header/Header";
import HeroSection from "../../components/Landing/HeroSection/HeroSection";
import ServiceCards from "../../components/Landing/ServiceCards/ServiceCards";
import FoodCategories from "../../components/Landing/FoodCategories/FoodCategories";
import GrocerySection from "../../components/Landing/GrocerySection/GrocerySection";
import RestaurantSection from "../../components/Landing/RestaurantSection/RestaurantSection";
import AppDownloadSection from "../../components/Landing/AppDownloadSection/AppDownloadSection";
import CitiesSection from "../../components/Landing/CitiesSection/CitiesSection";
import Footer from "../../components/Landing/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <ServiceCards />
      <FoodCategories />
      <GrocerySection />
      <RestaurantSection />
      <AppDownloadSection />
      <CitiesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
