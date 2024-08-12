import React from "react";
import styles from "./casestudydetail.module.css";
import Image from "next/image";

interface CaseStudyDetailProps {
  props: {
    label: string;
    title: string;
    subtitle: string;
    benefits: {
      icon: string;
      label: string;
      value: string;
    }[];
    performances: {
      title: string;
      description: string;
    }[];
    performanceImage: string;
  };
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ props }) => {
  return (
    <div className="case-study-detail">
      <div className={styles.resourcestripe}>
        <ul className="flex flex-wrap justify-center items-center">
          {props.benefits.map((item, index) => (
            <li key={index} className="flex items-center">
              <Image src={item.icon} alt={item.label} height={32} width={32} />
              <b>{item.label}</b>
              <p>{item.value}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="performance-section">
        <div className="flex flex-wrap lg:flex-nowrap items-stretch">
          <div className="w-full lg:w-[30%] flex flex-col items-center justify-center">
            {props.performances.map((item, index) => (
              <div key={index} className={`${styles.performancebox} flex-grow !p-0`}>
                <div className="flex flex-col gap-4 items-center justify-center h-full">
                  <h2>{item.title}</h2>
                  <p className="text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[70%] flex">
            <div className={`${styles.performanceimg} w-full`}>
              <Image
                src={props.performanceImage}
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
