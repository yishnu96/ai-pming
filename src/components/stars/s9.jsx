import React from "react";

export default function Star9({
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
      <polygon points="50,15 60,40 85,40 65,58 72,85 50,70 28,85 35,58 15,40 40,40" />
    </svg>
  );
}
