import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import MyCart from "./MyCart";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const myCartOpen = () => {
    setOpen(true);
  };

  const myCartClose = () => {
    setOpen(false);
  };

  const setDecrease = () => {
    amount > 0 ? setAmount(amount - 1) : setAmount(0);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  const additeam = () => {
    addToCart(amount, singleProduct);
    myCartOpen();
  };

  return (
    <>
      <div className="cart_info">
        {/* <div className="addremoveitems">
          <button onClick={setDecrease}>-</button>
          <p>{amount}</p>
          <button onClick={setIncrease}>+</button>
        </div> */}
        <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
        <div>
          {/* <Link to={"/mycart"} onClick={() => addToCart(amount, singleProduct)}> */}
          <button onClick={additeam} className="addtocart">
            Add To Cart
          </button>
          {open && <MyCart myCartClose={myCartClose} />}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default AddToCart;
