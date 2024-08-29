import React from "react";
import styles from "./GuaranteePoints.module.css";
import Image from "next/image";

interface PointItem {
  title: string;
  description: string;
}

interface Point {
  items: PointItem[];
}

interface GuaranteePointsProps {
  props: Point[];
  isProblemStatement?: boolean;
}

const GuaranteePoints: React.FC<GuaranteePointsProps> = ({
  props,
  isProblemStatement,
}) => {
  return (
    <>
      {props?.map((point, index) => (
        <div
          key={index}
          className={`${styles.iconTextArea} ${
            isProblemStatement ? styles.problemStatement : ""
          }`}
        >
          <div className={styles.inlineIcon}>
            <div className={styles.checkicon}>
              <Image
                src="/images/check-circle.png"
                alt="check"
                height={24}
                width={24}
              />
            </div>
            <h4>
              {point.items.find((item) => item.title)?.title || ""}
            </h4>
          </div>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                point.items.find((item) => item.description)?.description ||
                "",
            }}
          />
        </div>
      ))}
    </>
  );
};

export default GuaranteePoints;
