// src/components/Achivement.tsx
import React from "react";
import styles from './achievement.module.css'
type achievement = {
  number: string;
  title: string;
}

interface Achievementprops {
  props: {
    data: achievement[];
  };
}

const Achivement: React.FC<Achievementprops> = ({ props }: any) => {
  console.log("achievement", props);
  return (
    <div className="achivement-section flex flex-wrap">
      {props?.data?.map((achievement: any, index: any) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-5">
          <div className={`${styles.achivementbox} p-4`}>
            <h3>{achievement.number}</h3>
            <p>{achievement.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achivement;
