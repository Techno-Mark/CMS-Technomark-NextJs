// NextArrow.tsx
import Image from 'next/image';
import React from 'react';

interface NextArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<any> = ({ onClick }) => (
  <div className="slick-next slick-arrow" onClick={onClick}>
    <Image src="/images/Arrow-slideright.png" alt="Next" width={60} height={60}/>
  </div>
);

export default NextArrow;
