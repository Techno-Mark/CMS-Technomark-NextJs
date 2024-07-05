import React from "react";
import Button from "@/app/component/common/button/button";
import styles from './homesection.module.css';
import TypeingTexts from '@app/component/common/typeingtexts/TypeingTexts'
import Image from "next/image";

interface SectionData {
  title?: string;
  subtitle?: string;
  typingtext: string[];
}

interface HomeSectionProps {
  sectionData: SectionData;
}


const Homesection: React.FC<HomeSectionProps> = ({ sectionData }) => {
  
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
          <TypeingTexts props={sectionData.typingtext} />
          <Button href="#" text="Book 30 MIN CALL" variant="primary" />
          <div className={styles.linearrow}>
            <Image src="/images/line-arrow.svg" alt="arrow" height={130} width={36} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Homesection;
