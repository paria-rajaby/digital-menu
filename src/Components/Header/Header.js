import "./Header.css";
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import OrderBox from "../OrderBox/OrderBox";
import { useContext } from "react";
import { boughtItems } from "../../Contexts/BoughtItems";

export default function Header() {
  const boxItems = useContext(boughtItems);
  const [toggle, setToggle] = useState(false);
  const showOrderBox = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="headerWrapper">
      <button>
        <IoMenu />
      </button>
      <button onClick={showOrderBox}>
        <FaShoppingBasket />
        <span
          className="notif"
          style={{ display: boxItems.length ? "block" : "none" }}
        >
          {boxItems.length}
        </span>
        {toggle ? <OrderBox /> : ""}
      </button>
    </div>
  );
}
