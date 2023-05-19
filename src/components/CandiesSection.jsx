import React from 'react';
import Slider from "react-slick";
import ProductCard from './ProductCard';
import Product1 from "../assets/candies/105159a.avif";
import Product2 from "../assets/candies/348066a.avif";
import Product3 from "../assets/candies/368388a.avif";
import Product4 from "../assets/candies/425351a.avif";
import Product5 from "../assets/candies/440073a.avif";
import Product6 from "../assets/candies/440074a.avif";
import Product7 from "../assets/candies/440075a.avif";
import Product8 from "../assets/candies/458220a.avif";
import Product9 from "../assets/candies/481312a.avif";
import Product10 from "../assets/candies/481313a.avif";
import Product11 from "../assets/candies/495586a.avif";
import Product12 from "../assets/candies/495587a.avif";

const CandiesSection = () => {

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
        <h4>Candies & Gums</h4>
        <div>
        <Slider {...settings}>
          <div>
            <ProductCard imgSrc={Product1} title="Nicotex Mint Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product2} title="Nicotex Paan Nicotine Gum" weight="9 pieces" price="96"/>
          </div>
          <div>
          <ProductCard imgSrc={Product3} title="Orbit Mixed Fruit Flavour Chewing Gum (Sugar Free)" weight="22 g" price="48"/>
          </div>
          <div>
          <ProductCard imgSrc={Product4} title="Orbit Spearmint Flavour Sugar Free Chewing Gum" weight="22 g" price="48"/>
          </div>
          <div>
          <ProductCard imgSrc={Product5} title="Center Fresh Sugarfree Fruity Mint Candy" weight="4.5 g" price="10"/>
          </div>
          <div>
          <ProductCard imgSrc={Product6} title="Center Fruit Liquid Filled Pineapple Chewing Gum (Tennis Ball Shape)" weight="67.2 g" price="48 "/>
          </div>
          <div>
          <ProductCard imgSrc={Product7} title="Mentos Pure Fresh Mint Chewing Gum" weight="54.6 g" price="90 "/>
          </div>
          <div>
          <ProductCard imgSrc={Product8} title="Wrigley's Doublemint Peppermint Candy" weight="30 g" price="50"/>
          </div>
          <div>
          <ProductCard imgSrc={Product9} title="Center Fresh Sugar Free Mint Candy" weight="35 g" price="90"/>
          </div>
          <div>
          <ProductCard imgSrc={Product10} title="Wrigley's Doublemint Lemonmint Candy" weight="30 g" price="50"/>
          </div>
          <div>
          <ProductCard imgSrc={Product11} title="Center Fresh Chewy Mints Spearmint Flavour Chewing Gum" weight="60 g" price="75"/>
          </div>
          <div>
          <ProductCard imgSrc={Product12} title="Nicotex Mint Nicotine Gum" weight="25 pieces" price="235 "/>
          </div>
        </Slider>
        </div>
      </div>
    </>
  )
}

export default CandiesSection
