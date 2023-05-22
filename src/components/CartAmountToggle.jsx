import React from "react";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <>
      <div className="addremoveitems">
        <button onClick={setDecrease}>-</button>
        <p>{amount}</p>
        <button onClick={setIncrease}>+</button>
      </div>
    </>
  );
};

export default CartAmountToggle;
