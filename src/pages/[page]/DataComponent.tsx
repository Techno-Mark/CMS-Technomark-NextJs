import React, { useEffect, useState } from "react";
import Homesection from "./_homesection/page";
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
import Loading from "@/components/common/loading/loading";
import Image from "next/image";
import styles from "./home.module.css";
import { usePathname } from "next/navigation";

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
  props: any;
}

const DataComponent = ({
  homeData,
  caseStudy,
  caseStudyDetails,
  product,
}: {
  homeData: HomeProps;
  caseStudy: HomeProps;
  caseStudyDetails: HomeProps;
  product: HomeProps;
}) => {
  const pathName: any = usePathname();
  const [data, setData] = useState<HomeProps>();

  useEffect(() => {
    if (pathName === "/home") {
      setData(homeData);
    } else if (pathName === "/casestudylist") {
      setData(caseStudy);
    } else if (pathName === "/casestudydetail") {
      setData(caseStudyDetails);
    } else if (pathName === "/product") {
      setData(product);
    }
  }, [pathName]);

  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case "homeSection":
        return (
          data?.homeSection && <Homesection sectionData={data.homeSection} />
        );
      case "techstartup":
        return (
          data?.techstartup && <TectStartupBg sectionData={data.techstartup} />
        );
      case "methodology":
        return (
          data?.methodology && (
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
                    title: data.methodology[0].title,
                    subtitle: data.methodology[0].subtitle,
                  }}
                  titleClassName="methodologytitle"
                />
                <MethodologyBox props={data.methodology[0]} />
              </div>
            </section>
          )
        );
      case "services":
        return (
          data?.services && (
            <section className={`${styles.coreservices} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.services[0].title,
                    subtitle: data.services[0].subtitle,
                  }}
                  titleFirst={false}
                  titleClassName="servicestitle"
                />
                <Services props={data.services[0]} />
              </div>
            </section>
          )
        );
      case "casestudy":
        return (
          data?.casestudy && (
            <section
              className={`${styles.casestudiessection} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.casestudy[0].title,
                    subtitle: data.casestudy[0].subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="casestudytitle"
                />
                <CaseStudy props={data.casestudy[0]} />
              </div>
            </section>
          )
        );
      case "techIcons":
        return (
          data?.techIcons && (
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
                    title: data.techIcons[0].title,
                    subtitle: data.techIcons[0].subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="meetdivresetitle"
                />
                <TechIcons props={data.techIcons[0]} />
              </div>
            </section>
          )
        );
      case "guarantee":
        return (
          data?.guarantee && (
            <section className={`${styles.guaranteetmsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{ title: data.guarantee[0].title }}
                  titleFirst={true}
                  titleClassName="guaranteetitle"
                />
                <div className="flex flex-wrap">
                  <div className="lg:w-1/2 md:w-full">
                    <div className={styles.videoarea}>
                      <video loop autoPlay muted>
                        <source
                          src={data.guarantee[0].videosrc}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="lg:w-1/2 md:w-full pl-10">
                    <GuaranteePoints props={data.guarantee[0]} />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "videosection":
        return (
          data?.videosection && (
            <section className="w-full overflow-hidden videoSection">
              <Video props={data.videosection.video} />
            </section>
          )
        );
      case "client":
        return (
          data?.client && (
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
                    title: data.client[0].title,
                    subtitle: data.client[0].subtitle,
                  }}
                  titleFirst={false}
                  titleClassName="clienttitle"
                />
                <Client props={data.client[0]} />
              </div>
            </section>
          )
        );
      case "achievement":
        return (
          data?.achievement && (
            <section className={`${styles.cmptrustsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.achievement[0].title,
                    subtitle: data.achievement[0].subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="achievementtitle"
                />
                <Achievement props={data.achievement[0]} />
              </div>
            </section>
          )
        );
      case "faq":
        return (
          data?.faq && (
            <section className={`${styles.faqsection} tm-section`}>
              <div className={styles.leftbubblecircle}>
                <Image
                  src="/images/gradient-bubble.svg"
                  alt="bubble"
                  height={850}
                  width={850}
                />
              </div>
              <div className="container mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <TitleSection
                      sectionData={{
                        title: data.faq[0].title,
                        subtitle: data.faq[0].subtitle,
                      }}
                      titleFirst={true}
                      titleClassName="faqtitle"
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <Faq props={data.faq[0]} />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "awards":
        return (
          data?.awards && (
            <section className={`${styles.awardsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.awards[0].title,
                    subtitle: data.awards[0].subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="awardtitle"
                />
                <Singleaward props={data.awards[0]} />
              </div>
            </section>
          )
        );
      case "formsection":
        return (
          data?.formsection && (
            <section className={`${styles.formsection} tm-section bg-white`}>
              <div className="container mx-auto">
                <FormSection props={data.formsection} />
              </div>
            </section>
          )
        );
      case "casestudylist":
        return (
          data?.casestudylist && (
            <section className={`${styles.casestudylist} tm-section bg-white`}>
              <div className="container mx-auto">
                <p className={styles.casestudylistlabel}>
                  {data.casestudylist[0].label}
                </p>
                <TitleSection
                  sectionData={{
                    title: data.casestudylist[0].title,
                    subtitle: data.casestudylist[0].subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="casestudylisttitle"
                />
                <CaseStudyList props={data.casestudylist[0]} />
              </div>
            </section>
          )
        );
      case "casestudydetailherosection":
        return (
          data?.casestudydetailherosection && (
            <section
              className={`${styles.casestudydetailherosection} tm-section`}
            >
              <div className="container mx-auto">
                <p className={styles.casestudydetaillabel}>
                  {data.casestudydetailherosection.label}
                </p>
                <TitleSection
                  sectionData={{
                    title: data.casestudydetailherosection.title,
                    subtitle: data.casestudydetailherosection.subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="casestudydetailtitle"
                />
                <CaseStudyDetail props={data.casestudydetailherosection} />
              </div>
            </section>
          )
        );
      case "businessimpact":
        return (
          data?.businessimpact && (
            <section className={`${styles.businessimpactsection} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.businessimpact.title,
                    subtitle: data.businessimpact.subtitle,
                  }}
                  titleFirst={true}
                  titleClassName="businessimpacttitle"
                />
              </div>
            </section>
          )
        );
      case "problemstatement":
        return (
          data?.problemstatement && (
            <section
              className={`${styles.problemstatement} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <TitleSection
                      sectionData={{
                        title: data.problemstatement.title,
                      }}
                      titleFirst={true}
                      titleClassName="problemstatementtitle"
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <GuaranteePoints
                      props={data.problemstatement}
                      isProblemStatement={true}
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        );
      case "projectscreens":
        return (
          data?.projectscreens && (
            <section className={`${styles.projectscreen} bg-white`}>
              <div className="container mx-auto">
                <ScreenSlider props={data.projectscreens} useSlider1={true} />
              </div>
            </section>
          )
        );
      case "Challengessolutions":
        return (
          data?.Challengessolutions && (
            <section
              className={`${styles.challangesolutions} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.Challengessolutions.title,
                  }}
                  titleClassName="Challengessolutionstitle"
                />
                <Challenges props={data.Challengessolutions} />
              </div>
            </section>
          )
        );
      case "majorscreen":
        return (
          data?.majorscreen && (
            <section
              className={`${styles.majorscreensection} tm-section majorscreensection`}
            >
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.majorscreen.title,
                  }}
                  titleClassName="majorscreentitle"
                />
                <ScreenSlider props={data.majorscreen} useSlider1={false} />
              </div>
            </section>
          )
        );
      case "features":
        return (
          data?.features && (
            <section className={`${styles.features} tm-section bg-white`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.features.title,
                  }}
                  titleClassName="featurestitle"
                />
                <Services props={data.features} isFeatured={true} />
              </div>
            </section>
          )
        );
      case "productherosection":
        return (
          data?.productherosection && (
            <section
              className={`${styles.prodcutherosection} tm-section bg-white`}
            >
              <Herosection props={data.productherosection} />
            </section>
          )
        );
      case "productservices":
        return (
          data?.productservices && (
            <section className={`${styles.productservices} tm-section`}>
              <div className="container mx-auto">
                <TitleSection
                  sectionData={{
                    title: data.productservices.title,
                    subtitle: data.productservices.subtitle,
                  }}
                  titleFirst={false}
                  titleClassName="servicestitle"
                />
                <Services props={data.productservices} isProduct={true} />
              </div>
            </section>
          )
        );
      case "productsolutions":
        return (
          data?.productsolutions && (
            <section
              className={`${styles.productsolutions} tm-section bg-white`}
            >
              <div className="container mx-auto">
                <ProductSolutions props={data.productsolutions} />
              </div>
            </section>
          )
        );
      default:
        return null;
    }
  };
  return (
    <>
      {data ? (
        data.sectionsOrder.map((sectionName: any) => (
          <React.Fragment key={sectionName}>
            {renderSection(sectionName)}
          </React.Fragment>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DataComponent;
