import React from 'react';
import styles from './services.module.css';
import Image from 'next/image';

interface Service {
  icon: string;
  text: string;
  description: string;
  alt: string;
}

interface ServicesProps {
  props: {
    data: Service[];
  };
  isFeatured?: boolean;
}

const Services: React.FC<ServicesProps> = ({ props, isFeatured }) => {

  const services = props?.data || [];
  const columns = isFeatured ? 5 : 4;
  const totalItems = services.length;
  const rows = Math.ceil(totalItems / columns);

  return (
    <div className="flex flex-wrap -mx-4">
      {services.map((service: any, index: any) => {
        const isFirstRow = index < columns;
        const isRightMostColumn = (index + 1) % columns === 0;
        const isBottomBorder = index < (rows - 1) * columns;
        const isLastRow = index >= (rows - 1) * columns;

        return (
          <div
            key={index}
            className={`w-full ${isFeatured ? 'md:w-1/5' : 'md:w-1/2 lg:w-1/4'}`}
          >
            <div
              className={`${styles.servicesbox} ${!isFirstRow && !isLastRow ? '' : '!border-t-0'} ${
                isRightMostColumn ? styles.servicerightborder : ''
              } ${isBottomBorder && !isLastRow ? 'border-b border-gray-300' : ''}`}
            >
              <div className={styles.servicesinnerbox}>
                <div className={styles.icon}>
                  <Image src={service.icon} alt={service.alt} height={30} width={33} />
                </div>
                <h3 className={styles.servicetitle}>{service.text}</h3>
                {!isFeatured && <p className={styles.servicedescribe}>{service.description}</p>}
                {!isFeatured && (
                  <div className={styles.moresection}>
                    <a href="#">read more</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
