import React from "react";
import styles from "./homesection.module.css";
import Image from "next/image";
import TypeingTexts from "@/components/common/typeingtexts/TypeingTexts";
import Button from "@/components/common/button/button";

interface HomeSectionProps {
  sectionData?: any;
}

const Homesection: React.FC<HomeSectionProps> = ({ sectionData }) => {
  return (
    <>
      <section className={styles.newhomesection} id="new-home-section">
        <div className={styles.homevideo}>
          <video className="video" loop autoPlay muted>
            <source
              src={
                sectionData.find((item: any) => item.backgroundVideo)
                  ? sectionData.find((item: any) => item.backgroundVideo)
                      .backgroundVideo
                  : "/images/hero.mp4"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className={`${styles.hometext} mx-auto max-w-2xl`}>
          <h1 className={styles.maintitle}>
            {sectionData.find((item: any) => item.headingText)
              ? sectionData.find((item: any) => item.headingText).headingText
              : ""}
          </h1>
          <TypeingTexts
            props={sectionData
              .find((item: any) => item["Services Change text"])
              ?.["Services Change text"].map(
                (entry: any) =>
                  entry.items.find((item: any) => item.headingText).headingText
              )}
          />
          <Button
            href="#"
            text={
              sectionData.find((item: any) => item.ctaText)
                ? sectionData.find((item: any) => item.ctaText).ctaText
                : ""
            }
            variant="primary"
          />
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
