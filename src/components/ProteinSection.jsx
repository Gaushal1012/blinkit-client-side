import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useFilterContext } from "../context/Filter_context";


const ProteinSection = (props) => {

  const { filter_products } = useFilterContext();
  console.log(filter_products);


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "red",
          backgroundColor: "white",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="product_section">
        <h4>Dairy, Bread & Eggs</h4>
        <div>
          <Slider {...settings}>
            {/* {products.map((curElem) => {
              return (
                <ProductCard
                  key={curElem.id}
                  imgSrc={`http://localhost:3000/public` + curElem.image}
                  title={curElem.name}
                  weight={curElem.Unit}
                  price={curElem.price}
                />
              );
            })} */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProteinSection;
