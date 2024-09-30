import Loading from "@/components/common/loading/loading"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { lazy, useEffect, useRef, useState } from "react"
import styles from "./home.module.css"
import MaximizedSlider from "@/components/common/casestudy/MaximizedSlider"
import BlogList from "../blogs/list/blogList/BlogList"

const Homesection = lazy(() => import("@/components/homesection/HomeSection"))
const TechStartupBg = lazy(
  () => import("@/components/tech-startup-bg/tech-startup-bg")
)
const TitleSection = lazy(() => import("@/components/common/title/title"))
const MethodologyBox = lazy(
  () => import("@/components/common/methodologybox/methodologybox")
)
const Services = lazy(() => import("@/components/common/services/services"))
const CaseStudy = lazy(() => import("@/components/common/casestudy/casestudy"))
const TechIcons = lazy(() => import("@/components/common/techicons/techicons"))
const GuaranteePoints = lazy(
  () => import("@/components/common/guaranteepoint/guaranteepoint")
)
// const Video = lazy(() => import("@/components/common/video/video"))
const Client = lazy(() => import("@/components/common/client/client"))
const Achievement = lazy(
  () => import("@/components/common/achievement/achievement")
)
const Faq = lazy(() => import("@/components/common/Faq/faq"))
const Singleaward = lazy(
  () => import("@/components/common/singleaward/singleaward")
)
const FormSection = lazy(
  () => import("@/components/common/formsection/formsection")
)
const CaseStudyList = lazy(
  () => import("@/components/common/CasestudyList/CasestudyList")
)
const CaseStudyDetail = lazy(
  () => import("@/components/common/casestudydetail/casestudydetail")
)
const ScreenSlider = lazy(
  () => import("@/components/common/screenslider/screenslider")
)
const Challenges = lazy(
  () => import("@/components/common/Challenges/Challenges")
)
const Herosection = lazy(
  () => import("@/components/common/herosection/herosection")
)
const ProductSolutions = lazy(
  () => import("@/components/common/productsolutions/productsolutions")
)
const TechSlider = lazy(
  () => import("@/components/common/techslider/techslider")
)
const TechService = lazy(
  () => import("@/components/common/techservice/techservice")
)
const TechExpert = lazy(
  () => import("@/components/common/techexpert/techexpert")
)
const TechBenifits = lazy(
  () => import("@/components/common/techbenifits/techbenifits")
)
const HireDeveloper = lazy(
  () => import("@/components/common/hiredeveloper/hiredeveloper")
)
const Engage = lazy(() => import("@/components/common/engageSection/engage"))
const ValueService = lazy(
  () => import("@/components/common/valueservice/valueservice")
)
const ContactFormSection = lazy(
  () => import("@/components/common/contactformsection/formsection")
)
const WorldMap = lazy(() => import("@/components/common/worldMap/worldMap"))
const Experties = lazy(() => import("@/components/common/experties/experties"))
const Team = lazy(() => import("@/components/common/team/team"))
const Recrute = lazy(() => import("@/components/common/recrute/recrute"))
const ImageSlider = lazy(
  () => import("@/components/common/imageSlider/imageSlider")
)
const CurrentOpenings = lazy(
  () => import("@/components/common/currentOpenings/currentOpenings")
)
// const BlogList = lazy(() => import("@/components/common/blogList/BlogList"));

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
  const pathName: any = usePathname()
  const [homeData, setHomeData] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [detailedSliderOpen, setDetailedOpen] = useState<boolean>(false)
  const [detailedSliderImagesUrl, setDetailedImagesUrl] = useState<string[]>(
    []
  )

  useEffect(() => {
    setHomeData(data)
    setLoading(false)
  }, [pathName])

  const formSectionRef = useRef<HTMLElement | null>(null)
  const techSectionRef = useRef<HTMLElement | null>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const renderSection = (sectionName: string, sectionData: any) => {
    switch (sectionName) {
      case "Hero Sections":
        return (
          sectionData && (
            <Homesection
              sectionData={sectionData}
              scrollToSection={scrollToSection}
              formSectionRef={formSectionRef}
              techSectionRef={techSectionRef}
            />
          )
        )
      case "Tech Startup":
        return (
          sectionData && (
            <section ref={techSectionRef}>
              <TechStartupBg sectionData={sectionData} />
            </section>
          )
        )
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
                    title: sectionData.headingText
                      ? sectionData.headingText
                      : "",
                    subtitle: sectionData.subDescriptionText
                      ? sectionData.subDescriptionText
                      : ""
                  }}
                  titleClassName="methodologytitle"
                />
                <MethodologyBox
                  data={sectionData.card ? sectionData.card : []}
                />
              </div>
            </section>
          )
        )
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
                <div className="flex flex-col items-center justify-center text-black">
                  <h2
                    className="text-4xl font-semibold mb-4 text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #168944 0.08%, #40aa46 99.95%)",
                      borderBottom: "3px solid transparent",
                      backgroundClip: "text, padding-box",
                      WebkitBackgroundClip: "text",
                      borderImage:
                        "linear-gradient(90deg, #168944 0.08%, #40aa46 99.95%) 1"
                    }}
                    dangerouslySetInnerHTML={{ __html: sectionData.title }}
                  />
                  <p
                    className="md:w-[70%] text-center text-[var(--secondary--color)] opacity-70 font-medium text-[1.33rem] leading-relaxed mb-16"
                    dangerouslySetInnerHTML={{ __html: sectionData.subtitle }}
                  />
                </div>
                {/* <TitleSection
                  sectionData={{
                    title: sectionData.title || "",
                    subtitle:
                      sectionData.subTitle || sectionData.subtitle || "",
                  }}
                  titleFirst={true}
                  titleClassName="casestudytitle"
                /> */}
                <CaseStudy
                  props={sectionData.data ? sectionData.data : []}
                  setDetailedOpen={setDetailedOpen}
                  setDetailedImagesUrl={setDetailedImagesUrl}
                />
              </div>
            </section>
          )
        )
      case "Tech Icons":
        return (
          sectionData && (
            <section className={`${styles.methodology} bg-white tm-section`}>
              <div className={styles.rightbubblecircle}>
                <Image
                  src="/images/gradient-bubble.svg"
                  alt="bubble"
                  width={850}
                  height={850}
                />
              </div>
              <div className="container mx-auto relative z-1">
                <TitleSection
                  sectionData={{
                    title: sectionData.title,
                    subtitle: sectionData.subtitle
                  }}
                  titleFirst={true}
                  titleClassName={styles.methodologytitle}
                />

                <TechIcons data={sectionData.icons} />
              </div>
            </section>
          )
        )
      case "Guarantee":
        return (
          sectionData && (
            <section className={`${styles.guaranteetmsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.heading ? sectionData.heading : ""
                  }}
                  titleFirst={true}
                  titleClassName={styles.guaranteetitle}
                />
                <div className="flex flex-wrap md:!mt-24 !mt-4">
                  <div className="lg:w-1/2 md:w-full md:pb-0">
                    <div className={styles.videoarea}>
                      {!!sectionData.image &&
                      sectionData.image.includes(".mp4") ? (
                        <video loop autoPlay muted>
                          <source src={sectionData.image} type="video/mp4" />
                        </video>
                          ) : !!sectionData.image &&
                        !sectionData.image.includes(".mp4") ? (
                        <Image
                          src={sectionData.image}
                          alt="Gurrentee Technomark"
                          width={900}
                          height={500}
                          className="rounded-2xl"
                        />
                              ) : (
                        <video loop autoPlay muted>
                          <source
                            src={"/images/Case-study.mp4"}
                            type="video/mp4"
                          />
                        </video>
                              )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 md:w-full md:pl-12 flex flex-col items-start justify-center">
                    <GuaranteePoints
                      props={sectionData.rightText ? sectionData.rightText : ""}
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        )
      // case "Video Section":
      //   return (
      //     sectionData && (
      //       <section
      //         className={`w-full overflow-hidden ${styles.videoSection}`}
      //       >
      //         <Video props={sectionData} />
      //       </section>
      //     )
      //   );
      case "Client Speak":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-[#fafafa]`}
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
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subTitle ? sectionData.subTitle : ""
                  }}
                  titleFirst={
                    !!(
                      !!sectionData.isTitalFirst &&
                      sectionData.isTitalFirst == "true"
                    )
                  }
                  titleClassName="clienttitle"
                />
                <Client props={sectionData.data ? sectionData.data : []} />
              </div>
            </section>
          )
        )
      case "Achievement":
        return (
          sectionData && (
            <section className={`${styles.trustsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title,
                    subtitle: sectionData.subTitle
                  }}
                  titleFirst={true}
                  titleClassName={styles.achievementtitle}
                />
                <Achievement data={sectionData.data} />
              </div>
            </section>
          )
        )
      case "Frequently  Asked  Questions":
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
                        title: sectionData.heading ? sectionData.heading : "",
                        subtitle: ""
                      }}
                      titleFirst={true}
                      titleClassName="faqtitle"
                    />
                  </div>
                  <div className="w-full md:w-3/4 mt-8 md:mt:0">
                    <Faq
                      data={
                        sectionData.questionAnswers
                          ? sectionData.questionAnswers
                          : []
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        )
      case "Frequently  Asked Questions":
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
                        title: sectionData.heading ? sectionData.heading : "",
                        subtitle: ""
                      }}
                      titleFirst={true}
                      titleClassName="faqtitle"
                    />
                  </div>
                  <div className="w-full md:w-3/4 mt-8 md:mt:0">
                    <Faq
                      data={
                        sectionData.questionAnswers
                          ? sectionData.questionAnswers
                          : []
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        )
      case "Awards & Recognition":
        return (
          sectionData && (
            <section className={`${styles.awardsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.heading ? sectionData.heading : "",
                    subtitle: ""
                  }}
                  titleFirst={true}
                  titleClassName="awardtitle"
                />
                <Singleaward
                  props={sectionData.awardIcons ? sectionData.awardIcons : []}
                />
              </div>
            </section>
          )
        )
      case "Contact Form Section":
        return (
          sectionData && (
            <section
              ref={formSectionRef}
              className={`${styles.formsection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <FormSection
                  props={sectionData}
                  techstartupform={
                    !!(
                      !!sectionData.isImageFirst &&
                      sectionData.isImageFirst == "true"
                    )
                  }
                />
              </div>
            </section>
          )
        )
      case "Case Study List":
        return (
          sectionData && (
            <section className={`${styles.casestudylist} tm-section bg-white`}>
              <div className="container mx-auto">
                <p className={`${styles.casestudylistlabel}`}>
                  {sectionData.label ? sectionData.label : ""}
                </p>
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subtitle ? sectionData.subtitle : ""
                  }}
                  titleFirst={true}
                  titleClassName="casestudylisttitle"
                />
                <CaseStudyList
                  props={sectionData}
                  setDetailedOpen={setDetailedOpen}
                  setDetailedImagesUrl={setDetailedImagesUrl}
                />
              </div>
            </section>
          )
        )
      case "Case Study Detail Hero Section":
        return (
          sectionData && (
            <section
              className={`${styles.casestudydetailherosection} tm-section`}
            >
              <div className="container mx-auto">
                {/* <p className={styles.casestudydetaillabel}>
                  {!!sectionData.label ? sectionData.label : ""}
                </p> */}
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subTitle ? sectionData.subTitle : ""
                  }}
                  titleFirst={true}
                  titleClassName="casestudydetailtitle"
                />
                <CaseStudyDetail data={sectionData} />
              </div>
            </section>
          )
        )
      case "Business Impact":
        return (
          sectionData && (
            <section className={`${styles.businessimpactsection} tm-section`}>
              <div className="container mx-auto max-w-[1140px] w-[100%]">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subTitle ? sectionData.subTitle : ""
                  }}
                  titleFirst={true}
                  titleClassName="businessimpacttitle"
                />
              </div>
            </section>
          )
        )
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
                  props={sectionData.images ? sectionData.images : []}
                  useSlider1={true}
                />
              </div>
            </section>
          )
        )
      case "Challenges Solutions":
        return (
          sectionData && (
            <section
              className={`${styles.challangesolutions} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : ""
                  }}
                  titleClassName="Challengessolutionstitle"
                />
                <Challenges
                  props={
                    sectionData.resourceSolutions
                      ? sectionData.resourceSolutions
                      : []
                  }
                />
              </div>
            </section>
          )
        )
      case "Major Screen":
        return (
          sectionData && (
            <section
              className={`${styles.majorscreensection} tm-section majorscreensection`}
            >
              <div className="container mx-auto">
                <ScreenSlider
                  props={sectionData.images ? sectionData.images : []}
                  useSlider1={false}
                />
              </div>
            </section>
          )
        )
      case "Contact Feature":
        return (
          sectionData && (
            <section
              className={`${styles.techstrtupformsection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <Services props={sectionData.data} iscontactservice={true} />
              </div>
            </section>
          )
        )
      case "Key Features":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-[#f2f5f9]`}
            >
              <div className="container  mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title,
                    subtitle: sectionData.subtitle
                  }}
                  titleFirst={
                    !!(
                      !!sectionData.isTitleFirst &&
                      sectionData.isTitleFirst == "true"
                    )
                  }
                  titleClassName="clienttitle"
                />
                <Services props={sectionData.data} isProduct={true} />
              </div>
            </section>
          )
        )
      case "keyFeatureWithDetails":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-[#f2f5f9]`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subtitle ? sectionData.subtitle : ""
                  }}
                  titleFirst={false}
                  titleClassName="featurestitle"
                />
                <Services props={sectionData.data ? sectionData.data : ""} />
              </div>
            </section>
          )
        )
      case "Tech Feature":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-[#f2f5f9]`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: ""
                  }}
                  titleFirst={
                    !!(
                      !!sectionData.isTitleFirst &&
                      sectionData.isTitleFirst == "true"
                    )
                  }
                  titleClassName="featurestitle"
                />
                <Services
                  props={sectionData.data ? sectionData.data : ""}
                  isFeatured={true}
                />
              </div>
            </section>
          )
        )
      case "Tech Feature With Sub Title":
        return (
          sectionData && (
            <section className={`${styles.features} tm-section bg-[#f2f5f9]`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subTitle ? sectionData.subTitle : ""
                  }}
                  titleFirst={
                    !!(
                      !!sectionData.isTitleFirst &&
                      sectionData.isTitleFirst == "true"
                    )
                  }
                  titleClassName="featurestitle"
                />
                <Services
                  props={sectionData.data ? sectionData.data : ""}
                  isFeatured={true}
                />
              </div>
            </section>
          )
        )
      case "Product Hero Section":
        return (
          sectionData && (
            <section
              className={`${styles.prodcutherosection} tm-section bg-${
                sectionData.bgColor !== ("#fff" || "#ffffff" || "white")
                  ? `[${sectionData.bgColor}]`
                  : "white"
              }`}
            >
              <Herosection
                props={sectionData}
                isTechStartup={
                  !!(!!sectionData && sectionData.isTechStartup == "true")
                }
                scrollToSection={scrollToSection}
                formSectionRef={formSectionRef}
              />
            </section>
          )
        )
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
      case "Product Solutions":
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
        )
      case "Technology Home Section":
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
        )
      case "Tech Slider":
        return (
          sectionData && (
            <section className={`${styles.techslider} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subTitle ? sectionData.subTitle : ""
                  }}
                  titleFirst={true}
                  titleClassName="techslidertitle"
                />
                <TechSlider props={sectionData} />
              </div>
            </section>
          )
        )
      case "Tech Services":
        return (
          sectionData && (
            <section className={`${styles.techservices} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: sectionData.subTitle ? sectionData.subTitle : ""
                  }}
                  titleFirst={true}
                  titleClassName="techservicestitle"
                />
                <TechService props={sectionData} />
              </div>
            </section>
          )
        )
      case "Tech Benefits":
        return (
          sectionData && (
            <section className={`${styles.technenifits} bg-white tm-section`}>
              <TechBenifits props={sectionData} />
            </section>
          )
        )
      case "Hire Developer":
        return (
          sectionData && (
            <section className={`${styles.hiredeveloper} tm-section bg-white`}>
              <div className="container mx-auto">
                <HireDeveloper props={sectionData} />
              </div>
            </section>
          )
        )
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
                    sectionData.istechstartupexpert
                      ? sectionData.istechstartupexpert
                      : false
                  }
                />
              </div>
            </section>
          )
        )
      case "Value Service":
        return (
          sectionData && (
            <section className={`bg-[#F7F8FB]`}>
              <div className="container mx-auto">
                <ValueService props={sectionData} />
              </div>
            </section>
          )
        )
      case "Engage Section":
        return (
          sectionData && (
            <section className={`${styles.hiredeveloper} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: ""
                  }}
                  titleFirst={true}
                  titleClassName="servicestitle"
                />
                <Engage props={sectionData} />
              </div>
            </section>
          )
        )
      case "Contact Form":
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
        )
      case "Locations":
        return sectionData && <WorldMap props={sectionData} />
      case "Technology Experties":
        return (
          sectionData && (
            <section className={`bg-[#EEF8F0]`}>
              <div className="container mx-auto">
                <Experties data={sectionData} />
              </div>
            </section>
          )
        )
      case "Blog Title":
        return (
          sectionData && (
            <section className={`${styles.blogTitle} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : ""
                  }}
                  titleFirst={true}
                  titleClassName="casestudylisttitle"
                />
                <BlogList buttons={false} />
              </div>
            </section>
          )
        )
      case "Team Speak":
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
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: ""
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <Team props={sectionData.data ? sectionData.data : []} />
              </div>
            </section>
          )
        )
      case "Current Openings":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: ""
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <CurrentOpenings data={sectionData || []} />
              </div>
            </section>
          )
        )
      case "Image Gallery":
        return <ImageSlider sectionData={sectionData} />
      case "Process of Recruiting":
        return (
          sectionData && (
            <section
              className={`${styles.clientspeaksection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: sectionData.title ? sectionData.title : "",
                    subtitle: ""
                  }}
                  titleFirst={true}
                  titleClassName="clienttitle"
                />
                <Recrute props={sectionData} />
              </div>
            </section>
          )
        )
      // case "bloglist":
      //   return (
      //     sectionData && (
      //       <section className={`${styles.casestudylist} tm-section bg-white`}>
      //         <div className="container mx-auto">
      //           <p className={styles.casestudylistlabel}>
      //             {sectionData.find((item: any) => item.label)
      //               ? sectionData.find((item: any) => item.label).label
      //               : ""}
      //           </p>
      //           <TitleSection
      //             sectionData={{
      //               title: sectionData.find((item: any) => item.title)
      //                 ? sectionData.find((item: any) => item.title).title
      //                 : "",
      //               subtitle: sectionData.find((item: any) => item.subtitle)
      //                 ? sectionData.find((item: any) => item.subtitle).subtitle
      //                 : "",
      //             }}
      //             titleFirst={true}
      //             titleClassName="casestudylisttitle"
      //           />
      //           <BlogList props={sectionData} />
      //         </div>
      //       </section>
      //     )
      //   );
      default:
        return null
    }
  }
  return (
    <>
      <MaximizedSlider
        isOpen={detailedSliderOpen}
        images={detailedSliderImagesUrl}
        onClose={() => setDetailedOpen(false)}
      />
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
  )
}

export default DataComponent
