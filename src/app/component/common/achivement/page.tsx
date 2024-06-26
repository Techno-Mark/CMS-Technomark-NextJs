// src/components/Achivement.tsx
import React, { useEffect, useState } from 'react';
import styles from './achivment.module.css'

interface achievement {
  number?: string;
  title?: string;
}

interface achievementprops {
  props?: {
      data: achievement[];
  };
}

const Achivement: React.FC <achievementprops> = ({props}: any) => {

  // const [achievements, setAchievements] = useState<Achievement[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchAchievements();
  //     setAchievements(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="achivement-section flex flex-wrap">
      {props[0]?.data?.map((achievement: any, index:any) => (
        <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-5'>
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
