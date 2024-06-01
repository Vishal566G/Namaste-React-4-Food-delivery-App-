import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { userLoggedIn } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between items-center border-1 border-solid shadow-lg z-20 px-6 bg-slate-400 sticky top-0">
      <div className="logo-container relative z-0">
        <img className="logo w-32" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-6">
          <li>Online Status: {onlineStatus === false ? "❌" : "✅"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="">
            <Link to="/cart">Cart ({cart.length} items )</Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="btn"
          >
            {btnNameReact}
          </button>
          <li className="font-bold">{userLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
