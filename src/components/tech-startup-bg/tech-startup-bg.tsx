import React from "react"
import techStyles from "./techstartupbg.module.css"
import Image from "next/image"
import Button from "../common/button/button"

interface TechStartupBgProps {
  sectionData: any;
}

const TechStartupBg: React.FC<TechStartupBgProps> = ({
  sectionData = { title: "", subTitle: "", isCaseStudy: false }
}) => {
  const isCaseStudy = sectionData?.isCaseStudy == "true"
  const title = sectionData?.title ?? ""
  const subTitle = sectionData?.subTitle ?? ""

  const containerClassNames = `bg-white flex flex-wrap ${
    techStyles.techsubcontainer
  } ${isCaseStudy ? `flex-col ${techStyles.techcasestudycontainer}` : ""}`

  return (
    <section
      className={`${techStyles.techstartupbg} tm-section`}
      id="techstartupbg"
    >
      <div className={techStyles.leftradientshape}>
        <Image
          src="/images/left-line-bg.svg"
          alt="left"
          height={600}
          width={1920}
        />
      </div>
      <div className={techStyles.rightradientshape}>
        <Image
          src="/images/right-line-bg.svg"
          alt="right"
          height={600}
          width={1920}
        />
      </div>
      <div className={`container mx-auto relative z-5 max-w-[1140px] w-[100%]`}>
        <div className={containerClassNames}>
          {isCaseStudy ? (
            // Case Study Detail Page Layout
            <div className={techStyles.casestudytech}>
              <div className="w-full">
                <h2
                  className={`maintitle !text-center ${techStyles.maintitle}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
              <div className="w-full">
                <p
                  className={`sub-title !text-center ${techStyles.subtitle}`}
                  dangerouslySetInnerHTML={{
                    __html: subTitle || ""
                  }}
                />
              </div>
            </div>
          ) : (
            // Default Home Page Layout
            <div className="flex items-center justify-center flex-col md:flex-row">
              <div className="lg:w-1/2 md:w-full px-4">
                <h2
                  className={`maintitle ${techStyles.maintitle} !text-center md:!text-left`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
              <div className="lg:w-1/2 md:w-full p-4">
                <p
                  className={`sub-title ${techStyles.subtitle} !text-center md:!text-left`}
                >
                  {subTitle}
                </p>
                <div className={`${techStyles.techbgbtn}`}>
                  <Button href="#" text="Read more" variant="secondary" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TechStartupBg
