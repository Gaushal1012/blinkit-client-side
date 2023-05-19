import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const NamkinSection = () => {
  const [userData, setUserData] = useState([]);

  const callProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/products/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // console.log(data);
      setUserData(data);
    } catch (error) {
      console.log("please check clearly");
    }
  };

  useEffect(() => {
    callProduct();
  }, []);

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
        <h4>Snacks & Munchies</h4>
            <div>
              <Slider {...settings}>
        {userData.map((val, _id) => {
          return (
                
                  <ProductCard
                    key={val._id}
                    imgSrc={`http://localhost:3000/public`+val.image}
                    title={val.name}
                    weight={val.Unit}
                    price={val.price}
                  />
                
                  );
                })}
              </Slider>
            </div>
      </div>
    </>
  );
};

export default NamkinSection;
