import React from "react";
import Image from "next/image";
import styles from "./hiredeveloper.module.css";

interface DeveloperItem {
  image?: string;
  type?: string;
  hours?: string;
  details?: string;
  buttonUrl?: string;
  buttonText?: string;
}

interface DeveloperCard {
  items: DeveloperItem[];
}

interface HireDeveloperProps {
  props: {
    "Developer Card": DeveloperCard[];
  };
  isengaged?: boolean;
}

const HireDeveloper: React.FC<HireDeveloperProps> = ({ props, isengaged }) => {
  const developerCards = props["Developer Card"] || [];

  return (
    <div
      className={`flex flex-wrap justify-center ${
        isengaged ? styles.hireengaged : ""
      }`}
    >
      {developerCards.map((developer, index) => (
        <div key={index} className="w-full md:w-1/2 2xl:w-1/3 p-4">
          <div className={styles.devTimeBox}>
            <div className={styles.devloperimg}>
              <Image
                src={developer.items.find((item) => item.image)?.image || ""}
                alt="Developer Image"
                width={125}
                height={105}
              />
            </div>
            <h2>{developer.items.find((item) => item.type)?.type || ""}</h2>
            <p>{developer.items.find((item) => item.hours)?.hours || ""}</p>
            <ul className="list-none">
              {developer.items
                .find((item) => item.details)
                ?.details?.split(",")
                .map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center my-2">
                    <Image
                      src="/images/arrow-right-resource.png"
                      height={26}
                      width={26}
                      alt="Arrow Icon"
                      className="mr-2"
                    />
                    <p>{detail}</p>
                  </li>
                ))}
            </ul>
            <a
              href={
                developer.items.find((item) => item.buttonUrl)?.buttonUrl || ""
              }
              className={`${styles.roundedBtn} rounded-btn btn-w-100`}
            >
              {developer.items.find((item) => item.buttonText)?.buttonText ||
                ""}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HireDeveloper;
