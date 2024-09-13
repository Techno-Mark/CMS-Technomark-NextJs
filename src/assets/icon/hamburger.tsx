import React from "react"

interface HamburgerProps {
    className?: string;
    color?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({ className, color = "#1D3557" }) => {
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
                d="M4.25 9.91797H29.75"
                stroke={color}
                strokeWidth="2.125"
                strokeLinecap="round"
            />
            <path
                d="M4.25 17H29.75"
                stroke={color}
                strokeWidth="2.125"
                strokeLinecap="round"
            />
            <path
                d="M4.25 24.082H29.75"
                stroke={color}
                strokeWidth="2.125"
                strokeLinecap="round"
            />
        </svg>
  )
}

export default Hamburger
