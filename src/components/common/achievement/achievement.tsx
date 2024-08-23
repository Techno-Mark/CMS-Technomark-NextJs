import React from "react";
import styles from "./achievement.module.css";

interface Achievement {
  number: string;
  title: string;
}

interface AchievementProps {
  data: {
    items: Achievement[];
  }[];
}

const Achievement: React.FC<AchievementProps> = ({ data }) => {
  return (
    <div className="achivement-section flex flex-wrap justify-center">
      {data?.map((achievement, index) => {
        const foundItem = achievement.items.find((item) => item.title);
        const foundNumber = achievement.items.find((item) => item.number);

        return (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-5">
            <div className={`${styles.achivementbox} p-4`}>
              <h3>{foundNumber?.number ?? ""}</h3>
              <p>{foundItem?.title ?? ""}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Achievement;
