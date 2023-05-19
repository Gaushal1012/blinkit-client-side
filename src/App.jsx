import { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Herobanner from "./components/Herobanner";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeatureProducts from "./components/FeatureProducts";
import ProductCard from "./components/ProductCard";
import ProteinSection from "./components/ProteinSection";
import NamkinSection from "./components/NamkinSection";
import HookahSection from "./components/HookahSection";
import RollingPaperSection from "./components/RollingPaperSection";
import CandiesSection from "./components/CandiesSection";
import ColddrinkSection from "./components/ColddrinkSection";
import Footer from "./components/Footer";
import { StoreState } from "./context/storeContext";
import { FilterContextProvider } from "./context/Filter_context";
import MyLocation from "./Modals/MyLocation";

function App() {
  return (
    <>
      <StoreState>
        <FilterContextProvider>
        {/* <MyLocation/> */}
        <Navbar />
        <Herobanner />
        <FeatureProducts />
        <ProteinSection />
        <RollingPaperSection />
        {/* <NamkinSection /> */}
        <HookahSection />
        <ColddrinkSection />
        <CandiesSection />
        <Footer />
        </FilterContextProvider>
      </StoreState>
    </>
  );
}

export default App;
