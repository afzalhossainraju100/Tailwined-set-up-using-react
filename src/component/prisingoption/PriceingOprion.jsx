import React from "react";
import { use } from "react";
import PricingCard from "../priceingCard/priceingCard.jsx";

const PriceingOprion = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h2 className="text-5xl">{pricingData.title}</h2>
      <div>
        {pricingData.map((priceing) => (
          <PricingCard key={priceing.id} priceing={priceing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PriceingOprion;
