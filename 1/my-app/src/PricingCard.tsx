import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
  selected = false,
  onSelect,
}) => {
  const isDark = selected;
  const cardBg = isDark
    ? "bg-gray-900 text-white border-gray-800"
    : "bg-white text-gray-900 border-gray-200";
  const headerText = isDark ? "text-white" : "text-gray-900";
  const buttonBg = isDark
    ? "bg-white text-gray-900 hover:bg-gray-200"
    : "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <div
      className={`flex flex-col justify-between rounded-xl border transition-shadow transition-transform duration-200 shadow p-8 w-full max-w-sm mx-auto
        ${cardBg}
        hover:shadow-2xl hover:-translate-y-2
      `}
      aria-label={`${plan} pricing plan`}
      // убираем outline и ring
      tabIndex={-1}
      style={{ outline: "none" }}
      onClick={onSelect}
      role="button"
    >
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${headerText}`}>{plan}</h3>
        <div className="text-4xl font-bold mb-4">{price}</div>
        <ul className="mb-8 space-y-2 list-disc list-inside pl-6 pr-6">
          {features.map((feature, idx) => (
            <li key={idx} className="text-base">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200
          ${buttonBg}
        `}
        type="button"
        tabIndex={-1}
        style={{ outline: "none", boxShadow: "none" }}
        onClick={e => {
          e.stopPropagation();
          onSelect && onSelect();
        }}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;
