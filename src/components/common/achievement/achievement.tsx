import React from "react"
import styles from "./achievement.module.css"

interface AchievementProps {
  data: {
    number: string;
    title: string;
  }[];
}

const Achievement: React.FC<AchievementProps> = ({ data }) => {
  return (
    <div className="achivement-section flex flex-wrap justify-center">
      {data.map((achievement, index) => {
        return (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-5">
            <div className={`${styles.achivementbox} p-4`}>
              <h3>{achievement?.number ?? ""}</h3>
              <p>{achievement?.title ?? ""}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Achievement
