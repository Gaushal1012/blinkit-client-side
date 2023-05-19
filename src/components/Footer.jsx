import React from "react";
import App from "../assets/App.webp";
import GooglePlay from "../assets/GooglePlay.webp";
import Instagram from "../assets/instagram.jpg";
import LinkedIn from "../assets/Linkedin.png";
import Facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="references">
          <div>
            <h5>Useful Links</h5>
            <div className="d-flex">
              <ul>
                <li>About</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Venue</li>
              </ul>
              <ul>
                <li>About</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Venue</li>
              </ul>
              <ul>
                <li>About</li>
                <li>Career</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Venue</li>
              </ul>
            </div>
          </div>
          <div className="categories">
            <h5>
              Categories <span>See all</span>{" "}
            </h5>
            <div>
              <ul>
                <li>Vegetables & Fruits</li>
                <li>Cold Drinks & Juices</li>
                <li>Bakery & Biscuits</li>
                <li>Dry Fruits, Masala & Oil</li>
                <li>Paan Corner</li>
                <li>Pharma & Wellness</li>
                <li>Personal Care</li>
              </ul>
              <ul>
                <li>Dairy & Breakfast</li>
                <li>Instant & Frozen Food</li>
                <li>Sweet Tooth</li>
                <li>Organic & Premium</li>
                <li>Cleaning Essentials</li>
                <li>Pet Care</li>
              </ul>
              <ul>
                <li>Munchies</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Atta, Rice & Dal</li>
                <li>Chicken, Meat & Fish</li>
                <li>Baby Care</li>
                <li>Home & Office</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contactus">
          <div className="para">
            © Blink Commerce Private Limited (formerly known as Grofers India
            Private Limited), 2016-2023
          </div>
          <div className="app">
            <p>Download App</p>
            <img src={App} alt="" />
            <img src={GooglePlay} alt="" />
          </div>
          <div className="social_media d-flex">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        <div className="bio">
          <p>
            “Blinkit” is owned & managed by "Blink Commerce Private Limited"
            (formerly known as Grofers India Private Limited) and is not
            related, linked or interconnected in whatsoever manner or nature, to
            “GROFFR.COM” which is a real estate services business operated by
            “Redstone Consultancy Services Private Limited”.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
