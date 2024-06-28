'use client';
import React, { useEffect, useState } from 'react';
import styles from './singleaward.module.css'
import Image from 'next/image';

interface awards {
  src: string;
  alt: string;
}

interface awardsprops {
  props?: {
      data: awards[];
  };
}

const Award: React.FC<any> = ({props}: any) => {
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
        {props?.data?.map((award: any, index: any) => (
          <li key={index}>
            <Image src={award.src} alt={award.alt} width={107} height={107}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Award;
