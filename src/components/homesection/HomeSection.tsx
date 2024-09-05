import React from "react";
import homeStyles from "./homesection.module.css";
import Image from "next/image";
import TypeingTexts from "@/components/common/typeingtexts/TypeingTexts";
import Button from "@/components/common/button/button";

interface HomeSectionProps {
  sectionData?: any;
  scrollToSection?: any;
  formSectionRef: any;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  sectionData,
  scrollToSection,
  formSectionRef,
}) => {
  const backgroundVideo = sectionData.backgroundVideo ?? "/images/hero.mp4";
  const headingText = sectionData.headingText ?? "";
  const ctaText = sectionData.ctaText ?? "";
  const servicesChangeText =
    sectionData?.servicesChargeText.map((entry: any) => entry.headingText) ??
    [];

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
        <Button
          onClick={() => scrollToSection(formSectionRef)}
          text={ctaText}
          variant="primary"
        />
        <div className={homeStyles.linearrow}>
          <Image
            src="/images/line-arrow.svg"
            alt="arrow"
            height={130}
            width={36}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
