import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.scss";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    rating,
    deliveryTime,
    cuisine,
    location,
    image,
    offer,
    isAd,
  } = restaurant;

  const handleCardClick = () => {
    navigate(`/meal/${id}`);
  };

  return (
    <div className="restaurant-card" onClick={handleCardClick}>
      <div className="card-image">
        <div className="image-placeholder">
          <span className="food-emoji">{image}</span>
        </div>
        {isAd && <div className="ad-badge">Ad</div>}
        <div className="offer-badge">{offer}</div>
      </div>

      <div className="card-content">
        <div className="restaurant-info">
          <h3 className="restaurant-name">
            {isAd && <span className="ad-text">Ad </span>}
            {name}
          </h3>
          <div className="rating-delivery">
            <span className="rating">★ {rating}</span>
            <span className="delivery-time">• {deliveryTime}</span>
          </div>
          <p className="cuisine">{cuisine}</p>
          <p className="location">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
