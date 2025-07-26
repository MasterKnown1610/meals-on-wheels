import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import "./Login.scss";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9+\-()\s]/g, "");
    setPhoneNumber(filteredValue);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      message.error("Please enter your phone number");
      return;
    }
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\s/g, ""))) {
      message.error("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Login successful!");
      console.log("Login attempt with:", phoneNumber);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <div className="back-button-container">
            <Link to="/" className="back-button">
              <i className="fas fa-arrow-left"></i>
              Back to Home
            </Link>
          </div>

          <h1 className="login-title">Login</h1>

          <div className="create-account-link">
            <Link to="/signup" className="link-text">
              or create an account
            </Link>
          </div>

          <div className="divider"></div>

          <form onSubmit={handleLogin} className="form">
            <div className="input-group">
              <Input
                size="large"
                prefix={<PhoneOutlined />}
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="phone-input"
                maxLength={15}
                allowClear
                onKeyPress={(e) => {
                  const char = String.fromCharCode(e.which);
                  if (!/[0-9+\-()\s]/.test(char)) {
                    e.preventDefault();
                  }
                }}
              />
            </div>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              loading={isLoading}
              className="login-button"
              block
            >
              {isLoading ? "Logging in..." : "LOGIN"}
            </Button>
          </form>

          <div className="terms-text">
            By clicking on Login, I accept the{" "}
            <Link to="/terms" className="terms-link">
              Terms & Conditions
            </Link>{" "}
            &{" "}
            <Link to="/privacy" className="terms-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
