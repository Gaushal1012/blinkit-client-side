import React from 'react';
import Slider from "react-slick";
import ProductCard from './ProductCard';
import Product1 from "../assets/hookah/477463a.avif";
import Product2 from "../assets/hookah/477468a.avif";
import Product3 from "../assets/hookah/477470a.avif";
import Product4 from "../assets/hookah/477475a.avif";
import Product5 from "../assets/hookah/479457a.avif";
import Product6 from "../assets/hookah/479458a.avif";
import Product7 from "../assets/hookah/479459a.avif";
import Product8 from "../assets/hookah/479817a.avif";

const HookahSection = () => {

  

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" ,right:"8px",position: "absolute", zIndex: "99 !important" }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", color:"red",left:"-8px", backgroundColor: "white", background: "red" }}
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
          <div>
            <ProductCard imgSrc={Product1} title="X4 Hookah Cocoyaya" weight="1 unit" price="1350"/>
          </div>
          <div>
          <ProductCard imgSrc={Product2} title="X4 Hookah Cocoyaya" weight="1 unit" price="1300"/>
          </div>
          <div>
          <ProductCard imgSrc={Product3} title="Hookah Foil by Cocoyaya" weight="1 unit" price="100"/>
          </div>
          <div>
          <ProductCard imgSrc={Product4} title="Natural Coconut Hookah Coal by Shisha3Sixty`" weight="1 unit" price="192"/>
          </div>
          <div>
          <ProductCard imgSrc={Product5} title="Silicon Hookah Chillum by Smokman" weight="1 unit" price="264"/>
          </div>
          <div>
          <ProductCard imgSrc={Product6} title="Golden Hookah Tong By Smokman" weight="1 unit" price="250"/>
          </div>
          <div>
          <ProductCard imgSrc={Product7} title="Heavy Duty Shisha Hookah Smokman" weight="1 unit" price="1200"/>
          </div>
          <div>
          <ProductCard imgSrc={Product8} title="Synthetic Hookah Pipe (64 inch, Black) by Cocoyaya" weight="1 unit" price="300"/>
          </div>
        </Slider>
        </div>
      </div>
    </>
  )
}

export default HookahSection
