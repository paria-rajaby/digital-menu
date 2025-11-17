import { useState } from "react";
import "./App.css";
import menu from "./data";
import Categories from "./Components/Categories/Categories";
import Menus from "./Components/Menus/Menus";

function App() {
  const allCategories = ["All", ...new Set(menu.map((item) => item.category))];
  const [allMenu, setAllMenu] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const selectCategory = (category) => {
    if (category == "All") {
      setAllMenu(menu);
      return;
    }
    let filterItems = menu.filter((item) => item.category === category);
    setAllMenu(filterItems);
  };
  return (
    <>
      <section>
        <h1 className="menuTitle">Digital Menu</h1>
        <span className="line"></span>
      </section>
      <section>
        <Categories
          categories={categories}
          selectCategory={selectCategory}
        ></Categories>
      </section>
      <section>
        <Menus allMenu={allMenu}></Menus>
      </section>
    </>
  );
}

export default App;
