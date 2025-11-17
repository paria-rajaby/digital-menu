import "./Categories.css";
import { useState } from "react";

export default function Categories({ categories, selectCategory }) {
  const [mainCategory, setMainCategory] = useState("All");
  return (
    <div className="buttonContainer">
      {categories.map((category) => (
        <button
          onClick={() => {
            setMainCategory(category);
            selectCategory(category);
          }}
          className={
            category === mainCategory ? "filterBtn highlight" : "filterBtn"
          }
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
