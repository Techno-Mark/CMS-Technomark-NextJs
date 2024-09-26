import React from "react"
import Image from "next/image"
import TypeingTexts from "@/components/common/typeingtexts/TypeingTexts"
import Button from "@/components/common/button/button"

interface HomeSectionProps {
  sectionData?: any
  scrollToSection?: any
  formSectionRef: any
  techSectionRef: any
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
    <section
      className="relative h-[100vh] w-full overflow-hidden"
      // {homeStyles.newhomesection}
      id="new-home-section"
    >
      <div
        className="absolute top-0 left-0 w-full z-0"
        // {homeStyles.homevideo}
      >
        {!isVideoLoaded && (
          <Image
            src="/images/line-arrow.svg"
            alt="hero poster"
            layout="fill"
            objectFit="cover"
          />
        )}
        <video
          className="w-full h-[100vh] object-cover"
          // "video"
          loop
          autoPlay
          muted
          preload="metadata"
          onCanPlay={() => setIsVideoLoaded(true)}
          style={{
            display: isVideoLoaded ? "block" : "none",
            width: "100%",
            height: "auto"
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div
        className={`absolute left-0 right-0 z-[1] top-1/2 transform translate-y-[-50%]`}
      >
        <div className="container">
          <h1 className="text-[2.8rem] font-semibold leading-[4rem] text-center text-white max-w-[700px] ml-auto mr-auto">
            {sectionData?.headingText || ""}
          </h1>
          <TypeingTexts props={servicesChangeText} />
          <Button
            onClick={() => scrollToSection(formSectionRef)}
            text={ctaText}
            variant="primary"
          />
          <div
            className={`flex justify-center mt-[30px] cursor-pointer`}
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
