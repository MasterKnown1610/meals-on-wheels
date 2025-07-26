import React from "react";
import "./AppDownloadSection.scss";

const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      <div className="container">
        <div className="app-content">
          <div className="app-text">
            <h2 className="app-title">Get the Meels on Wheels App now!</h2>
            <p className="app-description">
              Best offers and discounts curated specially for you
            </p>
            <div className="app-buttons">
              <button className="btn btn-primary app-btn">
                Download on the App Store
              </button>
              <button className="btn btn-primary app-btn">
                GET IT ON Google Play
              </button>
            </div>
          </div>
          <div className="app-visual">
            <div className="phone-mockup">
              <span className="phone-emoji">📱</span>
              <div className="qr-code">QR</div>
            </div>
            <div className="floating-items">
              <span className="floating-item">🍔</span>
              <span className="floating-item">🍟</span>
              <span className="floating-item">🍚</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
