import React from 'react';
import styles from './casestudydetail.module.css'
import Image from 'next/image';

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
    performanceImage : string;
  };
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ props }) => {
 
    return (
    <div className="case-study-detail">
      <div className={styles.resourcestripe}>
          <ul className="flex flex-wrap justify-center items-center">
            {props.benefits.map((item, index) => (
              <li key={index} className='flex items-center'>
                  <Image src={item.icon} alt={item.label} height={32} width={32} />
                  <b>{item.label}</b>
                  <p>{item.value}</p>
              </li>
            ))}
          </ul>
      </div>
      <div className="performance-section">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              {props.performances.map((item, index) => (
                <div key={index} className={`${styles.performancebox}`}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-1/2">
              <div className={styles.performanceimg}>
                <Image src={props.performanceImage} alt="performance" className="w-full" height={700} width={920}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
