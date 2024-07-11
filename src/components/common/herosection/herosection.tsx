import React from "react";
import Image from "next/image";
import styles from "./herosection.module.css";
import TitleSection from "../title/title";
import Button from "../button/button";

interface HeroSectionProps {
  props: {
    label: string;
    title: string;
    subtitle: string;
    url: string;
    heroImage: string;
  };
}

const Herosection: React.FC<HeroSectionProps> = ({ props }) => {
  return (
    <div className={`container mx-auto ${styles.herocontainer}`}>
      <div className="flex flex-wrap sm:flex-row flex-col-reverse items-center">
        <div className="w-full md:w-1/2">
          <p className={styles.label}>{props.label}</p>
          <TitleSection
            sectionData={{
              title: props.title,
              subtitle: props.subtitle,
            }}
            titleClassName="herosectiontitle"
          />
          <Button
            href={props.url}
            text="Get Free Consultation"
            variant="primary"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className={styles.imagecontainer}>
            <Image
              src={props.heroImage}
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
