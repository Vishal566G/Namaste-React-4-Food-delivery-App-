import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center border-1 border-solid shadow-lg relative z-10 px-6 bg-slate-400">
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
          <li>Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
