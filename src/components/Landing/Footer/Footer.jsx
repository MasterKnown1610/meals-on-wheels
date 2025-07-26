import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#one">Meels on Wheels One</a>
              </li>
              <li>
                <a href="#instamart">Instamart</a>
              </li>
              <li>
                <a href="#dineout">Dineout</a>
              </li>
              <li>
                <a href="#minis">Minis</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact us</h4>
            <ul className="footer-links">
              <li>
                <a href="#help">Help & Support</a>
              </li>
              <li>
                <a href="#partner">Partner With Us</a>
              </li>
              <li>
                <a href="#ride">Ride With Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#cookie">Cookie Policy</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Available in</h4>
            <ul className="footer-links">
              <li>
                <a href="#cities">685 cities</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Life at Meels on Wheels</h4>
            <ul className="footer-links">
              <li>
                <a href="#explore">Explore With Meels on Wheels</a>
              </li>
              <li>
                <a href="#news">Meels on Wheels News</a>
              </li>
              <li>
                <a href="#snackables">Snackables</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#facebook" className="social-link">
              Facebook
            </a>
            <a href="#twitter" className="social-link">
              Twitter
            </a>
            <a href="#instagram" className="social-link">
              Instagram
            </a>
            <a href="#linkedin" className="social-link">
              LinkedIn
            </a>
          </div>

          <div className="app-download-bottom">
            <p>For better experience, download the Meels on Wheels app now</p>
            <div className="app-buttons-bottom">
              <button className="btn btn-secondary">
                Download on the App Store
              </button>
              <button className="btn btn-secondary">
                GET IT ON Google Play
              </button>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2025 Meels on Wheels Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
