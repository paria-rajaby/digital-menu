import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import menu from "./data";
import Categories from "./Components/Categories";

function App() {
  const allCategories = ["All", ...new Set(menu.map((item) => item.category))];
  const [allMenu, setAllMenu] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  console.log(categories);
  return (
    <>
      <section>
        <h1 className="menuTitle">Digital Menu</h1>
        <span className="line"></span>
      </section>
      <section>
        <Categories categories={categories}></Categories>
      </section>
    </>
  );
}

export default App;
