import React from 'react';
import Addbtn from './Addbtn';
// import AddRemoveItems from './AddRemoveItems';


const ProductCard = (props) => {
  return (
    <>
      <div className='container'>
        <div className="top">
          <img src={props.imgSrc} alt="" />
        </div>
        <div className="bottom">
          <div className="title">
            <p className='product_name'>{props.title}</p>
            <p>{props.weight}</p>
          </div>
          <div className="price">
            <p>Rs {props.price}</p>
            {/* <button className='button'>ADD</button>*/}
            {/* <Addbtn/> */}
            {/* <AddRemoveItems/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard;
