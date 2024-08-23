import React from "react";
import styles from "./casestudydetail.module.css";
import Image from "next/image";

interface BenefitItem {
  items: {
    icon?: string;
    label?: string;
    value?: string;
  }[];
}

interface PerformanceItem {
  items: {
    title?: string;
    description?: string;
  }[];
}

interface CaseStudyDetailProps {
  data: {
    Benefits?: BenefitItem[];
    Performances?: PerformanceItem[];
    performanceImage?: string;
  }[];
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ data = [] }) => {
  const benefits = data.find((item) => item.Benefits)?.Benefits || [];
  const performances =
    data.find((item) => item.Performances)?.Performances || [];
  const performanceImage =
    data.find((item) => item.performanceImage)?.performanceImage || "";

  return (
    <div className="case-study-detail">
      <div className={styles.resourcestripe}>
        <ul className="flex flex-wrap justify-center items-center">
          {benefits.map((benefitItem, index) => {
            const icon =
              benefitItem.items.find((subItem) => subItem.icon)?.icon || "";
            const label =
              benefitItem.items.find((subItem) => subItem.label)?.label || "";
            const value =
              benefitItem.items.find((subItem) => subItem.value)?.value || "";

            return (
              <li key={index} className="flex items-center">
                <Image src={icon} alt={label} height={32} width={32} />
                <b>{label}</b>
                <p>{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="performance-section">
        <div className="flex flex-wrap lg:flex-nowrap items-stretch">
          <div className="w-full lg:w-[30%] flex flex-col items-center justify-center">
            {performances.map((performanceItem, index) => {
              const title =
                performanceItem.items.find((subItem) => subItem.title)?.title ||
                "";
              const description =
                performanceItem.items.find((subItem) => subItem.description)
                  ?.description || "";

              return (
                <div
                  key={index}
                  className={`${styles.performancebox} flex-grow !p-0`}
                >
                  <div className="flex flex-col gap-4 items-center justify-center h-full">
                    <h2>{title}</h2>
                    <p className="text-center">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-[70%] flex">
            <div className={`${styles.performanceimg} w-full`}>
              <Image
                src={performanceImage}
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
