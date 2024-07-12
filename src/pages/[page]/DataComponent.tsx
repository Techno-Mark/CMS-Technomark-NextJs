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
import TechSlider from "@/components/common/techslider/techslider";
import TechService from "@/components/common/techservice/techservice";
import TechExpert from "@/components/common/techexpert/techexpert";
import TechBenifits from "@/components/common/techbenifits/techbenifits";
import HireDeveloper from "@/components/common/hiredeveloper/hiredeveloper";
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
  caseStudyDetails,
  product,
  technology,
}: {
  maindata: HomeProps;
  caseStudy: HomeProps;
  caseStudyDetails: HomeProps;
  product: HomeProps;
  technology: HomeProps;
}) => {
  const pathName: any = usePathname();
  const [homeData,setHomeData] = useState<HomeProps>();

  useEffect(() => {
    if (pathName === "/home") {
      setHomeData(maindata);
    } else if (pathName === "/casestudylist") {
      setHomeData(caseStudy);
    } else if (pathName === "/casestudydetail") {
      setHomeData(caseStudyDetails);
    } else if (pathName === "/product") {
      setHomeData(product);
    } else if (pathName === "/technology"){
      setHomeData(technology);
    }
  }, [pathName]);


  const renderSection = (sectionName: string) => {
    switch (sectionName) {
      case "homeSection":
        return homeData?.homeSection && (
          <Homesection sectionData={homeData.homeSection} />
        );
      case "techstartup":
        return homeData?.techstartup && (
          <TectStartupBg sectionData={homeData.techstartup} />
        );
      case "methodology":
        return homeData?.methodology && (
          <section className={`${styles.methodology} tm-section bg-white`}>
            <div className={styles.leftbubblecircle}>
              <Image src="/images/gradient-bubble.svg" alt="bubble" height={850} width={850} />
            </div>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.methodology[0].title,
                  subtitle: homeData.methodology[0].subtitle,
                }}
                titleClassName="methodologytitle"
              />
              <MethodologyBox props={homeData.methodology[0]} />
            </div>
          </section>
        );
      case "services":
        return homeData?.services && (
          <section className={`${styles.coreservices} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.services[0].title,
                  subtitle: homeData.services[0].subtitle,
                }}
                titleFirst={false}
                titleClassName="servicestitle"
              />
              <Services props={homeData.services[0]} />
            </div>
          </section>
        );
      case "casestudy":
        return homeData?.casestudy && (
          <section className={`${styles.casestudiessection} tm-section bg-white`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.casestudy[0].title,
                  subtitle: homeData.casestudy[0].subtitle,
                }}
                titleFirst={true}
                titleClassName="casestudytitle"
              />
              <CaseStudy props={homeData.casestudy[0]} />
            </div>
          </section>
        );
      case "techIcons":
        return homeData?.techIcons && (
          <section className={`${styles.meetdiverse} tm-section`}>
            <div className={styles.rightbubblecircle}>
              <Image src="/images/gradient-bubble.svg" alt="bubble" width={850} height={850} />
            </div>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.techIcons[0].title,
                  subtitle: homeData.techIcons[0].subtitle,
                }}
                titleFirst={true}
                titleClassName="meetdivresetitle"
              />
              <TechIcons props={homeData.techIcons[0]} />
            </div>
          </section>
        );
      case "guarantee":
        return homeData?.guarantee && (
          <section className={`${styles.guaranteetmsection} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{ title: homeData.guarantee[0].title }}
                titleFirst={true}
                titleClassName="guaranteetitle"
              />
              <div className="flex flex-wrap">
                <div className="lg:w-1/2 md:w-full">
                  <div className={styles.videoarea}>
                    <video loop autoPlay muted>
                      <source
                        src={homeData.guarantee[0].videosrc}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="lg:w-1/2 md:w-full pl-10">
                  <GuaranteePoints props={homeData.guarantee[0]} />
                </div>
              </div>
            </div>
          </section>
        );
      case "videosection":
        return homeData?.videosection && (
          <section className="w-full overflow-hidden videoSection">
            <Video props={homeData.videosection.video} />
          </section>
        );
      case "client":
        return homeData?.client && (
          <section className={`${styles.clientspeaksection} tm-section bg-white`}>
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
                  title: homeData.client[0].title,
                  subtitle: homeData.client[0].subtitle,
                }}
                titleFirst={false}
                titleClassName="clienttitle"
              />
              <Client props={homeData.client[0]} />
            </div>
          </section>
        );
      case "achievement":
        return homeData?.achievement && (
          <section className={`${styles.trustsection} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.achievement[0].title,
                  subtitle: homeData.achievement[0].subtitle,
                }}
                titleFirst={true}
                titleClassName="achievementtitle"
              />
              <Achievement props={homeData.achievement[0]} />
            </div>
          </section>
        );
      case "faq":
        return homeData?.faq && (
          <section className={`${styles.faqsection} tm-section`}>
            <div className={styles.leftbubblecircle}>
              <Image src="/images/gradient-bubble.svg" alt="bubble" height={850} width={850} />
            </div>
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/4">
                  <TitleSection
                    sectionData={{
                      title: homeData.faq[0].title,
                      subtitle: homeData.faq[0].subtitle,
                    }}
                    titleFirst={true}
                    titleClassName="faqtitle"
                  />
                </div>
                <div className="w-full md:w-3/4">
                  <Faq props={homeData.faq[0]} />
                </div>
              </div>
            </div>
          </section>
        );
      case "awards":
        return homeData?.awards && (
          <section className={`${styles.awardsection} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.awards[0].title,
                  subtitle: homeData.awards[0].subtitle,
                }}
                titleFirst={true}
                titleClassName="awardtitle"
              />
              <Singleaward props={homeData.awards[0]} />
            </div>
          </section>
        );
      case "formsection":
        return homeData?.formsection && (
          <section className={`${styles.formsection} tm-section bg-white`}>
            <div className="container mx-auto">
              <FormSection props={homeData.formsection} />
            </div>
          </section>
        );
      case "casestudylist":
        return homeData?.casestudylist && (
          <section className={`${styles.casestudylist} tm-section bg-white`}>
            <div className="container mx-auto">
              <p className={styles.casestudylistlabel}>{homeData.casestudylist[0].label}</p>
              <TitleSection
                sectionData={{
                  title: homeData.casestudylist[0].title,
                  subtitle: homeData.casestudylist[0].subtitle,
                }}
                titleFirst={true}
                titleClassName="casestudylisttitle"
              />
              <CaseStudyList props={homeData.casestudylist[0]} />
            </div>
          </section>
        );
      case "casestudydetailherosection":
        return homeData?.casestudydetailherosection && (
          <section className={`${styles.casestudydetailherosection} tm-section`}>
            <div className="container mx-auto">
              <p className={styles.casestudydetaillabel}>{homeData.casestudydetailherosection.label}</p>
              <TitleSection
                sectionData={{
                  title: homeData.casestudydetailherosection.title,
                  subtitle: homeData.casestudydetailherosection.subtitle,
                }}
                titleFirst={true}
                titleClassName="casestudydetailtitle"
              />
              <CaseStudyDetail props={homeData.casestudydetailherosection} />
            </div>
          </section>
        );
      case "businessimpact":
        return homeData?.businessimpact && (
          <section className={`${styles.businessimpactsection} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.businessimpact.title,
                  subtitle: homeData.businessimpact.subtitle,
                }}
                titleFirst={true}
                titleClassName="businessimpacttitle"
              />
            </div>
          </section>
        );
      case "problemstatement":
        return homeData?.problemstatement && (
          <section className={`${styles.problemstatement} tm-section bg-white`}>
            <div className="container mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/4">
                  <TitleSection
                    sectionData={{
                      title: homeData.problemstatement.title,
                    }}
                    titleFirst={true}
                    titleClassName="problemstatementtitle"
                  />
                </div>
                <div className="w-full md:w-3/4">
                  <GuaranteePoints props={homeData.problemstatement} isProblemStatement={true} />
                </div>
              </div>
            </div>
          </section>
        );
      case "projectscreens":
        return homeData?.projectscreens && (
          <section className={`${styles.projectscreen} bg-white`}>
            <div className="container mx-auto">
              <ScreenSlider props={homeData.projectscreens} useSlider1={true} />
            </div>
          </section>
        );
      case "Challengessolutions":
        return homeData?.Challengessolutions && (
          <section className={`${styles.challangesolutions} tm-section bg-white`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.Challengessolutions.title,
                }}
                titleClassName="Challengessolutionstitle"
              />
              <Challenges props={homeData.Challengessolutions} />
            </div>
          </section>
        );
      case "majorscreen":
        return homeData?.majorscreen && (
          <section className={`${styles.majorscreensection} tm-section majorscreensection`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.majorscreen.title,
                }}
                titleClassName="majorscreentitle"
              />
              <ScreenSlider props={homeData.majorscreen} useSlider1={false} />
            </div>
          </section>
        );
      case "features":
        return homeData?.features && (
          <section className={`${styles.features} tm-section bg-white`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.features.title,
                }}
                titleClassName="featurestitle"
              />
              <Services props={homeData.features} isFeatured={true} />
            </div>
          </section>
        );
      case "productherosection":
        return homeData?.productherosection && (
          <section className={`${styles.prodcutherosection} tm-section bg-white`}>
            <Herosection props={homeData.productherosection} />
          </section>
        );
      case "productservices":
        return homeData?.productservices && (
          <section className={`${styles.productservices} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.productservices.title,
                  subtitle: homeData.productservices.subtitle,
                }}
                titleFirst={false}
                titleClassName="servicestitle"
              />
              <Services props={homeData.productservices} isProduct={true} />
            </div>
          </section>
        );
      case "productsolutions":
        return homeData?.productsolutions && (
          <section className={`${styles.productsolutions} tm-section bg-white`}>
            <div className="container mx-auto">
              <ProductSolutions props={homeData.productsolutions} />
            </div>
          </section>
        );
      case "technologyhomesection":
        return homeData?.technologyhomesection && (
          <>
            <section className={`${styles.technologyhomesection} tm-section bg-white`}>
              {/* <img src={homeData.technologyhomesection.techimage} alt="" /> */}
              <Herosection props={homeData.technologyhomesection} istechnology={true} />
            </section>
          </>
        );
      case "techslider":
        return homeData?.techslider && (
          <section className={`${styles.techslider} tm-section bg-white`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.techslider.title,
                  subtitle: homeData.techslider.subtitle,
                }}
                titleFirst={true}
                titleClassName="techslidertitle"
              />
              <TechSlider props={homeData.techslider} />
            </div>
          </section>
        );
      case "techservices":
        return homeData?.techservices && (
          <section className={`${styles.techservices} tm-section bg-white`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.techservices.title,
                  subtitle: homeData.techservices.subtitle,
                }}
                titleFirst={true}
                titleClassName="techservicestitle"
              />
              <TechService props={homeData.techservices.services} />
            </div>
          </section>
        );
      case "technenifits":
        return homeData?.technenifits && (
          <section className={`${styles.technenifits} bg-white`}>
            <TechBenifits props={homeData.technenifits} />
          </section>
        );
      case "hiredeveloper":
        return homeData?.hiredeveloper && (
          <section className={`${styles.hiredeveloper} tm-section bg-white`}>
            <div className="container mx-auto">
              <HireDeveloper props={homeData.hiredeveloper} />
            </div>
          </section>
        );
      case "singletechservices":
        return homeData?.singletechservices && (
          <section className={`${styles.singletechservices} tm-section`}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.singletechservices.title,
                  subtitle: homeData.singletechservices.subtitle,
                }}
                titleFirst={true}
                titleClassName="servicestitle"
              />
              <Services props={homeData.singletechservices} istechservice={true} />
            </div>
          </section>
        );
      case "techexpert":
        return homeData?.techexpert && (
          <section className={`${styles.techexpert} tm-section bg-white`}>
            <div className="container mx-auto">
              <TechExpert props={homeData.techexpert} />
            </div>
          </section>
        );
      default:
        return null;
    }
  };
  return (
    <>
      {homeData ? (
        homeData.sectionsOrder.map((sectionName: any) => (
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
