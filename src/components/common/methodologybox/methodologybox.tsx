import React from "react";
import styles from "./methodologybox.module.css";

interface MethodologyBoxProps {
  data: {
    items: {
      heading?: string;
      subHeading?: string;
      description?: string;
      flipText?: string;
    }[];
    keyMultiple: number;
  }[];
}

const MethodologyBox: React.FC<MethodologyBoxProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap">
      {data.map((card, index) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/4 ${styles.flipcard}`}
        >
          <div className={styles.inner}>
            <div className={styles.front}>
              <h3>{card.items.find((item) => item.heading)?.heading || ""}</h3>
              <h5 className={styles.cardtitle}>
                {card.items.find((item) => item.subHeading)?.subHeading || ""}
              </h5>
              <p className={styles.cardtext}>
                {card.items.find((item) => item.description)?.description || ""}
              </p>
            </div>
            <div className={styles.back}>
              <ul
                className={styles.successratiobox}
                dangerouslySetInnerHTML={{
                  __html:
                    card.items.find((item) => item.flipText)?.flipText || "",
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
