import "./OrderBox.css";
import { useContext } from "react";
import { boughtItems } from "../../Contexts/BoughtItems";

export default function OrderBox() {
  const boxItems = useContext(boughtItems);

  return (
    <div className="ordersBox">
      {boxItems.length === 0 ? (
        <p>Box is empty</p>
      ) : (
        boxItems.map((item) => (
          <div className="box">
            <img src={item.img} alt={item.title} />
            <div className="boxInfo">
              <h3>{item.title}</h3>
              <span>{item.price}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
