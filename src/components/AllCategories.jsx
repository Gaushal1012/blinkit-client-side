import React from "react";
import ProteinSection from "./ProteinSection";
import RollingPaperSection from "./RollingPaperSection";
import NamkinSection from "./NamkinSection";
import HookahSection from "./HookahSection";
import ColddrinkSection from "./ColddrinkSection";
import CandiesSection from "./CandiesSection";
import VegetableAndFruits from "./VegetableAndFruits";
import Herobanner from "./Herobanner";
import FeatureProducts from "./FeatureProducts";

const AllCategories = () => {
  return (
    <>
      <Herobanner />
      <FeatureProducts />
      <ProteinSection />
      <RollingPaperSection />
      <NamkinSection />
      <HookahSection />
      <ColddrinkSection />
      <CandiesSection />
      <VegetableAndFruits />
    </>
  );
};

export default AllCategories;
