// PrevArrow.tsx
import React from 'react'

interface PrevArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => (
  <div className="slick-prev slick-arrow" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 79 79" fill="none">
      <circle cx="39.5" cy="39.5" r="39" transform="matrix(-1 0 0 1 79 0)" stroke="#1D3557" />
      <path d="M36.9625 32.4121L29.375 39.9996L36.9625 47.5871" stroke="#1D3557" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50.6312 40H29.5938" stroke="#1D3557" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export default PrevArrow
