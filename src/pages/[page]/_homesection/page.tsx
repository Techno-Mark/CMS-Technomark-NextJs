import React from "react";
import styles from "./homesection.module.css";
import Image from "next/image";
import TypeingTexts from "@/components/common/typeingtexts/TypeingTexts";
import Button from "@/components/common/button/button";

interface SectionData {
  title?: string;
  subtitle?: string;
  typingtext: string[];
}

interface HomeSectionProps {
  sectionData?: SectionData; // Make sectionData optional
}

const isSectionData = (data: any): data is SectionData => {
  return (
    typeof data === "object" &&
    data !== null &&
    Array.isArray(data.typingtext) &&
    data.typingtext.every((item: any) => typeof item === "string")
  );
};

const Homesection: React.FC<HomeSectionProps> = ({
  sectionData = {} as SectionData,
}) => {
  const validSectionData = isSectionData(sectionData)
    ? sectionData
    : { title: "Title", typingtext: ["typing..."] };

  return (
    <>
      <section className={styles.newhomesection} id="new-home-section">
        <div className={styles.homevideo}>
          <video className="video" loop autoPlay muted>
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={`${styles.hometext} mx-auto max-w-2xl`}>
          <h1 className={styles.maintitle}>{validSectionData.title}</h1>
          <TypeingTexts props={validSectionData.typingtext} />
          <Button href="#" text="Book 30 MIN CALL" variant="primary" />
          <div className={styles.linearrow}>
            <Image
              src="/images/line-arrow.svg"
              alt="arrow"
              height={130}
              width={36}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homesection;
