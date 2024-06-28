"use client";
import GuaranteePoints from "@/app/component/common/guaranteepoint/page";
import Video from "@/app/component/common/video/video";
import Faq from "@app/component/common/Faq/page";
import Achivement from "@app/component/common/achivement/page";
import CaseStudy from "@app/component/common/casestudy/page";
import Client from "@app/component/common/client/page";
import FormSection from "@app/component/common/formsection/formsection";
import MethodologyBox from "@app/component/common/methodologybox/page";
import Services from "@app/component/common/services/page";
import Singleaward from "@app/component/common/singleaward/page";
import Techicons from "@app/component/common/techicons/page";
import TectStartupBg from "@app/component/tect-startup-bg/page";
import Loading from "@common/loading/loading";
import TitleSection from "@component/common/title/page";
import { usePathname } from "next/navigation";
import React, { useEffect, useState,useCallback } from "react";
import { getdata } from "../api/api";
import Homesection from "./_homesection/page";
import styles from "./home.module.css";
import Image from "next/image";

interface SectionData {
  title?: string;
  subtitle?: string;
}

interface HomeProps {
  homeSection: SectionData;
  techstartup: any;
  methodology?: any;
  services?: any;
  casestudy?: any;
  techIcons?: any;
  guarantee?: any;
  guaranteeSection: SectionData;
  client?: any;
  achievement?: any;
  faq?: any;
  awards?: any;
  formsection?: any;
  props: any;
}

const Page: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeProps | null>(null);
  const pathname = usePathname();
  const video = {
    videoUrl: "https://tm-html-phi.vercel.app/assets/images/We%20are_1.mp4",
    subTitle: "We are",
    Title: "TechnoMark",
  };

  // const fetchData = async () => {
  //   const res = await getdata(pathname);
  //   if (res) {
  //     setHomeData(res.data.templateData);
  //   } else {
  //     console.log("something went wrong");
  //   }
  // };

  const fetchData = useCallback(async () => {
    const res = await getdata(window.location.pathname);
    if (res) {
      setHomeData(res.data.templateData);
    } else {
      console.log("something went wrong");
    }
  }, []); 

  useEffect(() => {
    fetchData();
  },[fetchData]);

  return (
    <>
      {homeData != null && (
        <>
          <Homesection sectionData={homeData.homeSection} />
          <TectStartupBg sectionData={homeData.techstartup}/>
          <section className={`${styles.methodology} tm-section bg-white`}>
            <div className={styles.leftbubblecircle}>
              <Image src="/images/gradient-bubble.svg" alt="bubble" height={850} width={850}/>
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
          <section
            className={`${styles.casestudiessection} tm-section bg-white`}
          >
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
          <section className={`${styles.meetdiverse} tm-section `}>
            <div className={styles.rightbubblecircle}>
              <Image src="/images/gradient-bubble.svg" alt="bubble" width={850} height={850}/>
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
                <div className="lg:w-1/2 md:w-full px-4">
                  <GuaranteePoints props={homeData.guarantee[0]} />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full overflow-hidden videoSection">
            <Video props={video} />
          </section>
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
                  title: homeData.client[0].title,
                  subtitle: homeData.client[0].subtitle,
                }}
                titleFirst={false}
                titleClassName="clienttitle"
              />
              <Client props={homeData.client[0]} />
            </div>
          </section>
          <section className={`${styles.cmptrustsection} tm-section `}>
            <div className="container mx-auto">
              <TitleSection
                sectionData={{
                  title: homeData.achievement[0].title,
                  subtitle: homeData.achievement[0].subtitle,
                }}
                titleFirst={true}
                titleClassName="achievementtitle"
              />
              <Achivement props={homeData.achievement[0]} />
            </div>
          </section>
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
          <section className={`${styles.awardsection} tm-section `}>
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
          <section className={`${styles.formsection} tm-section bg-white`}>
            <div className="container mx-auto">
              <FormSection props={homeData.formsection} />
            </div>
          </section>
        </>
      )}
      {!homeData && <Loading />}
    </>
  );
};

export default Page;
