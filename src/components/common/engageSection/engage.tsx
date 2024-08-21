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
      {props
        .find((item: any) => item["Card"])
        ?.["Card"].map((developer: any, index: number) => (
          <div
            key={index}
            className={`w-full md:w-1/2 2xl:w-1/3 p-4 ${styles.cardWrapper}`}
          >
            <div className={`${styles.devTimeBox} flex flex-col`}>
              <div className={styles.devloperimg}>
                <Image
                  src={
                    developer.items.find((item: any) => item.icon)
                      ? developer.items.find((item: any) => item.icon).icon
                      : ""
                  }
                  alt=""
                  width={125}
                  height={105}
                />
              </div>
              <h2>
                {developer.items.find((item: any) => item.title)
                  ? developer.items.find((item: any) => item.title).title
                  : ""}
              </h2>
              <p>
                {developer.items.find((item: any) => item.subTitle)
                  ? developer.items.find((item: any) => item.subTitle).subTitle
                  : ""}
              </p>
              <ul className="list-none flex-grow">
                <li className="flex items-center my-2 text-black">
                  {developer.items.find((item: any) => item.details) &&
                    developer.items.find((item: any) => item.details).details}
                </li>
              </ul>
              <a
                href={
                  developer.items.find((item: any) => item.buttonUrl)
                    ? developer.items.find((item: any) => item.buttonUrl)
                        .buttonUrl
                    : ""
                }
                className={`${styles.roundedBtn} rounded-btn btn-w-100 mt-auto`}
              >
                {developer.items.find((item: any) => item.buttonText)
                  ? developer.items.find((item: any) => item.buttonText)
                      .buttonText
                  : ""}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Engage;
