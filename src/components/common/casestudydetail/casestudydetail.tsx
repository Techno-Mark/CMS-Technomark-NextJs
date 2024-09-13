import React from "react";
import styles from "./casestudydetail.module.css";
import Image from "next/image";

interface BenefitItem {
  icon?: string;
  label?: string;
  value?: string;
}

interface PerformanceItem {
  title?: string;
  description?: string;
}

interface CaseStudyDetailProps {
  label: string;
  title: string;
  benefits: BenefitItem[];
  subTitle: string;
  performances: PerformanceItem[];
  performanceImage: string;
}

const CaseStudyDetail = ({ data }: any) => {
  const firstItem = data || {};

  const benefits = firstItem.benefits || [];
  const performances = firstItem.performances || [];
  const performanceImage = firstItem.performanceImage || "";

  return (
    <div className="case-study-detail">
      <div className={styles.resourcestripe}>
        <ul className="flex flex-wrap justify-center items-center">
          {benefits.map((benefitItem: BenefitItem, index: number) => {
            const icon = benefitItem?.icon || "";
            const label = benefitItem?.label || "";
            const value = benefitItem?.value || "";

            return (
              <li
                key={index}
                className={`flex items-center ${
                  index !== 1 ? styles.img1 : styles.img2
                }`}
              >
                {icon && (
                  <Image src={icon} alt={label} height={32} width={32} />
                )}
                <b>{label}</b>
                <p>{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="performance-section">
        <div className="flex flex-wrap lg:flex-nowrap items-stretch">
          <div className="w-full lg:w-[30%] flex flex-col items-center text-center">
            {performances.map(
              (performanceItem: PerformanceItem, index: number) => {
                const title = performanceItem?.title || "";
                const description = performanceItem?.description || "";

                return (
                  <div
                    key={index}
                    className={`${styles.performancebox} ${
                      performances.length === index + 1 ? "" : "mb-[1.5rem]"
                    } flex-grow`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <h2>{title}</h2>
                      <p className="text-center">{description}</p>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="w-full mt-10 lg:mt-0 lg:w-[70%] flex">
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
