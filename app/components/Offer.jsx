import React from "react";
import GradientCircle from "./GradientCircle";
import OfferCard from "./OfferCard";

const Offer = () => {
  return (
    <div className="pb-20">
      <div className="absolute right-1">
        <GradientCircle />
      </div>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold z-20 pb-10">
          WHAT <span className="text-accent-color">WE OFFER</span>
        </h1>
        <OfferCard />
      </div>
    </div>
  );
};

export default Offer;
