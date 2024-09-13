// NextArrow.tsx
import React from 'react'

interface NextArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => (
  <div className="slick-next slick-arrow" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 79 79" fill="none">
      <circle cx="39.5" cy="39.5" r="39" transform="matrix(-1 0 0 1 79 0)" stroke="#1D3557" />
      <path d="M43.0375 32.4121L50.625 39.9996L43.0375 47.5871" stroke="#1D3557" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.3688 40H50.4062" stroke="#1D3557" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export default NextArrow
