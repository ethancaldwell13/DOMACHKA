import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isFeatured = false }) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl border transition-shadow duration-200 focus-within:ring-2 focus-within:ring-primary-500 outline-none 
        ${isFeatured
          ? "bg-gray-900 text-white border-gray-800 ring-2 ring-primary-500"
          : "bg-white text-gray-900 border-gray-200"}
        shadow hover:shadow-lg focus-within:shadow-lg p-8 w-full max-w-sm mx-auto`}
      tabIndex={-1}
      aria-label={`${plan} pricing plan`}
    >
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${isFeatured ? "text-white" : "text-gray-900"}`}>{plan}</h3>
        <div className="text-4xl font-bold mb-4">{price}</div>
        <ul className="mb-8 space-y-2 list-disc list-inside">
          {features.map((feature, idx) => (
            <li key={idx} className="text-base">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          ${isFeatured
            ? "bg-primary-500 text-white hover:bg-primary-600"
            : "bg-gray-900 text-white hover:bg-gray-800"}
        `}
        tabIndex={0}
        type="button"
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;
