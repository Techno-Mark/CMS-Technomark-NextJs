import React, { useEffect, useState } from "react";
import styles from "./singleaward.module.css";
import Image from "next/image";

interface awards {
  src: string;
  alt: string;
}

interface awardsprops {
  props?: {
    data: awards[];
  };
}

const Singleaward: React.FC<awardsprops> = ({ props }: any) => {
  return (
    <div className="award-section">
      <ul className={styles.awardlist}>
        {props?.map((award: any, index: any) => (
          <li key={index}>
            <Image
              src={
                award.items.find((item: any) => item.iconImage)
                  ? award.items.find((item: any) => item.iconImage).iconImage
                  : ""
              }
              alt={index}
              width={107}
              height={107}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Singleaward;
