import React from "react";
import styles from "./hiredeveloper.module.css";
import Image from "next/image";

interface HireDeveloperProps {
  props: any;
}

const HireDeveloper: React.FC<HireDeveloperProps> = ({ props }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {props
        .find((item: any) => item["Developer Card"])
        ?.["Developer Card"].map((developer: any, index: number) => (
          <div key={index} className="w-full md:w-1/2 2xl:w-1/3 p-4">
            <div className={`${styles.devTimeBox}`}>
              <div className={styles.devloperimg}>
                <Image
                  src={
                    developer.items.find((item: any) => item.image)
                      ? developer.items.find((item: any) => item.image).image
                      : ""
                  }
                  alt=""
                  width={125}
                  height={105}
                />
              </div>
              <h2>
                {developer.items.find((item: any) => item.type)
                  ? developer.items.find((item: any) => item.type).type
                  : ""}
              </h2>
              <p>
                {developer.items.find((item: any) => item.hours)
                  ? developer.items.find((item: any) => item.hours).hours
                  : ""}
              </p>
              <ul className="list-none">
                {developer.items.find((item: any) => item.details) &&
                  developer.items
                    .find((item: any) => item.details)
                    .details.split(",")
                    .map((detail: any, detailIndex: number) => (
                      <li key={detailIndex} className="flex items-center my-2">
                        <Image
                          src="/images/arrow-right-resource.png"
                          height={26}
                          width={26}
                          alt="arrow"
                          className="mr-2"
                        />
                        <p>{detail}</p>
                      </li>
                    ))}
              </ul>
              <a
                href={
                  developer.items.find((item: any) => item.buttonUrl)
                    ? developer.items.find((item: any) => item.buttonUrl)
                        .buttonUrl
                    : ""
                }
                className={`${styles.roundedBtn} rounded-btn btn-w-100`}
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

export default HireDeveloper;
