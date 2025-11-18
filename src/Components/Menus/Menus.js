import React from "react";
import "./Menus.css";

export default function Menus({ allMenu, selectItem }) {
  return (
    <div className="menusWrapper">
      {allMenu.map((menu) => (
        <div className="menuItemWrapper">
          <img src={menu.img} alt={menu.title} className="menuItemImage" />
          <div className="menuItemTexts">
            <div className="menuItemInfos">
              <h3 className="menuItemInfos_title">{menu.title}</h3>
              <span className="menuItemInfos_price">{menu.price}$</span>
            </div>
            <div className="menuItemDesc">{menu.desc}</div>
            <button onClick={() => selectItem(menu.title)} className="orderBtn">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
