import React from "react";
import styles from "./methodologybox.module.css";

interface MethodologyBoxProps {
  heading?: string;
  subHeading?: string;
  description?: string;
  flipText?: string;
}

const MethodologyBox = ({ data }: any) => {
  return (
    <div className="flex flex-wrap">
      {data.map((card: MethodologyBoxProps, index: number) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/4 ${styles.flipcard}`}
        >
          <div className={styles.inner}>
            <div className={styles.front}>
              <h3>{card?.heading || ""}</h3>
              <h5 className={styles.cardtitle}>{card?.subHeading || ""}</h5>
              <p className={styles.cardtext}>{card?.description || ""}</p>
            </div>
            <div className={styles.back}>
              <ul
                className={styles.successratiobox}
                dangerouslySetInnerHTML={{
                  __html: card?.flipText || "",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MethodologyBox;
