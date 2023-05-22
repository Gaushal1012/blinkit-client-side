import React from "react";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_PRODUCT":
      return {
        ...state,
        isLoading: false,
        categories: [...action.payload],
        products: [...action.payload],
        productbycategory: [...action.payload],
      };

    case "SET_PRODUCT_CATEGORY":
      return {
        ...state,
        isLoading: false,
        categories: [...action.payload],
        products: [...action.payload],
        productbycategory: [...action.payload],
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      }

    default:
      return {
        state,
      };
  }

  return state;
};

export default productReducer;
