import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Divider, Input, Space } from "antd";
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
  CreditCardOutlined,
  DeleteOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar/Navbar";
import "./Cart.scss";

const { Search } = Input;

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Parmesan",
      quantity: 2,
      serves: "2",
      addOns: [
        { name: "Extra Cheese", price: 2.0 },
        { name: "Side Salad", price: 3.0 },
      ],
      price: 35.0,
      image: "🍝",
    },
    {
      id: 2,
      name: "Beef Burger",
      quantity: 1,
      serves: "1",
      addOns: [{ name: "Extra Sauce", price: 1.5 }],
      price: 15.5,
      image: "🍔",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (itemId, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(1, Math.min(10, item.quantity + increment)),
            }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
    // Here you would typically navigate to payment page
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        {/* Navbar */}
        <Navbar cartCount={0} />

        <div className="main-content">
          {/* Page Header */}
          <div className="page-header">
            <div className="breadcrumb">
              <Link to="/dashboard" className="breadcrumb-item">
                Home
              </Link>
              <span className="separator">/</span>
              <span className="breadcrumb-item active">Cart</span>
            </div>
            <h1 className="page-title">Shopping Cart</h1>
            <p className="page-subtitle">
              Review your items and proceed to checkout
            </p>
          </div>

          <div className="empty-state">
            <div className="empty-icon">
              <ShoppingCartOutlined />
            </div>
            <h2>Your cart is empty</h2>
            <p>Add some delicious meals to get started!</p>
            <Link to="/dashboard">
              <Button type="primary" size="large">
                Browse Meals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      {/* Navbar */}
      <Navbar cartCount={cartItems.length} />

      {/* Main Content */}
      <div className="main-content">
        {/* Page Header */}
        <div className="page-header">
          <div className="breadcrumb">
            <Link to="/dashboard" className="breadcrumb-item">
              Home
            </Link>
            <span className="separator">/</span>
            <span className="breadcrumb-item active">Cart</span>
          </div>
          <h1 className="page-title">Shopping Cart</h1>
          <p className="page-subtitle">
            Review your items and proceed to checkout
          </p>
        </div>

        {/* Cart Container */}
        <div className="cart-container">
          {/* Cart Items Section */}
          <div className="cart-items-section">
            <div className="cart-items">
              <div className="section-header">
                <h3>Cart Items ({cartItems.length})</h3>
              </div>
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <div className="image-placeholder">
                        <span className="food-emoji">{item.image}</span>
                      </div>
                    </div>

                    <div className="item-details">
                      <div className="item-header">
                        <h3 className="item-name">{item.name}</h3>
                        <Button
                          type="text"
                          icon={<DeleteOutlined />}
                          onClick={() => removeItem(item.id)}
                          className="remove-btn"
                        />
                      </div>

                      <div className="item-options">
                        <span className="serves">Serves: {item.serves}</span>
                        {item.addOns.length > 0 && (
                          <div className="addons">
                            {item.addOns.map((addon, index) => (
                              <span key={index} className="addon-tag">
                                {addon.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="item-price">
                        <span className="price">${item.price.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="item-quantity">
                      <div className="quantity-controls">
                        <Button
                          type="text"
                          icon={<MinusOutlined />}
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="qty-btn"
                        />
                        <span className="quantity">{item.quantity}</span>
                        <Button
                          type="text"
                          icon={<PlusOutlined />}
                          onClick={() => updateQuantity(item.id, 1)}
                          disabled={item.quantity >= 10}
                          className="qty-btn"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="order-summary-section">
            <div className="order-summary">
              <div className="summary-header">
                <h3>Order Summary</h3>
              </div>
              <div className="summary-content">
                {/* Promo Code */}
                <div className="promo-section">
                  <h4>Promo Code</h4>
                  <div className="promo-input">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      suffix={
                        <Button type="link" size="small">
                          Apply
                        </Button>
                      }
                    />
                  </div>
                </div>

                {/* Summary Items */}
                <div className="summary-items">
                  <div className="summary-item">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="summary-item">
                    <span>Tax</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <Divider />
                  <div className="summary-item total">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <div className="checkout-section">
                  <Button
                    type="primary"
                    size="large"
                    className="checkout-btn"
                    onClick={handleCheckout}
                    icon={<CreditCardOutlined />}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
