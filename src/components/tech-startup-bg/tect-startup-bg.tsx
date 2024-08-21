import React from "react";
import styles from "./tectstartupbg.module.css";
import Image from "next/image";
import Button from "../common/button/button";

interface TectStartupBgProps {
  sectionData: any;
}

const TectStartupBg: React.FC<TectStartupBgProps> = ({
  sectionData = { title: "", subTitle: "", isCaseStudy: false },
}) => {
  const containerClassNames = `flex flex-wrap ${styles.techsubcontainer} ${
    sectionData.isCaseStudy ? `flex-col ${styles.techcasestudycontainer}` : ""
  }`;

  const safeTitle = sectionData.find((item: any) => item.title)
    ? sectionData.find((item: any) => item.title).title
    : "";

  return (
    <section
      className={`${styles.tectstartupbg} tm-section`}
      id="tectstartupbg"
    >
      <div className={styles.leftradientshape}>
        <Image
          src="/images/left-line-bg.svg"
          alt="left"
          height={600}
          width={1920}
        />
      </div>
      <div className={styles.rightradientshape}>
        <Image
          src="/images/right-line-bg.svg"
          alt="right"
          height={600}
          width={1920}
        />
      </div>
      <div className={` ${styles.container} mx-auto bg-white relative z-5`}>
        <div className={containerClassNames}>
          {sectionData.find((item: any) => item.isCaseStudy) &&
          (sectionData.find((item: any) => item.isCaseStudy).isCaseStudy ==
          "true") ? (
            // Case Study Detail Page Layout
            <div className={styles.casestudytech}>
              <div className="w-full">
                <h2
                  className={`maintitle !text-center ${styles.maintitle}`}
                  dangerouslySetInnerHTML={{ __html: safeTitle }}
                />
              </div>
              <div className="w-full">
                <p className={`sub-title !text-center ${styles.subtitle}`}>
                  {sectionData.find((item: any) => item.subTitle)
                    ? sectionData.find((item: any) => item.subTitle).subTitle
                    : ""}
                </p>
              </div>
            </div>
          ) : (
            // Default Home Page Layout
            <div className="flex items-center justify-center">
              <div className="lg:w-1/2 md:w-full">
                <h2
                  className={`maintitle ${styles.maintitle} `}
                  dangerouslySetInnerHTML={{ __html: safeTitle }}
                />
              </div>
              <div className="lg:w-1/2 md:w-full py-4">
                <p className={`sub-title ${styles.subtitle}`}>
                  {sectionData.find((item: any) => item.subTitle)
                    ? sectionData.find((item: any) => item.subTitle).subTitle
                    : ""}
                </p>
                <div className={styles.techbgbtn}>
                  <Button href="#" text="Read more" variant="secondary" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TectStartupBg;
