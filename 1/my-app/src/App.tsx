import React, { useState } from "react";

import "./App.css";
import PricingCard from "./PricingCard";

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          plan="Standard"
          price="$100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
          selected={selectedIndex === 0}
          onSelect={() => setSelectedIndex(0)}
        />
        <PricingCard
          plan="Pro"
          price="$200"
          features={[
            "100,000 Requests",
            "10 contributors",
            "Up to 10 GB storage space",
          ]}
          isFeatured
          selected={selectedIndex === 1}
          onSelect={() => setSelectedIndex(1)}
        />
        <PricingCard
          plan="Expert"
          price="$500"
          features={[
            "500,000 Requests",
            "Unlimited contributors",
            "Up to 100 GB storage space",
          ]}
          selected={selectedIndex === 2}
          onSelect={() => setSelectedIndex(2)}
        />
      </div>
    </div>
  );
}

export default App;
