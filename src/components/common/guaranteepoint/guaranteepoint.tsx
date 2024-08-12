// components/GuaranteePoints/GuaranteePoints.tsx
import React from "react";
import styles from "./GuaranteePoints.module.css";
import Image from "next/image";

interface guarantee {
  title: string;
  description: string;
}

interface guaranteeProps {
  props?: any;
  isProblemStatement?: boolean; // Optional flag
}

const commonIcon = "/images/check-circle.png";
const commonAltText = "check";

const GuaranteePoints: React.FC<guaranteeProps> = ({
  props,
  isProblemStatement,
}) => {
  return (
    <>
      {props?.map((point: any, index: number) => (
        <div
          key={index}
          className={`${styles.iconTextArea} ${
            isProblemStatement ? styles.problemStatement : ""
          }`}
        >
          <div className={styles.inlineIcon}>
            <div className={styles.checkicon}>
              <Image
                src={commonIcon}
                alt={commonAltText}
                height={24}
                width={24}
              />
            </div>
            <h4>
              {point.items.find((item: any) => item.title)
                ? point.items.find((item: any) => item.title).title
                : ""}
            </h4>
          </div>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: point.items.find((item: any) => item.description)
                ? point.items.find((item: any) => item.description).description
                : "",
            }}
          />
        </div>
      ))}
    </>
  );
};

export default GuaranteePoints;
