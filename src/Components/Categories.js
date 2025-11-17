import React from "react";
import "./Categories.css";

export default function Categories({ categories }) {
  console.log(Categories);

  return (
    <div className="buttonContainer">
      {categories.map((category) => (
        <button className="filterBtn" type="button">
          {category}
        </button>
      ))}
    </div>
  );
}
