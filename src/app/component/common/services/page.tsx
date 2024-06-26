import React from 'react';
import styles from './services.module.css';

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

const Services: React.FC<ServicesProps> = ({ props }: any) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {props[0]?.data?.map((service: any, index: any) => (
        <div
          key={index}
          className={`w-full md:w-1/2 lg:w-1/4 ` }
        >
          <div className={`${styles.servicesbox}  ${index < 4 ? '!border-t-0' : ''} ${(index + 1) % 4 === 0 ? styles.servicerightborder : ''}`}>
            <div className={styles.servicesinnerbox}>
              <div className={styles.icon}>
                <img src={service.icon} alt={service.alt} />
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
