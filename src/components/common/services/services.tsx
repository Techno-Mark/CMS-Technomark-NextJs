import React from "react"
import styles from "./services.module.css"
import Image from "next/image"

interface ServiceItem {
  icon?: string;
  text?: string;
  description?: string;
  alt?: string;
}

interface ServicesProps {
  props: ServiceItem[];
  isFeatured?: boolean;
  isProduct?: boolean;
  istechservice?: boolean;
  iscontactservice?: boolean;
}

const Services: React.FC<ServicesProps> = ({
  props,
  isFeatured = false,
  isProduct = false,
  istechservice = false,
  iscontactservice = false
}) => {
  const services = props || []
  const columns = isFeatured ? 5 : isProduct || istechservice ? 3 : 4
  const totalItems = services.length

  const getClassName = () => {
    if (isFeatured) return styles.featureservices
    if (isProduct) return styles.productservices
    if (istechservice) return styles.techservices
    return styles.simpleservices
  }

  const getColumnClass = () => {
    if (columns === 5) return `w-1/2 md:w-1/5 ${styles.responsiveFiveBottomBorder}`
    if (columns === 4) return "w-full md:w-1/2 lg:w-1/4"
    if (columns === 3) return "w-full md:w-1/3"
  }

  const isLastRow = (index: number) =>
    index >= totalItems - (totalItems % columns || columns)
  const isLastColumn = (index: number) => (index + 1) % columns === 0
  // const itemsInLastRow = totalItems % columns || columns;

  return (
    <div className={`flex flex-wrap ${getClassName()}`}>
      {services.map((service, index) => {
        const icon = service?.icon || ""
        const text = service?.text || ""
        const description = service?.description || ""
        const alt = service?.alt || ""

        return (
          <div
            key={index}
            className={`${getColumnClass()} border-b md:border-r border-[var(--border-primary)] ${
              isLastColumn(index) ? "md:border-r-transparent" : ""
            } ${isLastRow(index) ? "md:border-b-transparent" : ""} ${
              styles.responsiveBottomBorder
            }`}
            // className={`${getColumnClass()} border-b md:border-r border-[var(--border-primary)] [&:nth-child(${columns}n)]:border-r-transparent [&:nth-last-child(-n+${itemsInLastRow})]:border-b-transparent [&:last-child]:border-b-transparent ${
            //   styles.responsiveBottomBorder
            // }`}
          >
            <div className={`${styles.servicesbox}`}>
              <div className={styles.servicesinnerbox}>
                {icon && (
                  <div className={styles.icon}>
                    <Image
                      src={icon}
                      alt={alt || text}
                      height={30}
                      width={33}
                    />
                  </div>
                )}
                <h3 className={styles.servicetitle}>{text}</h3>
                {!isFeatured && (
                  <p
                    className={`${styles.servicedescribe} ${
                      isProduct ? styles.textpadding : ""
                    }`}
                  >
                    {description}
                  </p>
                )}
                {!isFeatured &&
                  !istechservice &&
                  !isProduct &&
                  !iscontactservice && (
                    <div className={styles.moresection}>
                      <a href="#">read more</a>
                    </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Services
