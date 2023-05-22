import React from "react";

const cardReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { amount, singleProduct } = action.payload;
    console.log(singleProduct);
    // console.log(amount);

    let cartProduct;
    cartProduct = {
      id: singleProduct._id,
      name: singleProduct.name,
      image: singleProduct.image,
      unit: singleProduct.Unit,
      price: singleProduct.price,
      amount: amount,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  return state;
};

export default cardReducer;
