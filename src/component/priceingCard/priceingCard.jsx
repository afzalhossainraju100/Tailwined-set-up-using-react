import React from "react";
import { Check } from "lucide-react";

const priceingCard = ({ priceing }) => {
  console.log(priceing);
  return (
    <div
      className={`h-full rounded-xl sm:rounded-2xl shadow-lg md:shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col ${
        priceing.popular
          ? "bg-gradient-to-br from-blue-600 to-blue-800 ring-2 ring-blue-400 relative transform sm:scale-105 overflow-visible"
          : "bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden"
      }`}
    >
      {/* Popular Badge */}
      {priceing.popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="p-4 sm:p-6 md:p-8 pt-6 sm:pt-10 flex flex-col flex-grow">
        {/* Plan Name */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
          {priceing.name}
        </h3>

        {/* Best For */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 min-h-8 sm:min-h-10">
          {priceing.bestFor}
        </p>

        {/* Price Section */}
        <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-400 border-opacity-30">
          <div className="flex items-baseline mb-1 sm:mb-2">
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              {priceing.price}
            </span>
            <span className="text-sm sm:text-lg md:text-xl text-gray-300 ml-2">
              {priceing.currency}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300">
            per {priceing.duration.toLowerCase()}
          </p>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-2 sm:py-3 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg transition-all duration-300 mb-6 sm:mb-8 ${
            priceing.popular
              ? "bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 active:scale-95"
              : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 active:scale-95"
          }`}
        >
          Get Started
        </button>

        {/* Features List */}
        <div className="space-y-3 sm:space-y-4 flex-grow">
          <p className="text-xs uppercase font-semibold text-gray-300 tracking-wider">
            What's Included:
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {priceing.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-xs sm:text-sm md:text-base text-gray-100 group"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-400 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-400 border-opacity-30">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default priceingCard;
