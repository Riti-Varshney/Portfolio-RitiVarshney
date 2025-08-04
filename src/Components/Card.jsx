// Card.js
import React from "react";

export const Card = ({ children, className = "", style }) => (
  <div
    className={`rounded-lg border border-gray-800 bg-[#111111]/70 p-6 shadow-sm ${className}`}
    style={style}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
