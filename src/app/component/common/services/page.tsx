import React from 'react';
import styles from './services.module.css';
import Image from 'next/image';

interface services {
  icon: string;
  text: string;
  description: string;
  alt: string;
}

interface ServicesProps {
  props?: {
    data: services[];
};
}

const Services: React.FC<any> = ({ props }: any) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {props?.data?.map((service: any, index: any) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/4 ` }
        >
          <div className={`${styles.servicesbox}  ${index < 4 ? '!border-t-0' : ''} ${(index + 1) % 4 === 0 ? styles.servicerightborder : ''}`}>
            <div className={styles.servicesinnerbox}>
              <div className={styles.icon}>
                <Image src={service.icon} alt={service.alt} height={30} width={33}/>
              </div>
              <h3 className={styles.servicetitle}>{service.text}</h3>
              <p className={styles.servicedescribe}>{service.description}</p>
              <div className={styles.moresection}>
                <a href="#">read more</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
