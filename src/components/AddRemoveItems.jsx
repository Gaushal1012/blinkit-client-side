import React, { useState,  useContext } from 'react';
import StoreContext from "../context/storeContext";

const AddRemoveItems = () => {
  const context = useContext(StoreContext);
  const { AddItem } = context;
  const { item } = context;
  const { RemoveItem } = context;

    // let count = 0 ;
    // const [item, setItem] = useState(count);

    const RemoveItems = () =>{
      RemoveItem();
    }
    const AddItems = () =>{
      AddItem();
    }
  return (
    <>
      <div className='addremove'>
        {item<1?"":<p className='icon' onClick={RemoveItems}>-</p>}
        <p>{item}</p>
        <p onClick={AddItems}>+</p>
      </div>
    </>
  )
}

export default AddRemoveItems
