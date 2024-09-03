import Button from "@/components/common/button/button";
import TitleSection from "@/components/common/title/title";
import Image from "next/image";
import React from "react";
import styles from "./herosection.module.css";

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
}

const Herosection: React.FC<HeroSectionProps> = ({
  props,
  isTechnology,
  isTechStartup,
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
          <div className={`flex justify-center ${styles.herotechimg}`}>
            <Image
              src={props?.heroImage || ""}
              alt="hero image"
              height={160}
              width={160}
            />
          </div>
          <TitleSection
            sectionData={{
              title: props?.title || "",
              subtitle: props?.subTitle || "",
            }}
            titleClassName="techherosectiontitle"
          />
          <Button
            href={props?.buttonUrl || "#"}
            text={props?.buttonText || ""}
            variant="secondary"
          />
        </div>
      </>
    );
  }

  return (
    <div
      className={`container mx-auto ${styles.herocontainer} ${
        isTechStartup ? styles.techstartpcontainer : ""
      }`}
    >
      <div className="flex flex-wrap sm:flex-row flex-col-reverse items-center">
        <div className="w-full md:w-1/2">
          <p className={styles.label}>{props?.label || ""}</p>
          <TitleSection
            sectionData={{
              title: props?.title || "",
              subtitle: props?.subTitle || "",
            }}
            titleClassName="herosectiontitle"
          />
          {isTechStartup ? (
            <Button
              href={props?.buttonUrl || "#"}
              text={props?.buttonText || "Contact Now"}
              variant="secondary"
            />
          ) : (
            <Button
              href={props?.buttonUrl || "#"}
              text={props?.buttonText || "Get Free Consultation"}
              variant="primary"
            />
          )}
        </div>
        <div className="w-full md:w-1/2 relative">
          {isTechStartup && (
            <div className={styles.formcirlerotate}>
              <Image
                src="/images/animatecircle.png"
                alt="circle"
                width={250}
                height={250}
              />
            </div>
          )}
          <div className={styles.imagecontainer}>
            <Image
              src={props?.heroImage || ""}
              alt="Hero Image"
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
