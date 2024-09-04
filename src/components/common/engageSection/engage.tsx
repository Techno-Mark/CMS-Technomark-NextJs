import React from "react";
import styles from "./engage.module.css";
import Image from "next/image";

interface HireDeveloperProps {
  props: any;
  isengaged?: boolean;
}

const Engage: React.FC<HireDeveloperProps> = ({ props }) => {
  return (
    <div className={`flex flex-wrap justify-center ${styles.hireengaged}`}>
      {props?.card.map((developer: any, index: number) => (
        <div
          key={index}
          className={`w-full md:w-1/2 2xl:w-1/3 p-4 ${styles.cardWrapper}`}
        >
          <div className={`${styles.devTimeBox} flex flex-col`}>
            <div className={styles.devloperimg}>
              <Image
                src={!!developer.icon ? developer.icon : ""}
                alt=""
                width={125}
                height={105}
              />
            </div>
            <h2>{!!developer.title ? developer.title : ""}</h2>
            <p>{!!developer.subTitle ? developer.subTitle : ""}</p>
            <ul className="list-none flex-grow">
              <li className="flex items-center my-2 text-black">
                {!!developer.details && developer.details}
              </li>
            </ul>
            <a
              href={!!developer.buttonUrl ? developer.buttonUrl : ""}
              className={`${styles.roundedBtn} rounded-btn btn-w-100 mt-auto`}
            >
              {!!developer.buttonText ? developer.buttonText : ""}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Engage;
