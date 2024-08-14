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
  const title = props.find((item: any) => item.title)?.title || "";
  const subTitle = props.find((item: any) => item.subTitle)?.subTitle || "";
  const heroImage = props.find((item: any) => item.heroImage)?.heroImage || "";
  const benefits = props.find((item: any) => item.Benefits)?.Benefits || [];
  const buttonText =
    props.find((item: any) => item.buttonText)?.buttonText || "";
  const buttonUrl = props.find((item: any) => item.buttonUrl)?.buttonUrl || "#";
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
                    src={
                      benefit.items.find((item: any) => item.image)
                        ? benefit.items.find((item: any) => item.image).image
                        : ""
                    }
                    alt=""
                    width={36}
                    height={36}
                  />
                  <p>
                    {benefit.items.find((item: any) => item.text)
                      ? benefit.items.find((item: any) => item.text).text
                      : ""}
                  </p>
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
