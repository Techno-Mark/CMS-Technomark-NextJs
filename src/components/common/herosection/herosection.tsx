import Button from "@/components/common/button/button"
import Image from "next/image"
import React from "react"
import styles from "./herosection.module.css"

interface HeroSectionItem {
  label?: string;
  title?: string;
  subTitle?: string;
  techImage?: string;
  heroImage?: string;
  buttonUrl?: string;
  buttonText?: string;
}

interface HeroSectionProps {
  props: HeroSectionItem;
  isTechnology?: boolean;
  isTechStartup?: boolean;
  scrollToSection?: any;
  formSectionRef?: any;
}

const Herosection: React.FC<HeroSectionProps> = ({
  props,
  isTechnology,
  isTechStartup,
  scrollToSection,
  formSectionRef
}) => {
  if (isTechnology) {
    return (
      <>
        <div className={styles.techimgcontainer}>
          <Image
            src={props?.techImage || ""}
            alt=""
            width={1920}
            height={160}
          />
        </div>
        <div className={`container mx-auto ${styles.techherocontainer}`}>
          <div className={`flex justify-center`}>
            <Image
              src={props?.heroImage || ""}
              alt="hero image"
              height={160}
              width={160}
            />
          </div>
          <div className={`title-section mb-6 `}>
            <h1
              className={`${styles.maintitle} ${styles.maindarktitle} ${styles.maintitlespan} !mb-4`}
              dangerouslySetInnerHTML={{ __html: props?.title || "" }}
            />
            <p
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: props?.subTitle || "" }}
            />
          </div>
          <Button
            href={props?.buttonUrl || "#"}
            text={props?.buttonText || ""}
            variant="secondary"
          />
        </div>
      </>
    )
  }

  return (
    <div
      className={`container mx-auto ${
        isTechStartup ? styles.techstartpcontainer : styles.herocontainer
      }`}
    >
      <div className="flex flex-wrap sm:flex-row flex-col items-center">
        <div className="w-full md:w-1/2">
          {/* <p className={styles.label}>{props?.label || ""}</p> */}
          <div className={`title-section mb-6 herosectiontitle`}>
            <h1
              className={`${styles.maintitle} ${styles.maindarktitle} ${styles.maintitlespan} !mb-4`}
              dangerouslySetInnerHTML={{ __html: props?.title || "" }}
            />
            <p
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: props?.subTitle || "" }}
            />
          </div>
          <div className="w-fit mb-8 md:mb-0">
            {isTechStartup ? (
              <Button
                onClick={() => scrollToSection(formSectionRef)}
                text={props?.buttonText || "Contact Now"}
                // variant="secondary"
                variant="primary"
              />
            ) : (
              <Button
                onClick={() => scrollToSection(formSectionRef)}
                text={props?.buttonText || "Get Free Consultation"}
                variant="primary"
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          {/* {isTechStartup && (
            <div className={styles.formcirlerotate}>
              <Image
                src="/images/animatecircle.png"
                alt="circle"
                width={250}
                height={250}
              />
            </div>
          )} */}
          <div className={styles.imagecontainer}>
            <Image
              className="w-auto"
              src={props?.heroImage || ""}
              alt="Hero Image"
              width={500}
              height={700}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
