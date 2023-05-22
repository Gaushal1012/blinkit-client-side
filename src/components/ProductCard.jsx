import React from "react";
import Addbtn from "./Addbtn";
import { NavLink } from "react-router-dom";

const ProductCard = (curElem) => {
  const { _id } = curElem;
  return (
    <>
      {/* <NavLink to={`/products/${_id}`}> */}
        <div className="container">
          <div className="top">
            <img src={curElem.imgSrc} alt="" />
          </div>
          <div className="bottom">
            <div className="title">
              <p className="product_name">{curElem.title}</p>
              <p>{curElem.weight}</p>
            </div>
            <div className="price">
              <p>Rs {curElem.price}</p>
              <button className="button">ADD</button>
            </div>
          </div>
        </div>
      {/* </NavLink> */}
    </>
  );
};

export default ProductCard;
