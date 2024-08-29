import React from "react";
import styles from "./projectButton.module.css";

interface ProjectButtonProps {
  onClick: () => void;
  className?: string;
  buttonText?: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  onClick,
  className = "",
  buttonText = "START A NEW PROJECT",
}) => {
  return (
    <button
      type="button"
      className={`${styles.projectbtn} ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ProjectButton;
