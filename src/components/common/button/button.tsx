import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  href?: string;
  text: string;
  variant: "primary" | "secondary";
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({ href, text, variant, onClick }) => {
  const baseClass = styles.newPrimarybtn;
  const variantClass = variant === "secondary" ? styles.secondarybtn : "";
  const strokeColor =
    variant === "secondary" ? "#1D3557" : "var(--white-color)";

  return (
    <>
      {!!href ? (
        <a
          href={href}
          className={`${baseClass} ${variantClass} cursor-pointer`}
        >
          {text}
          <span className={styles.arrowanimatebtn}>
            <i className={styles.icon}></i>
          </span>
        </a>
      ) : (
        <button
          type="button"
          className={`${baseClass} ${variantClass} cursor-pointer`}
          onClick={onClick}
        >
          {text}
          <span className={styles.arrowanimatebtn}>
            <i className={styles.icon}></i>
          </span>
        </button>
      )}
    </>
  );
};

export default Button;
