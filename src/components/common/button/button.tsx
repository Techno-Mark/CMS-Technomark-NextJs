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
  const strokeColor = variant === 'secondary' ? '#1D3557' : 'var(--white-color)';


  return (
    <>
      <a href={href} className={`${baseClass} ${variantClass}`}>
        {text}
        <span className={styles.arrowanimatebtn}>
          <i className={styles.icon}></i>
        </span>
      </a>
    </>
  );
}

export default Button;
