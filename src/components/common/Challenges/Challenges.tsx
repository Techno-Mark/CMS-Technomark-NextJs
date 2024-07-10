// components/Challenges/Challenges.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Challenges.module.css';

interface ResourceSolution {
  challenge: string;
  solutionTitle: string;
  solutionDescription: string;
}

interface ChallengesProps {
  props: {
    title: string;
    resourceSolutions: ResourceSolution[];
  };
}

const Challenges: React.FC<ChallengesProps> = ({ props }) => {
  return (
    <div>
      {props.resourceSolutions.map((solution, index) => (
        <div className={`flex ${styles.resourceSolutionBox}`} key={index}>
          <div className={`w-full lg:w-1/2 ${styles.solutiontext}`}>
            {/* <h3>{index + 1}</h3> */}
            <h3 className="text-2xl font-bold mb-2">{(index + 1).toString().padStart(2, '0')}.</h3>
            <p><b>{solution.challenge}</b></p>
          </div>
          <div className={`w-full lg:w-1/2 ${styles.solutionGreenArea}`}>
            <div className={styles.inlineArea}>
              <div className={styles.scaleAnimate}>
                <Image src="/images/arrow-right-resource.png" alt="arrow" width={35} height={35} />
                <b>{solution.solutionTitle}</b>
              </div>
            </div>
            <p>{solution.solutionDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
