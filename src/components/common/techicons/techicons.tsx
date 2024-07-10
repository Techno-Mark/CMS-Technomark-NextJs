import React, { useEffect, useState } from 'react';
import styles from './techicons.module.css'
import Image from 'next/image';

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
        {props?.data?.map((item: any, index: any) => {
          return(
          <li key={index}>
            <Image src={item.src} alt={item.alt} width={48} height={48} className="w-16 h-16 mx-auto" />
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
