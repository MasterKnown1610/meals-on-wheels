import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge, Input } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "./Navbar.scss";

const { Search } = Input;

const Navbar = ({ cartCount = 0, showSearch = true, showLocation = true }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="navbar">
      <div className="header-content">
        <div className="logo-section">
          <Link to="/dashboard" className="logo">
            <div className="logo-icon">M</div>
            <span>Meels on Wheels</span>
          </Link>
          {showLocation && (
            <div className="location">
              <span>Western Hills, Jal Vayu Vihar, Kukat...</span>
            </div>
          )}
        </div>

        {showSearch && (
          <div className="search-section">
            <Search
              placeholder="Search for restaurants and food"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="large"
              className="search-input"
            />
          </div>
        )}

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
          <Link to="/cart">
            <Button type="text" className="action-btn cart-btn">
              <ShoppingCartOutlined />
              <Badge count={cartCount} size="small">
                <span>Cart</span>
              </Badge>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
