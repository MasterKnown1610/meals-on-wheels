import React from "react";
import "./FoodCategories.scss";

const FoodCategories = () => {
  const categories = [
    { id: 1, name: "Biryani", icon: "🍚" },
    { id: 2, name: "Pizza", icon: "🍕" },
    { id: 3, name: "Chinese", icon: "🥡" },
    { id: 4, name: "Shawarma", icon: "🌯" },
    { id: 5, name: "Cake", icon: "🎂" },
    { id: 6, name: "Burger", icon: "🍔" },
    { id: 7, name: "North Indian", icon: "🍛" },
    { id: 8, name: "Dosa", icon: "🥞" },
    { id: 9, name: "South Indian", icon: "🍽️" },
    { id: 10, name: "Noodles", icon: "🍜" },
    { id: 11, name: "Rolls", icon: "🌯" },
    { id: 12, name: "Kebab", icon: "🍖" },
    { id: 13, name: "Paratha", icon: "🥟" },
    { id: 14, name: "Porotta", icon: "🥖" },
    { id: 15, name: "Momo", icon: "🥟" },
    { id: 16, name: "Salad", icon: "🥗" },
    { id: 17, name: "Puri", icon: "🥟" },
  ];

  return (
    <section className="food-categories">
      <div className="container">
        <h2 className="section-title">What's on your mind?</h2>
        <div className="categories-scroll">
          <div className="categories-container">
            {categories.map((category) => (
              <div key={category.id} className="category-item">
                <div className="category-icon">
                  <span className="emoji">{category.icon}</span>
                </div>
                <span className="category-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
