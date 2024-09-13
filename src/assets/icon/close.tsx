import React from "react"

interface CloseProps {
    className?: string;
    color?: string;
}

const Close: React.FC<CloseProps> = ({ className, color = "#1D3557" }) => {
  return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className={className}
        >
            <path
                d="M8.5 25.5L25.4999 8.50011"
                stroke={color}
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.4999 25.4999L8.5 8.5"
                stroke={color}
                strokeWidth="2.125"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
  )
}

export default Close
