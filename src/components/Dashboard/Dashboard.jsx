import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Divider, Select, Space } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.scss";

const { Option } = Select;

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Pizza Palace",
      rating: 4.5,
      deliveryTime: "20-25 mins",
      cuisine: "Pizza, Italian, Fast Food",
      location: "Kukatpally",
      image: "🍕",
      offer: "50% OFF UPTO ₹100",
      isAd: true,
    },
    {
      id: 2,
      name: "Burger House",
      rating: 4.2,
      deliveryTime: "15-20 mins",
      cuisine: "Burgers, American, Fast Food",
      location: "Kukatpally",
      image: "🍔",
      offer: "FREE DELIVERY",
      isAd: false,
    },
    {
      id: 3,
      name: "Sushi Express",
      rating: 4.7,
      deliveryTime: "25-30 mins",
      cuisine: "Sushi, Japanese, Asian",
      location: "Kukatpally",
      image: "🍣",
      offer: "BUY 1 GET 1 FREE",
      isAd: false,
    },
    {
      id: 4,
      name: "Taco Bell",
      rating: 4.0,
      deliveryTime: "18-22 mins",
      cuisine: "Mexican, Fast Food",
      location: "Kukatpally",
      image: "🌮",
      offer: "FLAT ₹50 OFF",
      isAd: false,
    },
    {
      id: 5,
      name: "Chicken Wings",
      rating: 4.3,
      deliveryTime: "22-27 mins",
      cuisine: "Chicken, American, Fast Food",
      location: "Kukatpally",
      image: "🍗",
      offer: "20% OFF ON ORDERS ABOVE ₹200",
      isAd: false,
    },
    {
      id: 6,
      name: "Ice Cream World",
      rating: 4.6,
      deliveryTime: "10-15 mins",
      cuisine: "Desserts, Ice Cream",
      location: "Kukatpally",
      image: "🍦",
      offer: "BUY 2 GET 1 FREE",
      isAd: false,
    },
    {
      id: 7,
      name: "Coffee Corner",
      rating: 4.1,
      deliveryTime: "12-18 mins",
      cuisine: "Coffee, Beverages, Snacks",
      location: "Kukatpally",
      image: "☕",
      offer: "FREE COFFEE ON FIRST ORDER",
      isAd: false,
    },
    {
      id: 8,
      name: "Maa Ooru Biryani",
      rating: 4.0,
      deliveryTime: "15-20 mins",
      cuisine: "Biryani, Indian, Andhra",
      location: "Kukatpally",
      image: "🍽️",
      offer: "ITEMS AT ₹109",
      isAd: false,
    },
  ];

  return (
    <div className="dashboard">
      {/* Navbar */}
      <Navbar cartCount={0} />

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          {/* Page Title and Description */}
          <div className="page-header">
            <h1 className="page-title">{searchQuery}</h1>
            <p className="page-description">
              Taste these delectable classics, delectable biryanis to make your
              day.
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="filters-section">
            <div className="filters-left">
              <Button icon={<FilterOutlined />} className="filter-btn">
                Filter
              </Button>
              <Select
                value={sortBy}
                onChange={setSortBy}
                className="sort-select"
                placeholder="Sort by"
              >
                <Option value="relevance">Relevance</Option>
                <Option value="rating">Rating</Option>
                <Option value="delivery">Delivery Time</Option>
                <Option value="price">Price</Option>
              </Select>
            </div>
            <div className="filters-right">
              <Button type="primary" className="delivery-btn">
                10 Mins Delivery
              </Button>
            </div>
          </div>

          {/* Restaurants Grid */}
          <div className="restaurants-grid">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="card-image">
                  <div className="image-placeholder">
                    <span className="food-emoji">{restaurant.image}</span>
                  </div>
                  {restaurant.isAd && (
                    <div className="ad-badge">
                      <span>AD</span>
                    </div>
                  )}
                  {restaurant.offer && (
                    <div className="offer-badge">
                      <span>{restaurant.offer}</span>
                    </div>
                  )}
                </div>

                <div className="card-content">
                  <div className="restaurant-info">
                    <h3 className="restaurant-name">{restaurant.name}</h3>
                    <div className="restaurant-meta">
                      <span className="rating">⭐ {restaurant.rating}</span>
                      <span className="delivery-time">
                        ⏱️ {restaurant.deliveryTime}
                      </span>
                    </div>
                    <p className="cuisine">{restaurant.cuisine}</p>
                    <p className="location">{restaurant.location}</p>
                  </div>

                  <div className="card-actions">
                    <Link to={`/meal/${restaurant.id}`}>
                      <Button type="primary" className="view-menu-btn">
                        View Menu
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
