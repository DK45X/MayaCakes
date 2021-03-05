import React, { useContext } from "react";
import logo from "../assets/logo.PNG";
import Facebook from "../assets/facebook.png";
import WhatsApp from "../assets/whatsapp.png";
import Instagram from "../assets/instagram.png";
import { cartContext } from "../Global/cartContext";
import { Link } from "react-router-dom";

const Navbar = ({ cartToggle }) => {
  const { shoppingCart } = useContext(cartContext);
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">
            {" "}
            <img className="logo" src={logo} />{" "}
          </Link>
        </li>
        <div className="social">
          <a
            href="https://www.facebook.com/Maya-cakes-106125548146530"
            target="_blank"
          >
            <img src={Facebook} />
          </a>
          <a href="">
            <img src={WhatsApp} />
          </a>
          <a
            href="https://www.instagram.com/maya.cakes06/?hl=es"
            target="_blank"
          >
            <img src={Instagram} />
          </a>
        </div>
      </ul>
      <ul className="right">
        <li onClick={cartToggle}>
          <Link to="/cart">
            <span className="dollor">
              <i className="fas fa-cart-plus"></i>
            </span>
            <span className="shoppingCartTotal">
              {shoppingCart ? shoppingCart.length : 0}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
