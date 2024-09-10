import React from "react";
import Image from "next/image";
import styles from "./techbenifits.module.css";
import TitleSection from "@/components/common/title/title";
import Button from "@/components/common/button/button";

interface BenefitProps {
  image: {
    src: string;
    alt: string;
  };
  text: string;
}

interface TechBenefitsProps {
  props: any;
}

const TechBenefits: React.FC<TechBenefitsProps> = ({ props }) => {
  const title = props?.title || "";
  const subTitle = props?.subTitle || "";
  const heroImage = props?.heroImage || "";
  const benefits = props?.benefits || [];
  const buttonText = props?.buttonText || "";
  const buttonUrl = props?.buttonUrl || "#";
  return (
    <div className={`container mx-auto ${styles.benifitContainer}`}>
      <div className="flex flex-wrap items-center">
        <div className={`w-full md:w-1/2 ${styles.benifitdetails}`}>
          <TitleSection
            sectionData={{
              title: title,
              subtitle: subTitle,
            }}
            titleClassName="techbenifitstitle"
          />
          <div className={`${styles.discussbtn}`}>
            <Button href={buttonUrl} text={buttonText} variant="secondary" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className={styles.imageContainer}
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className={styles.benefitListWrapper}>
              {benefits.map((benefit: any, index: number) => (
                <div key={index} className={styles.benefitListItem}>
                  <Image
                    src={!!benefit.image ? benefit.image : ""}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <p>{!!benefit.text ? benefit.text : ""}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechBenefits;
