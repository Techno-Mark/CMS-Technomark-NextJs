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
  props: HeroSectionItem[];
  isTechnology?: boolean;
  isTechStartup?: boolean;
}

const Herosection: React.FC<HeroSectionProps> = ({
  props,
  isTechnology,
  isTechStartup,
}) => {
  const findItem = (key: keyof HeroSectionItem) =>
    props.find((item) => item[key]);

  if (isTechnology) {
    return (
      <>
        <div className={styles.techimgcontainer}>
          <Image
            src={findItem("techImage")?.techImage || ""}
            alt=""
            width={1920}
            height={160}
          />
        </div>
        <div className={`container mx-auto ${styles.techherocontainer}`}>
          <div className={`flex justify-center ${styles.herotechimg}`}>
            <Image
              src={findItem("heroImage")?.heroImage || ""}
              alt="hero image"
              height={160}
              width={160}
            />
          </div>
          <TitleSection
            sectionData={{
              title: findItem("title")?.title || "",
              subtitle: findItem("subTitle")?.subTitle || "",
            }}
            titleClassName="techherosectiontitle"
          />
          <Button
            href={findItem("buttonUrl")?.buttonUrl || "#"}
            text={findItem("buttonText")?.buttonText || ""}
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
          <p className={styles.label}>{findItem("label")?.label || ""}</p>
          <TitleSection
            sectionData={{
              title: findItem("title")?.title || "",
              subtitle: findItem("subTitle")?.subTitle || "",
            }}
            titleClassName="herosectiontitle"
          />
          {isTechStartup ? (
            <Button
              href={findItem("buttonUrl")?.buttonUrl || "#"}
              text={findItem("buttonText")?.buttonText || "Contact Now"}
              variant="secondary"
            />
          ) : (
            <Button
              href={findItem("buttonUrl")?.buttonUrl || "#"}
              text={
                findItem("buttonText")?.buttonText || "Get Free Consultation"
              }
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
              src={findItem("heroImage")?.heroImage || ""}
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
