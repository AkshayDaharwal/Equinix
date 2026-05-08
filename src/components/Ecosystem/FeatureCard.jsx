import React from "react";

const FeatureCard = ({ title, points, className }) => {
  return (
    <div
      className={`absolute border border-red-500/40 rounded-[24px] p-6 w-[280px] backdrop-blur-md bg-black ${className}`}
    >
      <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>

      <ul className="text-gray-400 text-sm space-y-1 leading-relaxed">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;