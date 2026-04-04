import React from "react";

export default function Star1({
  color = "currentColor",
  size = 40,
  stroke = "currentColor",
  strokeWidth = 2,
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="50,5 61,35 95,35 68,57 78,90 50,70 22,90 32,57 5,35 39,35" />
    </svg>
  );
}
