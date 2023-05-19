import React from 'react';
import Slider from "react-slick";
import ProductCard from './ProductCard';
import Product1 from "../assets/cold-drinks/277a.avif";
import Product2 from "../assets/cold-drinks/283a.avif";
import Product3 from "../assets/cold-drinks/314a.avif";
import Product4 from "../assets/cold-drinks/358a.avif";
import Product5 from "../assets/cold-drinks/359a.avif";
import Product6 from "../assets/cold-drinks/376a.avif";
import Product7 from "../assets/cold-drinks/385a.avif";
import Product8 from "../assets/cold-drinks/20143a.avif";
import Product9 from "../assets/cold-drinks/34353a.avif";
import Product10 from "../assets/cold-drinks/69250a.avif";

const ColddrinkSection = () => {

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
            style={{ ...style, display: "block", color:"red", backgroundColor: "white", background: "red" }}
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
        <h4>Cold Drinks & Juices</h4>
        <div>
        <Slider {...settings}>
          <div>
            <ProductCard imgSrc={Product1} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product2} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product3} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product3} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product4} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product5} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product6} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product7} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product8} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product9} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product10} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
        </Slider>
        </div>
      </div>
    </>
  )
}

export default ColddrinkSection
