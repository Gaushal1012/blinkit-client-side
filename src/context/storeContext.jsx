import React, { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const StoreContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  categories: [],
  productbycategory:[]
};

export const StoreState = ({ children }) => {

  const [ state, dispatch ] = useReducer(reducer, initialState);

  //Items remove or add
  // let count = 0;
  // const [item, setItem] = useState(count);

  // const AddItem = () => {
  //   setItem(item + 1);
  // };

  // const RemoveItem = () => {
  //   setItem(item-1);
  // };


  //get all categories
  const getCategory = async () =>{
    dispatch({type:"SET_LOADING"});
      try {
        const res = await axios.get("http://localhost:3000/api/v1/categories/");
        const categories = await res.data;
        dispatch({type:"SET_CATEGORY", payload:categories});
        console.log(categories);
        // return categories;
        getProductByCategory(categories[0]._id);
      } catch (error) {
        dispatch({type:"API_ERROR"});
      }
  }

  //Get all products
  const getProductList = async (id) =>{
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/productlist/`);
        const products = await res.data;
        dispatch({type:"SET_PRODUCT", payload:products});
        // console.log(products);
      } catch (error) {
        console.log(error);
      }
    }

  // //get all products
  // const getProducts = async () =>{
  //   const response = await fetch("http://localhost:3000/api/v1/categories/", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await response.json();
  //   // console.log(data);
  //   setProduct(data);
  // }

  // get product with same category
  const getProductByCategory = async (id) =>{
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/products/categories/${id}`);
      const productbycategory = await res.data;
      dispatch({type:"SET_PRODUCT_CATEGORY", payload:productbycategory});
      console.log(productbycategory);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  // getCategory();
  getProductList();
}, []);

  return (
    <StoreContext.Provider value={{ ...state }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useProductContext = () =>{
    return useContext(StoreContext);
}