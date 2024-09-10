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

interface HireDeveloperProps {
  props: {
    developerCard: DeveloperItem[];
  };
  isengaged?: boolean;
}

const HireDeveloper: React.FC<HireDeveloperProps> = ({ props, isengaged }) => {
  const developerCards = !!props.developerCard ? props.developerCard : [];

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
                src={developer?.image || ""}
                alt="Developer Image"
                width={125}
                height={105}
              />
            </div>
            <h2>{developer?.type || ""}</h2>
            <p>{developer?.hours || ""}</p>
            <ul className="list-none">
              {developer?.details?.split(",").map((detail, detailIndex) => (
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
              href={developer?.buttonUrl || ""}
              className={`${styles.roundedBtn} rounded-btn btn-w-100`}
            >
              {developer?.buttonText || ""}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HireDeveloper;
