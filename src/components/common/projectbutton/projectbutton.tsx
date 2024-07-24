// components/button/ProjectButton.tsx
import React from 'react';
import styles from './projectButton.module.css';

interface ProjectButtonProps {
  onClick: () => void;
  className?: string;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ onClick, className }) => {
  return (
    <button type="button" className={`${styles.projectbtn} ${className}`} onClick={onClick}>
      START A NEW PROJECT
    </button>
  );
};

export default ProjectButton;
