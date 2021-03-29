import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbar__logo">MY Solulab</h2>
      </Link>
    
   {/* some changes*/}

   {/*search box*/}
   <div className="header__search">
              <input type="text" class="header__searchInput" />
           {/*<SearchIcon className="header__searchIcon" />*/}
    </div>

   
    <Link to="/login" className="header__link">
              <div className="header__option">
                <span className="header__optionLineTwo">Sign In</span>
              </div>
          </Link>

          <Link to="/Register" className="header__link">
              <div className="header__option">
                <span className="header__optionLineTwo">Register</span>
              </div>
            </Link>

            <Link to="/Adminpanel" className="header__link">
              <div className="header__option">
                <span className="header__optionLineTwo">Adminpanel</span>
              </div>
          </Link>
   {/* Changes*/}
      
      <Link to="/cart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <img
            className="cart__image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart__counter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
