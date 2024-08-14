// src/components/Achivement.tsx
import React from "react";
import styles from "./achievement.module.css";
type achievement = {
  number: string;
  title: string;
};

interface Achievementprops {
  props: {
    data: achievement[];
  };
}

const Achievement: React.FC<Achievementprops> = ({ props }: any) => {
  return (
    <div className="achivement-section flex flex-wrap justify-center">
      {props?.map((achievement: any, index: any) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-5">
          <div className={`${styles.achivementbox} p-4`}>
            <h3>
              {achievement.items.find((item: any) => item.number)
                ? achievement.items.find((item: any) => item.number).number
                : ""}
            </h3>
            <p>
              {achievement.items.find((item: any) => item.title)
                ? achievement.items.find((item: any) => item.title).title
                : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievement;
