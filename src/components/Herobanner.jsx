import React from "react";
import Hero from "../assets/hero.webp";
import Offer1 from "../assets/offer-1.avif";
import Offer2 from "../assets/offer-2.avif";
import Offer3 from "../assets/offer-3.avif";
import Offer4 from "../assets/offer-4.avif";

const Herobanner = () => {
  return (
    <>
      <div className="hero_section">
        <div>
          <img className="w-100" src={Hero} alt="hero_img" />
        </div>
        <div className="offers">
          <img src={Offer1} alt=""/>
          <img src={Offer2} alt=""/>
          <img src={Offer3} alt=""/>
          <img src={Offer4} alt=""/>
        </div>
      </div>
    </>
  );
};

export default Herobanner;
