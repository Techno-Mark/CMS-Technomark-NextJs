"use client";
import React, { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { getdata } from "@app/api/api";
import Image from "next/image";
import TitleSection from "@/app/component/common/title/title";
import Loading from "@common/loading/loading";
import Homesection from "./_homesection/page";
import TectStartupBg from "@/app/component/tect-startup-bg/tect-startup-bg";
import MethodologyBox from "@/app/component/common/methodologybox/methodologybox";
import Services from "@/app/component/common/services/services";
import CaseStudy from "@/app/component/common/casestudy/casestudy";
import Techicons from "@/app/component/common/techicons/techicons";
import GuaranteePoints from "@/app/component/common/guaranteepoint/guaranteepoint";
import Video from "@/app/component/common/video/video";
import Client from "@/app/component/common/client/client";
import Achievement from "@/app/component/common/achievement/achievement";
import Faq from "@/app/component/common/Faq/faq";
import Singleaward from "@/app/component/common/singleaward/singleaward";
import FormSection from "@app/component/common/formsection/formsection";
import CaseStudyList from "@/app/component/common/CasestudyList/CasestudyList";
import CaseStudyDetail from "@component/common/casestudydetail/casestudydetail";
import Challenges from "@/app/component/common/Challenges/Challenges";
import ScreenSlider from "@component/common/screenslider/screenslider";
import styles from "./home.module.css";
import Herosection from "@component/common/herosection/herosection";
import ProductSolutions from "../component/common/productsolutions/productsolutions";

interface SectionData {
  title?: string;
  subtitle?: string;
}


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

const Page: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeProps | null>(null);
  const pathname = usePathname();

  const fetchData = useCallback(async () => {
    const res = await getdata(pathname);
    if (res) {
      setHomeData(res.data.templateData);
    } else {
      console.log("something went wrong");
    }
  }, [pathname]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
              <Techicons props={homeData.techIcons[0]} />
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
          <section className={`${styles.cmptrustsection} tm-section`}>
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
      default:
        return null;
    }
  };

  return (
    <>
      {homeData ? (
        homeData.sectionsOrder.map((sectionName) => (
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

export default Page;
