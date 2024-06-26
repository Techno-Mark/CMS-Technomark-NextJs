import React from "react";
import Button from "@/app/component/common/button/page";
import styles from './homesection.module.css';
import TypeingTexts from '@app/component/common/typeingtexts/TypeingTexts'

interface SectionData {
  title?: string;
  subtitle?: string;
}

interface HomeSectionProps {
  sectionData: SectionData;
}


const Homesection: React.FC<HomeSectionProps> = ({ sectionData }) => {
  
  const typingtext = [
    "Interactive Mobile Apps",
    "IOT Solutions",
    "Custom Enterprice Software",
    "AI/ML",
    "Engaging User Experiance",
  ];

  return (
    <>
      <section className={styles.newhomesection} id="new-home-section">
        <div className={styles.homevideo}>
          <video className="video" loop autoPlay muted>
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={`${styles.hometext} mx-auto max-w-2xl`}>
          <h1 className={styles.maintitle}>{sectionData.title}</h1>
          <TypeingTexts props={typingtext} />
          <Button href="#" text="Book 30 MIN CALL" variant="primary" />
          <div className={styles.linearrow}>
            <img src="/images/line-arrow.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Homesection;
