'use client';
import React, { useEffect, useState } from 'react';
import styles from './singleaward.module.css'

interface awards {
  src: string;
  alt: string;
}

interface awardsprops {
  props?: {
      data: awards[];
  };
}

const Award: React.FC<awardsprops> = ({props}: any) => {
  // const [awards, setAwards] = useState<Award[]>([]);

  // useEffect(() => {
  //   const fetchAwards = async () => {
  //     const data = await getAwardData();
  //     setAwards(data);
  //   };

  //   fetchAwards();
  // }, []);

  return (
    <div className="award-section">
      <ul className={styles.awardlist}>
        {props[0]?.data?.map((award: any, index: any) => (
          <li key={index}>
            <img src={award.src} alt={award.alt}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Award;
