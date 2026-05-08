import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCart } from "../../CartContext";
import "./Header.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  const { state } = useCart();

  const user = localStorage.getItem("user");
  const toggleDarkMode = () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark")
  );
};

React.useEffect(() => {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "true") {
    document.body.classList.add("dark");
  }
}, []);
  return (
    <header className="header">
      

      {/* LOGO */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* SEARCH */}
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      {/* NAV */}
      <div className="header_nav">


  {/* DARK MODE (FIRST) */}
  <div className="header_option header_darkMode" onClick={toggleDarkMode}>
  <span className="dark_tooltip">Toggle theme</span>
  <DarkModeIcon className="dark_icon" />
</div>

        {/* LOGIN */}
        <Link to="/login" className="header_link">
          
          
          
          
          <div className="header_option">
           <span className="header_optionOne">
  Hello {user ? user : "Guest"}
</span>
            <span className="header_optionTwo">Sign In</span>
          </div>
        </Link>

        {/* ORDERS */}
        <div className="header_option">
          
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
           
        </div>

        {/* PRIME */}
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        {/* CART */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />

            <span className="header_optionTwo header_basketCount">
              {state.cart.length}
            </span>

          </div>
        </Link>

      </div>

      
    </header>
    
  );
};

export default Header;