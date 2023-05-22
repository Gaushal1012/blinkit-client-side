import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ProductCard from './ProductCard';
import { useFilterContext } from "../context/Filter_context";
import { Link } from "react-router-dom";

const HookahSection = () => {
  const [product, setProduct] = useState([]);

  const { all_products } = useFilterContext();

  //TO GET THE UNIQUE DATA OF EACH FIELDS
  const getUniqueData = (data, property, searchItem) => {
    // let newVal = [];
    let newVal = data.filter((element, index) => {
      return element[property].name === searchItem;
    });
    setProduct(newVal);
    console.log(newVal);
  };
  
  //WE NEED UNIQUE DATA
  useEffect(() => {
    getUniqueData(
      all_products,
      "category",
      "Hookah"
    );
  }, [all_products]);  

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
          id='nextArrow'
            className={className}
            style={{ ...style, display: "block",zIndex:"10", filter: "brightness(0.3)", scale: "1.5", right:"8px" }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
          id='preArrow'
            className={className}
            style={{ ...style, display: "block", zIndex:"10", filter: "brightness(0.3)", scale: "1.5", left:"-8px"}}
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
        prevArrow: <SamplePrevArrow />   
      };

  return (
    <>
      <div className='product_section'>
        <h4>Hookah</h4>
        <div>
        <Slider {...settings}>
          {product && product.map((curElem) => {
              return (
                <Link style={{textDecoration: "none"}} to={`/products/${curElem._id}`}>
                <ProductCard
                  key={curElem._id}
                  imgSrc={`http://localhost:3000/public` + curElem.image}
                  title={curElem.name}
                  weight={curElem.Unit}
                  price={curElem.price}
                />
                </Link>
              );
            })}
        </Slider>
        </div>
      </div>
    </>
  )
}

export default HookahSection
