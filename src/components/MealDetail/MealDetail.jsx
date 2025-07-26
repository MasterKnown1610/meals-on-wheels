import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Divider } from "antd";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HistoryOutlined,
  LogoutOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./MealDetail.scss";

const MealDetail = () => {
  const [selectedDate, setSelectedDate] = useState("tue22");
  const [quantity, setQuantity] = useState(1);

  // Sample meal data
  const meal = {
    id: 1,
    name: "Chicken Parmesan",
    description: "With spaghetti and broccoli",
    price: 12.0,
    image: "🍝",
    category: "Italian",
    prepTime: "25-30 mins",
    calories: "650 kcal",
    ingredients: [
      "Chicken breast",
      "Parmesan cheese",
      "Spaghetti",
      "Broccoli",
      "Marinara sauce",
    ],
    allergens: ["Dairy", "Gluten"],
    nutritionInfo: {
      protein: "45g",
      carbs: "65g",
      fat: "25g",
    },
  };

  // Available dates for preorder
  const availableDates = [
    { id: "mon22", day: "Mon", date: "22", available: true },
    { id: "tue22", day: "Tue", date: "22", available: true },
    { id: "wed22", day: "Wed", date: "22", available: true },
    { id: "thu24", day: "Thu", date: "24", available: true },
    { id: "fri25", day: "Fri", date: "25", available: true },
    { id: "sat26", day: "Sat", date: "26", available: false },
  ];

  const handlePreorder = () => {
    console.log(`Preordering ${quantity} ${meal.name} for ${selectedDate}`);
    // Add to cart logic here
  };

  const handleQuantityChange = (increment) => {
    const newQuantity = quantity + increment;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="meal-detail">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="status-bar">
          <span className="time">3:00</span>
          <div className="status-icons">
            <span className="signal">📶</span>
            <span className="network">4G+</span>
            <span className="battery">50%</span>
          </div>
        </div>
        <div className="browser-bar">
          <div className="url-bar">
            <span className="home-icon">🏠</span>
            <span className="url">chatgpt.com/s/m_682e53a5</span>
            <span className="refresh-icon">🔄</span>
            <span className="plus-icon">➕</span>
            <span className="tab-count">31</span>
          </div>
        </div>
        <div className="app-header">
          <div className="header-content">
            <span className="close-btn">✕</span>
            <h1 className="app-title">Preorder Meals on Wheels App</h1>
            <span className="download-icon">⬇️</span>
          </div>
          <span className="report-link">Report</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          {/* App Branding */}
          <div className="app-branding">
            <div className="logo-section">
              <div className="logo">
                <div className="van-icon">🚚</div>
                <span className="brand-name">Meals on Wheels</span>
              </div>
              <p className="subtitle">with ChefZGlobal</p>
            </div>
            <h2 className="page-title">Preorder Meals</h2>
            <p className="page-description">
              Place orders for Monday through Friday by 7:00 PM Eastern Time
            </p>
          </div>

          {/* Date Selection */}
          <div className="date-selection">
            <h3 className="section-title">Select Date</h3>
            <div className="date-buttons">
              {availableDates.map((date) => (
                <button
                  key={date.id}
                  className={`date-btn ${
                    selectedDate === date.id ? "selected" : ""
                  } ${!date.available ? "disabled" : ""}`}
                  onClick={() => date.available && setSelectedDate(date.id)}
                  disabled={!date.available}
                >
                  <span className="day">{date.day}</span>
                  <span className="date">{date.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Meal Card */}
          <div className="meal-card">
            <div className="meal-image">
              <div className="image-placeholder">
                <span className="food-emoji">{meal.image}</span>
              </div>
            </div>

            <div className="meal-info">
              <div className="meal-header">
                <h3 className="meal-name">{meal.name}</h3>
                <div className="meal-meta">
                  <span className="category">{meal.category}</span>
                  <span className="prep-time">⏱️ {meal.prepTime}</span>
                </div>
              </div>

              <p className="meal-description">{meal.description}</p>

              <div className="nutrition-badges">
                <Badge count={meal.calories} className="calorie-badge" />
                <Badge
                  count={`${meal.nutritionInfo.protein} protein`}
                  className="protein-badge"
                />
              </div>

              <div className="ingredients-section">
                <h4>Ingredients</h4>
                <div className="ingredients-list">
                  {meal.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="allergens-section">
                <h4>Allergens</h4>
                <div className="allergens-list">
                  {meal.allergens.map((allergen, index) => (
                    <span key={index} className="allergen-tag">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="meal-actions">
              <div className="price-section">
                <span className="price">${meal.price.toFixed(2)}</span>
                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                className="preorder-btn"
                onClick={handlePreorder}
                icon={<ShoppingCartOutlined />}
              >
                Preorder
              </Button>
            </div>
          </div>

          {/* Order Cutoff */}
          <div className="cutoff-notice">
            <ClockCircleOutlined />
            <span>Order cutoff time 7:00 PM Eastern</span>
          </div>

          {/* User Menu */}
          {/* <div className="user-menu">
            <Link to="/profile" className="menu-item">
              <UserOutlined />
              <span>Profile</span>
              <ArrowLeftOutlined className="arrow" />
            </Link>
            <Link to="/order-history" className="menu-item">
              <HistoryOutlined />
              <span>Order History</span>
              <ArrowLeftOutlined className="arrow" />
            </Link>
            <button className="menu-item signout">
              <LogoutOutlined />
              <span>Sign Out</span>
              <ArrowLeftOutlined className="arrow" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
