import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cardReducer";

const CartContext = createContext();

const initialState ={
    cart: [],
    total_item: "",
    total_amount:"",
    shipping_fee: 100
}

const CartProvider = ({children}) =>{
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const addToCart = ( amount, singleProduct) =>{
        dispatch({type:"ADD_TO_CART", payload: { amount, singleProduct }})
    }

    return(
        <CartContext.Provider value={{...state, addToCart}}>
            {children}
        </CartContext.Provider>
    ) 
}

const useCartContext = () =>{
    return useContext(CartContext);
}

export { CartProvider, useCartContext };