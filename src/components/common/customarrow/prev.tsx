// PrevArrow.tsx
import Image from 'next/image';
import React from 'react';

interface PrevArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => (
  <div className="slick-prev slick-arrow" onClick={onClick}>
    <Image src="/images/Arrow-slideleft.png" alt="Previous" height={60} width={60}/>
  </div>
);

export default PrevArrow;
