import React from "react";
import CartAmountToggle from "./CartAmountToggle";

const CartItem = ({ id, name, image, price, unit, amount }) => {
  const setDecrease = () => {
    // amount > 0 ? setAmount(amount - 1) : setAmount(0);
  };

  const setIncrease = () => {
    // setAmount(amount + 1);
  };

  return (
    <>
      <div className="productitems_details">
        <div className="cartItem">
          <img className="img_product"
            style={{ width: "70px" }}
            src={`http://localhost:3000/public` + image}
            alt=""
          />
          <div className="unitIconomics">
            <p style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{name}</p>
            <p>{unit}</p>
            <p style={{ fontWeight: "700" }}>Rs {price}</p>
          </div>
          <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          />
          <div className="mrp">
            <p className="pricecart" style={{margin:"0px"}}>Rs {price * amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
