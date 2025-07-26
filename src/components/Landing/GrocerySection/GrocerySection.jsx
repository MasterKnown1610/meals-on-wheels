import React from "react";
import "./GrocerySection.scss";

const GrocerySection = () => {
  const groceryCategories = [
    { id: 1, name: "Fresh Vegetables", icon: "🥬" },
    { id: 2, name: "Fresh Fruits", icon: "🍎" },
    { id: 3, name: "Dairy, Bread and Eggs", icon: "🥛" },
    { id: 4, name: "Rice, Atta and Dals", icon: "🍚" },
    { id: 5, name: "Masalas and Dry Fruits", icon: "🌰" },
    { id: 6, name: "Oils and Ghee", icon: "🫒" },
    { id: 7, name: "Munchies", icon: "🍿" },
    { id: 8, name: "Sweet Tooth", icon: "🍫" },
    { id: 9, name: "Cold Drinks & Juices", icon: "🥤" },
  ];

  return (
    <section className="grocery-section">
      <div className="container">
        <h2 className="section-title">Shop groceries on Instamart</h2>
        <div className="grocery-scroll">
          <div className="grocery-container">
            {groceryCategories.map((category) => (
              <div key={category.id} className="grocery-item">
                <div className="grocery-icon">
                  <span className="emoji">{category.icon}</span>
                </div>
                <span className="grocery-name">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrocerySection;
