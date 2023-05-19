import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import { useProductContext } from "./storeContext";

const FilterContext = createContext();
const initialState = {
    filter_products: [],
    all_products: []
  };

export const FilterContextProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { products } = useProductContext();
    
    console.log(products);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products})
    },[products])

    return(
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}