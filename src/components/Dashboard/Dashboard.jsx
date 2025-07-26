import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Select, Badge } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import RestaurantCard from "./RestaurantCard/RestaurantCard.jsx";
import "./Dashboard.scss";

const { Search } = Input;
const { Option } = Select;

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("Biryani");
  const [sortBy, setSortBy] = useState("relevance");

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Behrouz Biryani",
      rating: 3.8,
      deliveryTime: "25-30 mins",
      cuisine: "Biryani, Kebabs, Mughlai, Lucknowi",
      location: "Venkat Nagar Colony",
      image: "🍚",
      offer: "ITEMS AT ₹199",
      isAd: true,
    },
    {
      id: 2,
      name: "Raju Gari Biryani",
      rating: 3.8,
      deliveryTime: "20-25 mins",
      cuisine: "Biryani, Snacks, Chinese, Mughlai",
      location: "Kukatpally",
      image: "🍛",
      offer: "60% OFF UPTO ₹120",
      isAd: false,
    },
    {
      id: 3,
      name: "The Biryani Life",
      rating: 3.5,
      deliveryTime: "25-30 mins",
      cuisine: "Biryani, Mughlai, Lucknowi",
      location: "Venkat Nagar Colony",
      image: "🍽️",
      offer: "ITEMS AT ₹149",
      isAd: true,
    },
    {
      id: 4,
      name: "Chaitanya Food Court",
      rating: 4.5,
      deliveryTime: "15-20 mins",
      cuisine: "Biryani, Chinese, Andhra, North Indian",
      location: "Kukatpally",
      image: "🍲",
      offer: "ITEMS AT ₹49",
      isAd: false,
    },
    {
      id: 5,
      name: "Wholesome Bowlsome",
      rating: 4.3,
      deliveryTime: "40-45 mins",
      cuisine: "Biryani, North Indian, Punjabi, South Indian",
      location: "Kukatpally",
      image: "🥘",
      offer: "ITEMS AT ₹99",
      isAd: true,
    },
    {
      id: 6,
      name: "Chutneys hub",
      rating: 4.2,
      deliveryTime: "15-20 mins",
      cuisine: "Indian, Biryani",
      location: "Kukatpally",
      image: "🍛",
      offer: "10% OFF UPTO ₹40",
      isAd: false,
    },
    {
      id: 7,
      name: "Potful - Claypot Biryanis",
      rating: 4.3,
      deliveryTime: "45-55 mins",
      cuisine: "Biryani, North Indian, Kebabs, Mughlai",
      location: "Kukatpally",
      image: "🍚",
      offer: "ITEMS AT ₹99",
      isAd: true,
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
      {/* Header */}
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <Link to="/" className="logo">
                <div className="logo-icon">M</div>
                <span>Meels on Wheels</span>
              </Link>
              <div className="location">
                <span>Western Hills, Jal Vayu Vihar, Kukat...</span>
              </div>
            </div>

            <div className="search-section">
              <Search
                placeholder="Search for restaurants and food"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                size="large"
                className="search-input"
              />
            </div>

            <div className="user-actions">
              <Button type="text" className="action-btn">
                <Badge count="NEW" size="small">
                  <span>Offers</span>
                </Badge>
              </Button>
              <Button type="text" className="action-btn">
                Help
              </Button>
              <Button type="text" className="action-btn">
                <UserOutlined />
                <span>Karthikeya</span>
              </Button>
              <Button type="text" className="action-btn cart-btn">
                <ShoppingCartOutlined />
                <Badge count={0} size="small">
                  <span>Cart</span>
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

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

          {/* Restaurant Count */}
          <div className="restaurant-count">
            {restaurants.length} Restaurants to explore
          </div>

          {/* Restaurant Grid */}
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
