import React, { useEffect } from "react";
import { useCartContext } from "../context/cart_context";
import Close from "../assets/close.jpg";
import CartItem from "./CartItem";

const MyCart = ({ myCartClose }) => {
  const { cart } = useCartContext();
  console.log(cart);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div onClick={myCartClose} className="cart-wrapper"></div>
      <div className="cart-section">
        <div className="hero_info">
          <div className="hero">
            <h6 style={{ fontWeight: "700" }}>My Cart</h6>
            <img
              onClick={myCartClose}
              style={{ height: "25px" }}
              src={Close}
              alt=""
            />
          </div>
        </div>

        <div className="hero-subsection">
          <div className="cartitems">
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>
          <div className="bill_details"></div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
