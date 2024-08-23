import React from "react";
import homeStyles from "./homesection.module.css";
import Image from "next/image";
import TypeingTexts from "@/components/common/typeingtexts/TypeingTexts";
import Button from "@/components/common/button/button";

interface HomeSectionProps {
  sectionData?: any;
}

const HomeSection: React.FC<HomeSectionProps> = ({ sectionData }) => {
  const backgroundVideo = sectionData.find((item: any) => item.backgroundVideo)?.backgroundVideo ?? "/images/hero.mp4";
  const headingText = sectionData.find((item: any) => item.headingText)?.headingText ?? "";
  const ctaText = sectionData.find((item: any) => item.ctaText)?.ctaText ?? "";
  const servicesChangeText = sectionData
    .find((item: any) => item["Services Change text"])
    ?.["Services Change text"].map(
      (entry: any) => entry.items.find((item: any) => item.headingText)?.headingText
    ) ?? [];

  return (
    <section className={homeStyles.newhomesection} id="new-home-section">
      <div className={homeStyles.homevideo}>
        <video className="video" loop autoPlay muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className={`${homeStyles.hometext} mx-auto max-w-2xl`}>
        <h1 className={homeStyles.maintitle}>{headingText}</h1>
        <TypeingTexts props={servicesChangeText} />
        <Button href="#" text={ctaText} variant="primary" />
        <div className={homeStyles.linearrow}>
          <Image src="/images/line-arrow.svg" alt="arrow" height={130} width={36} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
