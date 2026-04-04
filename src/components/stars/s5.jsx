import React from "react";

export default function Star5({
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
      <polygon points="50,10 58,38 88,38 64,55 73,82 50,66 27,82 36,55 12,38 42,38" />
    </svg>
  );
}
