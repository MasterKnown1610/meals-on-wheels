import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <h1>Meels on Wheels</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#corporate">Corporate</a>
              </li>
              <li>
                <a href="#partner">Partner with us</a>
              </li>
              <li>
                <a href="#app">Get the App</a>
              </li>
            </ul>
          </nav>

          {/* User Actions */}
          <div className="user-actions">
            {isLoggedIn ? (
              <div className="user-profile">
                <span className="user-name">John Doe</span>
                <div className="user-avatar">
                  <i className="fas fa-user"></i>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn btn-secondary login-btn">
                <i className="fas fa-user"></i>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
