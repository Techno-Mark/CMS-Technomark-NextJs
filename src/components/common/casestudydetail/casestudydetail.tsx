import React from "react";
import styles from "./casestudydetail.module.css";
import Image from "next/image";

interface CaseStudyDetailProps {
  props: any;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ props }) => {
  return (
    <div className="case-study-detail">
      <div className={styles.resourcestripe}>
        <ul className="flex flex-wrap justify-center items-center">
          {props.find((item: any) => item.Benefits) &&
            props
              .find((item: any) => item.Benefits)
              .Benefits.map((benefitItem: any, index: number) => (
                <li key={index} className="flex items-center">
                  <Image
                    src={
                      benefitItem.items.find((subItem: any) => subItem.icon)
                        ? benefitItem.items.find((subItem: any) => subItem.icon)
                            .icon
                        : ""
                    }
                    alt={
                      benefitItem.items.find((subItem: any) => subItem.label)
                        ? benefitItem.items.find(
                            (subItem: any) => subItem.label
                          ).label
                        : ""
                    }
                    height={32}
                    width={32}
                  />
                  <b>
                    {benefitItem.items.find((subItem: any) => subItem.label)
                      ? benefitItem.items.find((subItem: any) => subItem.label)
                          .label
                      : ""}
                  </b>
                  <p>
                    {benefitItem.items.find((subItem: any) => subItem.value)
                      ? benefitItem.items.find((subItem: any) => subItem.value)
                          .value
                      : ""}
                  </p>
                </li>
              ))}
        </ul>
      </div>
      <div className="performance-section">
        <div className="flex flex-wrap lg:flex-nowrap items-stretch">
          <div className="w-full lg:w-[30%] flex flex-col items-center justify-center">
            {props.find((item: any) => item.Performances) &&
              props
                .find((item: any) => item.Performances)
                .Performances.map((performanceItem: any, index: number) => (
                  <div
                    key={index}
                    className={`${styles.performancebox} flex-grow !p-0`}
                  >
                    <div className="flex flex-col gap-4 items-center justify-center h-full">
                      <h2>
                        {performanceItem.items.find(
                          (subItem: any) => subItem.title
                        )
                          ? performanceItem.items.find(
                              (subItem: any) => subItem.title
                            ).title
                          : ""}
                      </h2>
                      <p className="text-center">
                        {performanceItem.items.find(
                          (subItem: any) => subItem.description
                        )
                          ? performanceItem.items.find(
                              (subItem: any) => subItem.description
                            ).description
                          : ""}
                      </p>
                    </div>
                  </div>
                ))}
          </div>

          <div className="w-full lg:w-[70%] flex">
            <div className={`${styles.performanceimg} w-full`}>
              <Image
                src={
                  props.find((item: any) => item.performanceImage)
                    ? props.find((item: any) => item.performanceImage)
                        .performanceImage
                    : ""
                }
                alt="performance"
                className="w-full h-full object-cover"
                height={573}
                width={920}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
