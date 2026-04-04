import React from "react";

interface StarProps {
  color?: string;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export default function Star3({
  color = "currentColor",
  size = 100,
  stroke = "black",
  strokeWidth = 2,
  style,
}: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M50 5L61.2 35.6H95L67.4 54.8L78.6 85.4L50 66.2L21.4 85.4L32.6 54.8L5 35.6H38.8L50 5Z"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
