import React, { useEffect, useState } from "react";
import Homesection from "@/components/homesection/HomeSection";
import TectStartupBg from "@/components/tech-startup-bg/tect-startup-bg";
import TitleSection from "@/components/common/title/title";
import MethodologyBox from "@/components/common/methodologybox/methodologybox";
import Services from "@/components/common/services/services";
import CaseStudy from "@/components/common/casestudy/casestudy";
import TechIcons from "@/components/common/techicons/techicons";
import GuaranteePoints from "@/components/common/guaranteepoint/guaranteepoint";
import Video from "@/components/common/video/video";
import Client from "@/components/common/client/client";
import Achievement from "@/components/common/achievement/achievement";
import Faq from "@/components/common/Faq/faq";
import Singleaward from "@/components/common/singleaward/singleaward";
import FormSection from "@/components/common/formsection/formsection";
import CaseStudyList from "@/components/common/CasestudyList/CasestudyList";
import CaseStudyDetail from "@/components/common/casestudydetail/casestudydetail";
import ScreenSlider from "@/components/common/screenslider/screenslider";
import Challenges from "@/components/common/Challenges/Challenges";
import Herosection from "@/components/common/herosection/herosection";
import ProductSolutions from "@/components/common/productsolutions/productsolutions";
import TechSlider from "@/components/common/techslider/techslider";
import TechService from "@/components/common/techservice/techservice";
import TechExpert from "@/components/common/techexpert/techexpert";
import TechBenifits from "@/components/common/techbenifits/techbenifits";
import HireDeveloper from "@/components/common/hiredeveloper/hiredeveloper";
import Loading from "@/components/common/loading/loading";
import Image from "next/image";
import styles from "./home.module.css";
import { usePathname, useSearchParams } from "next/navigation";

interface HomeProps {
  sectionsOrder: string[];
  homeSection: any;
  techstartup: any;
  methodology?: any;
  services?: any;
  casestudy?: any;
  techIcons?: any;
  guarantee?: any;
  client?: any;
  achievement?: any;
  faq?: any;
  awards?: any;
  formsection?: any;
  casestudylist?: any;
  videosection?: any;
  casestudydetailherosection?: any;
  businessimpact?: any;
  problemstatement?: any;
  projectscreens?: any;
  Challengessolutions?: any;
  majorscreen?: any;
  features?: any;
  productherosection?: any;
  productservices?: any;
  productsolutions?: any;
  technologyhomesection?: any;
  techslider?: any;
  techservices?: any;
  technenifits?: any;
  hiredeveloper?: any;
  singletechservices?: any;
  techexpert?: any;
  props: any;
}

const DataComponent = ({
  maindata,
  caseStudy,
  hlsCaseStudyDetails,
  airattixCaseStudyDetails,
  givsumCaseStudyDetails,
  services,
  technology,
}: {
  maindata: HomeProps;
  caseStudy: HomeProps;
  hlsCaseStudyDetails: HomeProps;
  airattixCaseStudyDetails: HomeProps;
  givsumCaseStudyDetails: HomeProps;
  services: HomeProps;
  technology: HomeProps;
}) => {
  const pathName: any = usePathname();
  const searchParams = useSearchParams();
  const [homeData, setHomeData] = useState<any>();

  const client = searchParams.get("client");

  const fullPathWithParams = client ? `${pathName}?client=${client}` : pathName;
  console.log(
    fullPathWithParams,
    maindata,
    caseStudy,
    hlsCaseStudyDetails,
    airattixCaseStudyDetails,
    givsumCaseStudyDetails,
    services,
    technology
  );
  useEffect(() => {
    if (fullPathWithParams === "/home") {
      setHomeData(maindata);
    } else if (fullPathWithParams === "/casestudylist") {
      setHomeData(caseStudy);
    } else if (fullPathWithParams === "/casestudydetail?client=HLS") {
      setHomeData(hlsCaseStudyDetails);
    } else if (fullPathWithParams === "/casestudydetail?client=Airattix") {
      setHomeData(airattixCaseStudyDetails);
    } else if (fullPathWithParams === "/casestudydetail?client=Givsum") {
      setHomeData(givsumCaseStudyDetails);
    } else if (fullPathWithParams === "/services") {
      setHomeData(services);
    } else if (fullPathWithParams === "/technology") {
      setHomeData(technology);
    }
  }, [fullPathWithParams]);

  const renderSection = (sectionName: string, sectionData: any) => {
    switch (sectionName) {
      case "herosections":
        return sectionData && <Homesection sectionData={sectionData} />;
      case "techstartup":
        return sectionData && <TectStartupBg sectionData={sectionData} />;
      case "methodology":
        return (
          sectionData && (
            <section className={`${styles.methodology} tm-section bg-white`}>
              <div className={styles.leftbubblecircle}>
                <Image
                  src="/images/gradient-bubble.svg"
                  alt="bubble"
                  height={850}
                  width={850}
                />
              </div>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.headingText)
                      ? sectionData.find((item: any) => item.headingText)
                          .headingText
                      : "",
                    subtitle: sectionData.find(
                      (item: any) => item.subDescriptionText
                    )
                      ? sectionData.find((item: any) => item.subDescriptionText)
                          .subDescriptionText
                      : "",
                  }}
                  titleClassName="methodologytitle"
                />
                <MethodologyBox
                  props={
                    sectionData.find((item: any) => item.Card)
                      ? sectionData.find((item: any) => item.Card).Card
                      : []
                  }
                />
              </div>
            </section>
          )
        );
      // case "services":
      //   return (
      //     homeData?.services && (
      //       <section className={`${styles.coreservices} tm-section`}>
      //         <div className="container mx-auto">
      //           <TitleSection
      //             sectionData={{
      //               title: homeData.services[0].title,
      //               subtitle: homeData.services[0].subtitle,
      //             }}
      //             titleFirst={false}
      //             titleClassName="servicestitle"
      //           />
      //           <Services props={homeData.services[0]} />
      //         </div>
      //       </section>
      //     )
      //   );
      case "casestudy":
        return (
          sectionData && (
            <section
              className={`${styles.casestudiessection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="casestudytitle"
                />
                <CaseStudy
                  props={
                    sectionData.find((item: any) => item.Data)
                      ? sectionData.find((item: any) => item.Data).Data
                      : []
                  }
                />
              </div>
            </section>
          )
        );
      case "techIcons":
        return (
          sectionData && (
            <section className={`${styles.meetdiverse} tm-section`}>
              <div className={styles.rightbubblecircle}>
                <Image
                  src="/images/gradient-bubble.svg"
                  alt="bubble"
                  width={850}
                  height={850}
                />
              </div>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subtitle)
                      ? sectionData.find((item: any) => item.subtitle).subtitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="meetdivresetitle"
                />
                <TechIcons
                  props={
                    sectionData.find((item: any) => item.Icons)
                      ? sectionData.find((item: any) => item.Icons).Icons
                      : []
                  }
                />
              </div>
            </section>
          )
        );
      case "guarantee":
        return (
          sectionData && (
            <section className={`${styles.guaranteetmsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.heading)
                      ? sectionData.find((item: any) => item.heading).heading
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="guaranteetitle"
                />
                <div className="flex flex-wrap">
                  <div className="pb-10 lg:w-1/2 md:w-full md:pb-0">
                    <div className={styles.videoarea}>
                      <video loop autoPlay muted>
                        <source
                          src={
                            sectionData.find((item: any) => item.image)
                              ? sectionData.find((item: any) => item.image)
                                  .image
                              : "/images/Case-study.mp4"
                          }
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="lg:w-1/2 md:w-full pl-10 flex flex-col items-center justify-center">
                    <GuaranteePoints
                      props={
                        sectionData.find((item: any) => item.RightText)
                          ? sectionData.find((item: any) => item.RightText)
                              .RightText
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "videosection":
        return (
          sectionData && (
            <section
              className={`w-full overflow-hidden ${styles.videoSection}`}
            >
              <Video props={sectionData} />
            </section>
          )
        );
      case "clientspeak":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-white`}
            >
              <Image
                className={styles.clientcurve}
                src="/images/client-shape.png"
                alt="shape"
                height={1060}
                width={1930}
              />
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <Client
                  props={
                    sectionData.find((item: any) => item.Data)
                      ? sectionData.find((item: any) => item.Data).Data
                      : []
                  }
                />
              </div>
            </section>
          )
        );
      case "achievement":
        return (
          sectionData && (
            <section className={`${styles.trustsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="achievementtitle"
                />
                <Achievement
                  props={
                    sectionData.find((item: any) => item.Data)
                      ? sectionData.find((item: any) => item.Data).Data
                      : ""
                  }
                />
              </div>
            </section>
          )
        );
      case "frequentlyAskedQuestions":
        return (
          sectionData && (
            <section className={`${styles.faqsection} tm-section`}>
              <div className={styles.leftbubblecircle}>
                <Image
                  src="/images/gradient-bubble.svg"
                  alt="bubble"
                  height={850}
                  width={850}
                />
              </div>
              <div className="container mx-auto relative z-10">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <TitleSection
                      sectionData={{
                        title: sectionData.find((item: any) => item.heading)
                          ? sectionData.find((item: any) => item.heading)
                              .heading
                          : "",
                        subtitle: "",
                      }}
                      titleFirst={true}
                      titleClassName="faqtitle"
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <Faq
                      props={
                        sectionData.find(
                          (item: any) => item["Question Answers"]
                        )?.["Question Answers"]
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "awardsRecognition":
        return (
          sectionData && (
            <section className={`${styles.awardsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.heading)
                      ? sectionData.find((item: any) => item.heading).heading
                      : "",
                    subtitle: "",
                  }}
                  titleFirst={true}
                  titleClassName="awardtitle"
                />
                <Singleaward
                  props={
                    sectionData.find((item: any) => item["Award icons"])
                      ? sectionData.find((item: any) => item["Award icons"])?.[
                          "Award icons"
                        ]
                      : []
                  }
                />
              </div>
            </section>
          )
        );
      case "formsection":
        return (
          sectionData && (
            <section className={`${styles.formsection} tm-section bg-white`}>
              <div className="container mx-auto">
                <FormSection props={sectionData} />
              </div>
            </section>
          )
        );
      case "casestudylist":
        return (
          sectionData && (
            <section className={`${styles.casestudylist} tm-section bg-white`}>
              <div className="container mx-auto">
                <p className={styles.casestudylistlabel}>
                  {sectionData.find((item: any) => item.label)
                    ? sectionData.find((item: any) => item.label).label
                    : ""}
                </p>
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subtitle)
                      ? sectionData.find((item: any) => item.subtitle).subtitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="casestudylisttitle"
                />
                <CaseStudyList props={sectionData} />
              </div>
            </section>
          )
        );
      case "casestudydetailherosection":
        return (
          sectionData && (
            <section
              className={`${styles.casestudydetailherosection} tm-section`}
            >
              <div className="container mx-auto">
                <p className={styles.casestudydetaillabel}>
                  {sectionData.find((item: any) => item.label)
                    ? sectionData.find((item: any) => item.label).label
                    : ""}
                </p>
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="casestudydetailtitle"
                />
                <CaseStudyDetail props={sectionData} />
              </div>
            </section>
          )
        );
      case "businessimpact":
        return (
          sectionData && (
            <section className={`${styles.businessimpactsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="businessimpacttitle"
                />
              </div>
            </section>
          )
        );
      // case "problemstatement":
      //   return (
      //     homeData?.problemstatement && (
      //       <section
      //         className={`${styles.problemstatement} tm-section bg-white`}
      //       >
      //         <div className="container mx-auto">
      //           <div className="flex flex-wrap">
      //             <div className="w-full md:w-1/4">
      //               <TitleSection
      //                 sectionData={{
      //                   title: homeData.problemstatement.title,
      //                 }}
      //                 titleFirst={true}
      //                 titleClassName="problemstatementtitle"
      //               />
      //             </div>
      //             <div className="w-full md:w-3/4">
      //               <GuaranteePoints
      //                 props={homeData.problemstatement}
      //                 isProblemStatement={true}
      //               />
      //             </div>
      //           </div>
      //         </div>
      //       </section>
      //     )
      //   );
      case "projectscreens":
        return (
          sectionData && (
            <section className={`${styles.projectscreen} bg-white`}>
              <div className="container mx-auto">
                <ScreenSlider
                  props={
                    sectionData.find((item: any) => item.Images)
                      ? sectionData.find((item: any) => item.Images).Images
                      : []
                  }
                  useSlider1={true}
                />
              </div>
            </section>
          )
        );
      case "challengessolutions":
        return (
          sectionData && (
            <section
              className={`${styles.challangesolutions} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                  }}
                  titleClassName="Challengessolutionstitle"
                />
                <Challenges
                  props={
                    sectionData.find(
                      (item: any) => item["Resource Solutions"]
                    )?.["Resource Solutions"]
                  }
                />
              </div>
            </section>
          )
        );
      case "majorscreen":
        return (
          sectionData && (
            <section
              className={`${styles.majorscreensection} tm-section majorscreensection`}
            >
              <div className="container mx-auto">
                <ScreenSlider
                  props={
                    sectionData.find((item: any) => item.Images)
                      ? sectionData.find((item: any) => item.Images).Images
                      : []
                  }
                  useSlider1={false}
                />
              </div>
            </section>
          )
        );
      case "keyfeatures":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subtitle)
                      ? sectionData.find((item: any) => item.subtitle).subtitle
                      : "",
                  }}
                  titleFirst={
                    fullPathWithParams === "/technology" ? true : false
                  }
                  titleClassName="featurestitle"
                />
                {fullPathWithParams === "/casestudydetail?client=Airattix" ||
                fullPathWithParams === "/casestudydetail?client=Givsum" ||
                fullPathWithParams === "/casestudydetail?client=HLS" ? (
                  <Services
                    props={
                      sectionData.find((item: any) => item.Data)
                        ? sectionData.find((item: any) => item.Data).Data
                        : ""
                    }
                  />
                ) : (
                  <Services
                    props={
                      sectionData.find((item: any) => item.Data)
                        ? sectionData.find((item: any) => item.Data).Data
                        : ""
                    }
                    isProduct={true}
                  />
                )}
              </div>
            </section>
          )
        );
      case "productherosection":
        return (
          sectionData && (
            <section
              className={`${styles.prodcutherosection} tm-section bg-white`}
            >
              <Herosection props={sectionData} />
            </section>
          )
        );
      // case "productservices":
      //   return (
      //     homeData?.productservices && (
      //       <section className={`${styles.productservices} tm-section`}>
      //         <div className="container mx-auto">
      //           <TitleSection
      //             sectionData={{
      //               title: homeData.productservices.title,
      //               subtitle: homeData.productservices.subtitle,
      //             }}
      //             titleFirst={false}
      //             titleClassName="servicestitle"
      //           />
      //           <Services props={homeData.productservices} isProduct={true} />
      //         </div>
      //       </section>
      //     )
      //   );
      case "productsolutions":
        return (
          sectionData && (
            <section
              className={`${styles.productsolutions} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <ProductSolutions props={sectionData} />
              </div>
            </section>
          )
        );
      case "technologyhomesection":
        return (
          sectionData && (
            <>
              <section
                className={`${styles.technologyhomesection} tm-section bg-white`}
              >
                {/* <img src={homeData.technologyhomesection.techimage} alt="" /> */}
                <Herosection props={sectionData} istechnology={true} />
              </section>
            </>
          )
        );
      case "techslider":
        return (
          sectionData && (
            <section className={`${styles.techslider} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="techslidertitle"
                />
                <TechSlider props={sectionData} />
              </div>
            </section>
          )
        );
      case "techservices":
        return (
          sectionData && (
            <section className={`${styles.techservices} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.find((item: any) => item.title)
                      ? sectionData.find((item: any) => item.title).title
                      : "",
                    subtitle: sectionData.find((item: any) => item.subTitle)
                      ? sectionData.find((item: any) => item.subTitle).subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="techservicestitle"
                />
                <TechService props={sectionData} />
              </div>
            </section>
          )
        );
      case "techbenefits":
        return (
          sectionData && (
            <section className={`${styles.technenifits} bg-white tm-section`}>
              <TechBenifits props={sectionData} />
            </section>
          )
        );
      case "hiredeveloper":
        return (
          sectionData && (
            <section className={`${styles.hiredeveloper} tm-section bg-white`}>
              <div className="container mx-auto">
                <HireDeveloper props={sectionData} />
              </div>
            </section>
          )
        );
      // case "singletechservices":
      //   return (
      //     homeData?.singletechservices && (
      //       <section className={`${styles.singletechservices} tm-section`}>
      //         <div className="container mx-auto">
      //           <TitleSection
      //             sectionData={{
      //               title: homeData.singletechservices.title,
      //               subtitle: homeData.singletechservices.subtitle,
      //             }}
      //             titleFirst={true}
      //             titleClassName="servicestitle"
      //           />
      //           <Services
      //             props={homeData.singletechservices}
      //             istechservice={true}
      //           />
      //         </div>
      //       </section>
      //     )
      //   );
      case "techexpert":
        return (
          sectionData && (
            <section className={`${styles.techexpert} tm-section bg-white`}>
              <div className="container mx-auto">
                <TechExpert props={sectionData} />
              </div>
            </section>
          )
        );
      default:
        return null;
    }
  };
  console.log(homeData);
  return (
    <>
      {homeData ? (
        homeData.formatData.map((sectionName: any, index: number) => (
          <React.Fragment key={index}>
            {Object.entries(sectionName).map(([key, value]) => (
              <div key={key}>{renderSection(key, value)}</div>
            ))}
          </React.Fragment>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DataComponent;
