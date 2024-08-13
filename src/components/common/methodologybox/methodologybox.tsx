import React from "react";
import styles from "./methodologybox.module.css";

interface Detail {
  title: string;
  items?: string[];
}

interface methodology {
  cardNumber: string;
  title: string;
  description: string;
  details: (Detail | string)[];
}

interface MethodologyBoxProps {
  props?: {
    data: methodology[];
  };
}

const MethodologyBox: React.FC<MethodologyBoxProps> = ({ props }: any) => {
  return (
    <div className="flex flex-wrap">
      {props?.map((card: any, index: any) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/4 ${styles.flipcard}`}
        >
          <div className={styles.inner}>
            <div className={styles.front}>
              <h3>
                {card.items.find((item: any) => item.heading)
                  ? card.items.find((item: any) => item.heading).heading
                  : ""}
              </h3>
              <h5 className={styles.cardtitle}>
                {card.items.find((item: any) => item.subHeading)
                  ? card.items.find((item: any) => item.subHeading).subHeading
                  : ""}
              </h5>
              <p className={styles.cardtext}>
                {card.items.find((item: any) => item.description)
                  ? card.items.find((item: any) => item.description).description
                  : ""}
              </p>
            </div>
            <div className={styles.back}>
              <ul
                className={styles.successratiobox}
                dangerouslySetInnerHTML={{
                  __html: card.items.find((item: any) => item.flipText)
                    ? card.items.find((item: any) => item.flipText).flipText
                    : "",
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
