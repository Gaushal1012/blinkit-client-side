import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/storeContext";
import AddToCart from "./AddToCart";
import Img1 from "../assets/delivery/10_minute_delivery.avif";
import Img2 from "../assets/delivery/Best_Prices_Offers.avif";
import Img3 from "../assets/delivery/Wide_Assortment.avif";
import Delivery from "../assets/delivery/delivery_time.webp";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();
  const { id } = useParams();
  console.log(singleProduct);

  useEffect(() => {
    getSingleProduct(`${id}`);
  }, []);
  return (
    <>
      <div className="single_product_page">
        <div className="left">
          <div>
            <img id="img" src={singleProduct.images} alt="" />
          </div>
          <div className="justyfication">
            <h5>Why shop from blinkit?</h5>
            <div className="second_child">
              <img src={Img1} alt="" />
              <div className="delivery_info">
                <p>Superfast Delivery</p>
                <p className="para_info">
                  Get your order delivered to your doorstep at the earliest from
                  dark stores near you.
                </p>
              </div>
            </div>
            <div className="second_child">
              <div className="delivery_img">
                <img src={Img2} alt="" />
              </div>
              <div className="delivery_info">
                <p>Best Prices & Offers</p>
                <p className="para_info">
                  Best price destination with offers directly from the
                  manufacturers.
                </p>
              </div>
            </div>
            <div className="second_child">
              <div className="delivery_img">
                <img src={Img3} alt="" />
              </div>
              <div className="delivery_info">
                <p>Wide Assortment</p>
                <p className="para_info">
                  Choose from 5000+ products across food, personal care,
                  household & other categories.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="product_name">
            <h3>{singleProduct.name}</h3>
            <div className="delivery_time">
              <img
                style={{ width: "20px", height: "20px" }}
                src={Delivery}
                alt=""
              />
              <p>17 MINS</p>
            </div>
            <h5 style={{ color: "rgb(0, 163, 0)" }}>View all </h5>
          </div>
          <hr style={{ width: "95%" }} />
          <div className="product_info">
            <div className="cart">
              <div className="cart_info">
                <p>{singleProduct.Unit}</p>
                <p className="cart_price">Rs {singleProduct.price}</p>
              </div>
            </div>
            <AddToCart className="add_button" singleProduct={singleProduct} />
          </div>
          <hr style={{ width: "95%" }} />
          <div className="product_details">
            <h4 style={{marginBottom: "20px"}}>Product Details</h4>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Key Features</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.description}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Ingredients</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.Ingredients}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Unit</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.Unit}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Shelf Life</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.ShelfLife}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Manufacturer Details</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.ManufacturerDetails}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Marketed By</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.MarketedBy}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>FSSAI License</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.FSSAILicense}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>Country Of Origin</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.country}</p>
            </div>
            <div style={{marginBottom:"10px"}} className="basic_info">
              <p style={{fontWeight: "700", fontSize: "14px", margin: "0"}}>CountInStock</p>
              <p style={{fontSize: "14px", margin: "0", color:"gray"}}>{singleProduct.countInStock}</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
