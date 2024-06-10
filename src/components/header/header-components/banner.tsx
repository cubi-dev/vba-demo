import React from "react";
import { Volume2 } from "lucide-react";

export default function Banner() {
  // List of sale products
  const saleProducts = [
    "Biển số nổi bật ngày 14/06/2024: 51L-466.66, 15K-233.33, 65A-400.00, 94A-100.00, 98A-700.00, 20A-755.55, 75A-366.66, 22A-255.55, 70A-500.00, 30L-173.33.",
    "Biển số nổi bật ngày 17/06/2024: 97B-012.34, 21A-200.00, 29B-647.77, 29K-178.88, 30L-273.33, 29K-215.55, 30L-391.11, 30L-517.77, 30L-271.11, 29K-162.22.",
  ];
  return (
    <div className="bg-green-300 text-green-900 py-2 px-6 overflow-hidden flex items-center">
      <div className="whitespace-nowrap animate-marquee flex-grow overflow-x-hidden px-4 w-30px">
        {saleProducts.map((product, index) => (
          <span key={index} className="pr-6">
            {product}
          </span>
        ))}
      </div>
    </div>
  );
}
