import React from "react";
import { use } from "react";
import PricingCard from "../priceingCard/priceingCard.jsx";

const PriceingOprion = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include
            access to our facilities and community.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {pricingData.map((priceing) => (
            <PricingCard key={priceing.id} priceing={priceing}></PricingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceingOprion;
