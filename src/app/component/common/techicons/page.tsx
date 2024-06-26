// components/TechIcons/TechIcons.tsx
'use client';
import React, { useEffect, useState } from 'react';
import styles from './techicons.module.css'

interface TechIcon {
  src: string;
  alt: string;
  name: string;
}

interface TechIconProps {
  props?: {
    data: TechIcon[];
  };
}



const TechIcons: React.FC<TechIconProps> = ({ props }: any) => {
  const [icons, setIcons] = useState<TechIcon[]>([]);

  // useEffect(() => {
  //   const fetchIcons = async () => {
  //     const data = await getTechIconsData();
  //     setIcons(data);
  //   };

  //   fetchIcons();
  // }, []);

  return (
    <div className={styles.meetgridicon}>
      <ul>
        {props[0]?.data?.map((item: any, index: any) => {
          return(
          <li key={index}>
            <img src={item.src} alt={item.alt} className="w-16 h-16 mx-auto" />
            <p>{item.alt}</p>
          </li>
          )
        }
        )}
      </ul>
    </div>
  );
};

export default TechIcons;
