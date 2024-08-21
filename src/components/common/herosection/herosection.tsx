import React from "react";
import Image from "next/image";
import TitleSection from "@/components/common/title/title";
import Button from "@/components/common/button/button";
import styles from "./herosection.module.css";

interface HeroSectionProps {
  props: any;
  istechnology?: boolean;
  istechstartup?: boolean;
}

const Herosection: React.FC<HeroSectionProps> = ({
  props,
  istechnology,
  istechstartup,
}) => {
  if (istechnology) {
    return (
      <>
        <div className={styles.techimgcontainer}>
          <Image
            src={
              props.find((item: any) => item.techImage)
                ? props.find((item: any) => item.techImage).techImage
                : ""
            }
            alt=""
            width={1920}
            height={160}
          />
        </div>
        <div className={`container mx-auto ${styles.techherocontainer}`}>
          <div className={`flex justify-center ${styles.herotechimg}`}>
            <Image
              src={
                props.find((item: any) => item.heroImage)
                  ? props.find((item: any) => item.heroImage).heroImage
                  : ""
              }
              alt="hero image"
              height={160}
              width={160}
            />
          </div>
          <TitleSection
            sectionData={{
              title: props.find((item: any) => item.title)
                ? props.find((item: any) => item.title).title
                : "",
              subtitle: props.find((item: any) => item.subTitle)
                ? props.find((item: any) => item.subTitle).subTitle
                : "",
            }}
            titleClassName="techherosectiontitle"
          />
          <Button
            href={
              props.find((item: any) => item.buttonUrl)
                ? props.find((item: any) => item.buttonUrl).buttonUrl
                : "#"
            }
            text={
              props.find((item: any) => item.buttonText)
                ? props.find((item: any) => item.buttonText).buttonText
                : ""
            }
            variant="secondary"
          />
        </div>
      </>
    );
  }

  return (
    <div
      className={`container mx-auto ${styles.herocontainer} ${
        istechstartup ? styles.techstartpcontainer : ""
      }`}
    >
      <div className="flex flex-wrap sm:flex-row flex-col-reverse items-center">
        <div className="w-full md:w-1/2">
          <p className={styles.label}>
            {props.find((item: any) => item.label)
              ? props.find((item: any) => item.label).label
              : ""}
          </p>
          <TitleSection
            sectionData={{
              title: props.find((item: any) => item.title)
                ? props.find((item: any) => item.title).title
                : "",
              subtitle: props.find((item: any) => item.subTitle)
                ? props.find((item: any) => item.subTitle).subTitle
                : "",
            }}
            titleClassName="herosectiontitle"
          />
          {istechstartup ? (
            <Button
              href={
                props.find((item: any) => item.buttonUrl)
                  ? props.find((item: any) => item.buttonUrl).buttonUrl
                  : "#"
              }
              text={
                props.find((item: any) => item.buttonText)
                  ? props.find((item: any) => item.buttonText).buttonText
                  : "Contact Now"
              }
              variant="secondary"
            />
          ) : (
            <Button
              href={
                props.find((item: any) => item.buttonUrl)
                  ? props.find((item: any) => item.buttonUrl).buttonUrl
                  : "#"
              }
              text={
                props.find((item: any) => item.buttonText)
                  ? props.find((item: any) => item.buttonText).buttonText
                  : "Get Free Consultation"
              }
              variant="primary"
            />
          )}
        </div>
        <div className="w-full md:w-1/2 relative">
          {istechstartup && (
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
              src={
                props.find((item: any) => item.heroImage)
                  ? props.find((item: any) => item.heroImage).heroImage
                  : ""
              }
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
