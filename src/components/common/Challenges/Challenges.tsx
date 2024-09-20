// components/Challenges/Challenges.tsx
import React from "react"
import Image from "next/image"
import styles from "./Challenges.module.css"

interface ChallengesProps {
  props: any;
}

const Challenges: React.FC<ChallengesProps> = ({ props }) => {
  return (
    <div>
      {props.map((solution: any, index: number) => (
        <div className={`flex ${styles.resourceSolutionBox}`} key={index}>
          <div className={`w-full lg:w-1/2 ${styles.solutiontext}`}>
            <div className={styles.inlineArea}>
              <div
                className={`flex items-center justify-start border-r border-t border-b border-[#94CC7C] rounded-r-xl`}
              >
                <h3>{(index + 1).toString().padStart(2, "0")}.</h3>
                <b>{solution.challengeTitle ? solution.challengeTitle : ""}</b>
              </div>
            </div>
            <p>
              {solution.challengeDescription
                ? solution.challengeDescription
                : ""}
            </p>
          </div>
          <div className={`w-full lg:w-1/2 ${styles.solutionGreenArea}`}>
            <div className={styles.inlineArea}>
              <div className={styles.scaleAnimate}>
                <Image
                  src="/images/arrow-right-resource.png"
                  alt="arrow"
                  width={28}
                  height={28}
                />
                <b>{solution.solutionTitle ? solution.solutionTitle : ""}</b>
              </div>
            </div>
            <p>
              {solution.solutionDescription ? solution.solutionDescription : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Challenges
