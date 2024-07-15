import React from 'react';
import styles from './button.module.css'

interface ButtonProps {
  href: string;
  text: string;
  variant: 'primary' | 'secondary';
} 

const Button: React.FC<ButtonProps> = ({ href, text, variant }) => {
  const baseClass = styles.newPrimarybtn;
  const variantClass = variant === 'secondary' ? styles.secondarybtn : '';
  const strokeColor = variant === 'secondary' ? '#1D3557' : '#ffffff';


  return (
    <>
      <a href={href} className={`${baseClass} ${variantClass}`}>
        {text} <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 19L19 10L10 1" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1 10H19" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </a>
    </>
  );
}

export default Button;
