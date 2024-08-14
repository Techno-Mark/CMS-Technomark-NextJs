import React, { useEffect, useState } from "react";
import styles from "./techicons.module.css";
import Image from "next/image";

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

  return (
    <div className={styles.meetgridicon}>
      <ul>
        {props?.map((item: any, index: any) => {
          return (
            <li key={index}>
              <Image
                src={
                  item.items.find((item: any) => item.icon)
                    ? item.items.find((item: any) => item.icon).icon
                    : ""
                }
                alt={
                  item.items.find((item: any) => item.title)
                    ? item.items.find((item: any) => item.title).title
                    : ""
                }
                width={48}
                height={48}
                className="w-20 h-20 mx-auto"
              />
              <p>
                {item.items.find((item: any) => item.title)
                  ? item.items.find((item: any) => item.title).title
                  : ""}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechIcons;
