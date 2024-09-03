import Loading from "@/components/common/loading/loading";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { lazy, useEffect, useState } from "react";
import styles from "./home.module.css";

const Homesection = lazy(() => import("@/components/homesection/HomeSection"));
const TechStartupBg = lazy(
  () => import("@/components/tech-startup-bg/tech-startup-bg")
);
const TitleSection = lazy(() => import("@/components/common/title/title"));
const MethodologyBox = lazy(
  () => import("@/components/common/methodologybox/methodologybox")
);
const Services = lazy(() => import("@/components/common/services/services"));
const CaseStudy = lazy(() => import("@/components/common/casestudy/casestudy"));
const TechIcons = lazy(() => import("@/components/common/techicons/techicons"));
const GuaranteePoints = lazy(
  () => import("@/components/common/guaranteepoint/guaranteepoint")
);
const Video = lazy(() => import("@/components/common/video/video"));
const Client = lazy(() => import("@/components/common/client/client"));
const Achievement = lazy(
  () => import("@/components/common/achievement/achievement")
);
const Faq = lazy(() => import("@/components/common/Faq/faq"));
const Singleaward = lazy(
  () => import("@/components/common/singleaward/singleaward")
);
const FormSection = lazy(
  () => import("@/components/common/formsection/formsection")
);
const CaseStudyList = lazy(
  () => import("@/components/common/CasestudyList/CasestudyList")
);
const CaseStudyDetail = lazy(
  () => import("@/components/common/casestudydetail/casestudydetail")
);
const ScreenSlider = lazy(
  () => import("@/components/common/screenslider/screenslider")
);
const Challenges = lazy(
  () => import("@/components/common/Challenges/Challenges")
);
const Herosection = lazy(
  () => import("@/components/common/herosection/herosection")
);
const ProductSolutions = lazy(
  () => import("@/components/common/productsolutions/productsolutions")
);
const TechSlider = lazy(
  () => import("@/components/common/techslider/techslider")
);
const TechService = lazy(
  () => import("@/components/common/techservice/techservice")
);
const TechExpert = lazy(
  () => import("@/components/common/techexpert/techexpert")
);
const TechBenifits = lazy(
  () => import("@/components/common/techbenifits/techbenifits")
);
const HireDeveloper = lazy(
  () => import("@/components/common/hiredeveloper/hiredeveloper")
);
const Engage = lazy(() => import("@/components/common/engageSection/engage"));
const ValueService = lazy(
  () => import("@/components/common/valueservice/valueservice")
);
const ContactFormSection = lazy(
  () => import("@/components/common/contactformsection/formsection")
);
const WorldMap = lazy(() => import("@/components/common/worldMap/worldMap"));
const BlogList = lazy(() => import("@/components/common/blogList/BlogList"));

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

const DataComponent = ({ data }: { data: HomeProps }) => {
  const pathName: any = usePathname();
  const [homeData, setHomeData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHomeData(data);
    setLoading(false);
  }, [pathName]);

  const renderSection = (sectionName: string, sectionData: any) => {
    switch (sectionName) {
      case "Hero Sections":
        return sectionData && <Homesection sectionData={sectionData} />;
      case "Tech Startup":
        return sectionData && <TechStartupBg sectionData={sectionData} />;
      case "Methodology":
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
                    title: !!sectionData.headingText
                      ? sectionData.headingText
                      : "",
                    subtitle: !!sectionData.subDescriptionText
                      ? sectionData.subDescriptionText
                      : "",
                  }}
                  titleClassName="methodologytitle"
                />
                <MethodologyBox
                  data={!!sectionData.card ? sectionData.card : []}
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
      case "Case Study":
        return (
          sectionData && (
            <section
              className={`${styles.casestudiessection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title || "",
                    subtitle:
                      sectionData.subTitle || sectionData.subtitle || "",
                  }}
                  titleFirst={true}
                  titleClassName="casestudytitle"
                />
                <CaseStudy props={!!sectionData.data ? sectionData.data : []} />
              </div>
            </section>
          )
        );
      case "Tech Icons":
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
                    title: sectionData.title,
                    subtitle: sectionData.subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="meetdivresetitle"
                />

                <TechIcons data={sectionData.icons} />
              </div>
            </section>
          )
        );
      case "Guarantee":
        return (
          sectionData && (
            <section className={`${styles.guaranteetmsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.heading ? sectionData.heading : "",
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
                            sectionData.image
                              ? sectionData.image
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
                        !!sectionData.rightText ? sectionData.rightText : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "Video Section":
        return (
          sectionData && (
            <section
              className={`w-full overflow-hidden ${styles.videoSection}`}
            >
              <Video props={sectionData} />
            </section>
          )
        );
      case "Client Speak":
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
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: !!sectionData.subTitle
                      ? sectionData.subTitle
                      : "",
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <Client props={!!sectionData.data ? sectionData.data : []} />
              </div>
            </section>
          )
        );
      case "Achievement":
        return (
          sectionData && (
            <section className={`${styles.trustsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title,
                    subtitle: sectionData.subTitle,
                  }}
                  titleFirst={true}
                  titleClassName="achievementtitle"
                />
                <Achievement data={sectionData.data} />
              </div>
            </section>
          )
        );
      case "Frequently  Asked  Questions":
        return (
          sectionData && (
            <section className={`${styles.faqsection} tm-section`}>
              {sectionData.heading}
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
                        title: !!sectionData.heading ? sectionData.heading : "",
                        subtitle: "",
                      }}
                      titleFirst={true}
                      titleClassName="faqtitle"
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <Faq
                      data={
                        !!sectionData.questionAnswers
                          ? sectionData.questionAnswers
                          : []
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "Awards & Recognition":
        return (
          sectionData && (
            <section className={`${styles.awardsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.heading ? sectionData.heading : "",
                    subtitle: "",
                  }}
                  titleFirst={true}
                  titleClassName="awardtitle"
                />
                <Singleaward
                  props={!!sectionData.awardIcons ? sectionData.awardIcons : []}
                />
              </div>
            </section>
          )
        );
      case "Contact Form Section":
        return (
          sectionData && (
            <section
              className={`${
                pathName === "/start-up-services"
                  ? styles.techstrtupformsection
                  : styles.formsection
              } tm-section bg-white`}
            >
              <div className="container mx-auto">
                <FormSection
                  props={sectionData}
                  techstartupform={
                    !!sectionData.isImageFirst && sectionData.isImageFirst
                  }
                />
              </div>
            </section>
          )
        );
      case "Case Study List":
        return (
          sectionData && (
            <section className={`${styles.casestudylist} tm-section bg-white`}>
              <div className="container mx-auto">
                <p className={styles.casestudylistlabel}>
                  {!!sectionData.label ? sectionData.label : ""}
                </p>
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: !!sectionData.subtitle
                      ? sectionData.subtitle
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
      case "Case Study Detail Hero Section":
        return (
          sectionData && (
            <section
              className={`${styles.casestudydetailherosection} tm-section`}
            >
              <div className="container mx-auto">
                <p className={styles.casestudydetaillabel}>
                  {!!sectionData.label ? sectionData.label : ""}
                </p>
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: !!sectionData.subTitle
                      ? sectionData.subTitle
                      : "",
                  }}
                  titleFirst={true}
                  titleClassName="casestudydetailtitle"
                />
                <CaseStudyDetail data={sectionData} />
              </div>
            </section>
          )
        );
      case "Business Impact":
        return (
          sectionData && (
            <section className={`${styles.businessimpactsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: !!sectionData.subTitle
                      ? sectionData.subTitle
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
      case "Project Screens":
        return (
          sectionData && (
            <section className={`${styles.projectscreen} bg-white`}>
              <div className="container mx-auto">
                <ScreenSlider
                  props={!!sectionData.images ? sectionData.images : []}
                  useSlider1={true}
                />
              </div>
            </section>
          )
        );
      case "Challenges Solutions":
        return (
          sectionData && (
            <section
              className={`${styles.challangesolutions} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                  }}
                  titleClassName="Challengessolutionstitle"
                />
                <Challenges
                  props={
                    !!sectionData.resourceSolutions
                      ? sectionData.resourceSolutions
                      : []
                  }
                />
              </div>
            </section>
          )
        );
      case "Major Screen":
        return (
          sectionData && (
            <section
              className={`${styles.majorscreensection} tm-section majorscreensection`}
            >
              <div className="container mx-auto">
                <ScreenSlider
                  props={!!sectionData.images ? sectionData.images : []}
                  useSlider1={false}
                />
              </div>
            </section>
          )
        );
      case "Key Features":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title,
                    subtitle: sectionData.subtitle,
                  }}
                  titleFirst={false}
                  titleClassName="featurestitle"
                />
                <Services props={sectionData.data} isProduct={true} />
              </div>
            </section>
          )
        );
      case "keyFeatureWithDetails":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: !!sectionData.subtitle
                      ? sectionData.subtitle
                      : "",
                  }}
                  titleFirst={false}
                  titleClassName="featurestitle"
                />
                <Services
                  props={
                    sectionData.find((item: any) => item.Data)
                      ? sectionData.find((item: any) => item.Data).Data
                      : ""
                  }
                  isFeatured={true}
                />
              </div>
            </section>
          )
        );
      case "Tech Feature":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: "",
                  }}
                  titleFirst={
                    !!sectionData.isTitleFirst
                      ? sectionData.isTitleFirst
                      : false
                  }
                  titleClassName="featurestitle"
                />
                <Services
                  props={!!sectionData.data ? sectionData.data : ""}
                  isFeatured={true}
                />
              </div>
            </section>
          )
        );
      case "Tech Feature With Sub Title":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: !!sectionData.subTitle
                      ? sectionData.subTitle
                      : "",
                  }}
                  titleFirst={
                    !!sectionData.isTitleFirst
                      ? sectionData.isTitleFirst
                      : false
                  }
                  titleClassName="featurestitle"
                />
                <Services
                  props={!!sectionData.data ? sectionData.data : ""}
                  isFeatured={true}
                />
              </div>
            </section>
          )
        );
      case "Product Hero Section":
        return (
          sectionData && (
            <section
              className={`${styles.prodcutherosection} tm-section bg-white`}
            >
              <Herosection
                props={sectionData}
                isTechStartup={
                  !!sectionData.isTechStartup
                    ? sectionData.isTechStartup
                    : false
                }
              />
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
                <Herosection props={sectionData} isTechnology={true} />
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
      case "Tech Expert":
        return (
          sectionData && (
            <section className={`${styles.techexpert} tm-section bg-white`}>
              <div className="container mx-auto">
                <TechExpert
                  props={sectionData}
                  istechstartupexpert={
                    !!sectionData.istechstartupexpert
                      ? sectionData.istechstartupexpert
                      : false
                  }
                />
              </div>
            </section>
          )
        );
      case "Value Service":
        return (
          sectionData && (
            <section className={`${styles.valueservice} tm-section bg-white`}>
              <div className="container mx-auto">
                <ValueService props={sectionData} />
              </div>
            </section>
          )
        );
      case "Engage Section":
        return (
          sectionData && (
            <section className={`${styles.hiredeveloper} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: !!sectionData.title ? sectionData.title : "",
                    subtitle: "",
                  }}
                  titleFirst={true}
                  titleClassName="servicestitle"
                />
                <Engage props={sectionData} />
              </div>
            </section>
          )
        );
      case "contactform":
        return (
          sectionData && (
            <>
              <section className={`${styles.contactform} tm-section bg-white`}>
                <div className="container mx-auto">
                  <ContactFormSection props={sectionData} />
                </div>
              </section>
            </>
          )
        );
      case "locations":
        return sectionData && <WorldMap props={sectionData} />;
      case "bloglist":
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
                <BlogList props={sectionData} />
              </div>
            </section>
          )
        );
      default:
        return null;
    }
  };
  // console.log(homeData);
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
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-center py-10">
            <Image
              src="https://crm-stageapi.pacificabs.com:3004/public/TM/images/404-art.84f63a54-1724410205306.svg"
              alt="bubble"
              height={850}
              width={850}
            />
          </div>
        </>
      )}
    </>
  );
};

export default DataComponent;
