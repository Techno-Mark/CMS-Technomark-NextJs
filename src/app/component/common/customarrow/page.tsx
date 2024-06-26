import React from 'react';
import { Settings } from 'react-slick';

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="slick-next slick-arrow" onClick={onClick}>
    <img src="/images/Arrow-slideright.png" alt="Next" />
  </div>
);

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="slick-prev slick-arrow" onClick={onClick}>
    <img src="/images/Arrow-slideleft.png" alt="Previous" />
  </div>
);

export { NextArrow, PrevArrow };
