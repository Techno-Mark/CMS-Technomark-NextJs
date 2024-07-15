import React from 'react';
import Image from 'next/image';
import styles from './techexpert.module.css';
import TitleSection from "@/components/common/title/title";

interface Expertise {
  text: string;
}

interface TechExpertProps {
  props: {
    title: string;
    Image: string;
    expertiseList: Expertise[];
  };
}

const TechExpert: React.FC<TechExpertProps> = ({ props }) => {
  return (
    <div className={`container mx-auto ${styles.expertContainer}`}>
      <div className="flex flex-wrap sm:flex-row flex-col items-center">
        <div className={`w-full md:w-1/2 ${styles.expertdetails}`}>
          <TitleSection
            sectionData={{
              title: props.title,
              subtitle: '',
            }}
            titleClassName="techexperttitle"
          />
          <div className={styles.expertvector}>
            <Image src={props.Image} alt="Expert Image" width={900} height={900} />
          </div>
        </div>
        <div className="w-full md:w-1/2">
            {props.expertiseList.map((expertise, index) => (
              <div key={index} className={styles.expertlistbox}>
                <Image src="/images/tick-circle.svg" alt="tick" height={45} width={45}/>
                <p>{expertise.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechExpert;
