import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { StoreState } from "./context/storeContext";
import { FilterContextProvider } from "./context/Filter_context";
import AllCategories from "./components/AllCategories";
import SingleProduct from "./components/SingleProduct";
import MyCart from "./components/MyCart";
import { CartProvider } from "./context/cart_context";

function App() {
  return (
    <>
      <StoreState>
        <FilterContextProvider>
          <CartProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<AllCategories />}></Route>
                <Route
                  exact
                  path="/products/:id"
                  element={<SingleProduct />}
                ></Route>
                <Route exact path="/mycart" element={<MyCart />}></Route>
              </Routes>
            </Router>
            <Footer />
          </CartProvider>
        </FilterContextProvider>
      </StoreState>
    </>
  );
}

export default App;
