import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Divider, Radio, Checkbox, Space } from "antd";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HistoryOutlined,
  LogoutOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  PlusOutlined,
  MinusOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar/Navbar";
import "./MealDetail.scss";

const MealDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedServes, setSelectedServes] = useState("1");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

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
    offer: "20% OFF",
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

  // Serves options
  const servesOptions = [
    { value: "1", label: "1 Serve", price: 0 },
    { value: "2", label: "2 Serves", price: 8.0 },
    { value: "3", label: "3 Serves", price: 12.0 },
  ];

  // Add-ons options
  const addOnsOptions = [
    { id: 1, name: "Extra Cheese", price: 2.0 },
    { id: 2, name: "Extra Sauce", price: 1.5 },
    { id: 3, name: "Side Salad", price: 3.0 },
    { id: 4, name: "Garlic Bread", price: 2.5 },
    { id: 5, name: "Dessert", price: 4.0 },
  ];

  const handleQuantityChange = (increment) => {
    const newQuantity = quantity + increment;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddOnChange = (addOnId, checked) => {
    if (checked) {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    } else {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addOnId));
    }
  };

  const calculateTotalPrice = () => {
    const basePrice = meal.price;
    const servesPrice =
      servesOptions.find((option) => option.value === selectedServes)?.price ||
      0;
    const addOnsPrice = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOnsOptions.find((option) => option.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);

    return (basePrice + servesPrice + addOnsPrice) * quantity;
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: meal.id,
      name: meal.name,
      quantity: quantity,
      serves: selectedServes,
      addOns: selectedAddOns.map((id) =>
        addOnsOptions.find((option) => option.id === id)
      ),
      price: calculateTotalPrice(),
      image: meal.image,
    };

    console.log("Added to cart:", cartItem);
    // Here you would typically add to cart state/context
    // For now, we'll navigate to cart page
    window.location.href = "/cart";
  };

  return (
    <div className="meal-detail">
      {/* Navbar */}
      <Navbar cartCount={0} />

      {/* Main Content */}
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <div className="breadcrumb">
            <Link to="/dashboard" className="breadcrumb-item">
              Home
            </Link>
            <span className="separator">/</span>
            <Link to="/dashboard" className="breadcrumb-item">
              Restaurants
            </Link>
            <span className="separator">/</span>
            <span className="breadcrumb-item active">Chicken Parmesan</span>
          </div>
          <h1 className="page-title">Chicken Parmesan</h1>
          <p className="page-subtitle">
            Delicious Italian classic with tender chicken, melted cheese, and
            perfectly cooked pasta
          </p>
        </div>

        {/* Meal Container */}
        <div className="meal-container">
          {/* Meal Image Section */}
          <div className="meal-image-section">
            <div className="meal-image">
              <div className="image-placeholder">
                <span className="food-emoji">{meal.image}</span>
              </div>
              {meal.offer && (
                <div className="offer-badge">
                  <span>{meal.offer}</span>
                </div>
              )}
            </div>
          </div>

          {/* Meal Info */}
          <div className="meal-info">
            <div className="meal-header">
              <h2 className="meal-name">{meal.name}</h2>
              <div className="meal-meta">
                <span className="category">{meal.category}</span>
                <span className="prep-time">⏱️ {meal.prepTime}</span>
              </div>
              <p className="meal-description">{meal.description}</p>
            </div>

            <div className="nutrition-badges">
              <Badge count={meal.calories} className="calorie-badge" />
              <Badge
                count={`${meal.nutritionInfo.protein} protein`}
                className="protein-badge"
              />
            </div>

            {/* Serves Selection */}
            <div className="serves-section">
              <h3>Serves</h3>
              <Radio.Group
                value={selectedServes}
                onChange={(e) => setSelectedServes(e.target.value)}
                className="serves-options"
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  {servesOptions.map((option) => (
                    <Radio key={option.value} value={option.value}>
                      {option.label}{" "}
                      {option.price > 0 && `(+$${option.price.toFixed(2)})`}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </div>

            {/* Add-ons Section */}
            <div className="addons-section">
              <h3>Add-ons</h3>
              <div className="addons-list">
                {addOnsOptions.map((addOn) => (
                  <div key={addOn.id} className="addon-item">
                    <Checkbox
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={(e) =>
                        handleAddOnChange(addOn.id, e.target.checked)
                      }
                    >
                      <span className="addon-name">{addOn.name}</span>
                      <span className="addon-price">
                        +${addOn.price.toFixed(2)}
                      </span>
                    </Checkbox>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients Section */}
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <div className="ingredients-list">
                {meal.ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-tag">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Allergens Section */}
            <div className="allergens-section">
              <h3>Allergens</h3>
              <div className="allergens-list">
                {meal.allergens.map((allergen, index) => (
                  <span key={index} className="allergen-tag">
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="bottom-action-bar">
          <div className="action-content">
            <div className="quantity-section">
              <span className="quantity-label">Quantity:</span>
              <div className="quantity-controls">
                <Button
                  type="text"
                  icon={<MinusOutlined />}
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="qty-btn"
                />
                <span className="quantity">{quantity}</span>
                <Button
                  type="text"
                  icon={<PlusOutlined />}
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="qty-btn"
                />
              </div>
            </div>

            <div className="price-section">
              <span className="total-price">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="action-buttons">
              <Button
                type="primary"
                size="large"
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                icon={<ShoppingCartOutlined />}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
