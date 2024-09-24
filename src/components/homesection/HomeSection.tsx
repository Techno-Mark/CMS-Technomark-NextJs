import React from "react"
import homeStyles from "./homesection.module.css"
import Image from "next/image"
import TypeingTexts from "@/components/common/typeingtexts/TypeingTexts"
import Button from "@/components/common/button/button"

interface HomeSectionProps {
  sectionData?: any;
  scrollToSection?: any;
  formSectionRef: any;
  techSectionRef: any;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  sectionData,
  scrollToSection,
  formSectionRef,
  techSectionRef
}) => {
  const backgroundVideo = sectionData.backgroundVideo ?? "/images/hero.mp4"
  const ctaText = sectionData.ctaText ?? ""
  const servicesChangeText =
    sectionData?.servicesChargeText.map((entry: any) => entry.headingText) ??
    []

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)

  return (
    <section className={homeStyles.newhomesection} id="new-home-section">
      <div className={homeStyles.homevideo}>
      {!isVideoLoaded && (
        <Image
          src="/images/line-arrow.svg"
          alt="hero poster"
          layout="fill"
          objectFit="cover"
        />
      )}
        <video
          className="video"
          loop
          autoPlay
          muted
          preload="metadata"
          onCanPlay={() => setIsVideoLoaded(true)}
          style={{ display: isVideoLoaded ? 'block' : 'none', width: '100%', height: 'auto' }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className={`${homeStyles.hometext}`}>
        <div className="container">
          <h1 className={homeStyles.maintitle}>{sectionData?.headingText || ""}</h1>
          <TypeingTexts props={servicesChangeText} />
          <Button
            onClick={() => scrollToSection(formSectionRef)}
            text={ctaText}
            variant="primary"
          />
          <div
            className={`${homeStyles.linearrow} cursor-pointer`}
            onClick={() => scrollToSection(techSectionRef)}
          >
            <Image
              src="/images/line-arrow.svg"
              alt="arrow"
              height={130}
              width={36}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
