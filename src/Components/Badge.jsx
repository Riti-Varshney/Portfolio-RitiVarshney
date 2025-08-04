// Badge.js
import React from "react";

export const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-gray-700 text-gray-300",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium select-none ${
        variants[variant] || variants.default
      } ${className}`}
    >
      {children}
    </span>
  );
};
