import React, { useContext } from "react";
import Search from "../assets/search.png";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <div className="logo">
            <h1>
              <strong style={{ color: "rgb(252, 207, 6)" }}>
                blink<span style={{ color: "rgb(9, 204, 9)  " }}>it</span>
              </strong>
            </h1>
          </div>
        </div>

        <div className="navigate d-flex">
          <div className="current_address">
            <h5>Delivery in 15 minutes</h5>
            <p>
              Enter your current location <span>&#9660;</span>
            </p>
          </div>
          <div className="searchbar">
            <div>
              <img src={Search} alt="search" height="15px" />
              <input type="text" name="search" placeholder="Search 'chocolate'"/>
            </div>
          </div>
          <div className="login">
            <a href="/">Login</a>
          </div>
          <div className="mycart">
            <button className="button">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p>My Cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
