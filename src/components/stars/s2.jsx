import React from "react";

export default function Star2({
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
      <polygon points="50,0 63,37 100,37 70,60 80,100 50,75 20,100 30,60 0,37 37,37" />
    </svg>
  );
}
