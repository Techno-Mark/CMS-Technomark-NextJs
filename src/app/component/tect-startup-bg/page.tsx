import React from 'react';
import Button from "@/app/component/common/button/page";
import styles from './tectstartupbg.module.css'

interface SectionData {
    title?: string;
    subtitle?: string;
}

interface techstartup {
    sectionData: SectionData;
}

const TectStartupBg: React.FC<techstartup> = ({ sectionData }) => {
    return (
        <section className={`${styles.tectstartupbg} tm-section`} id="tectstartupbg">
            <div className={styles.leftradientshape}>
                <img src="/images/left-line-bg.svg" alt="left" />
            </div>
            <div className={styles.rightradientshape}>
                <img src="/images/right-line-bg.svg" alt="right" />
            </div>
            <div className="container mx-auto bg-white relative z-5 max-w-screen-xl">
                <div className={`flex flex-wrap ${styles.techsubcontainer}`}>
                    <div className="lg:w-1/2 md:w-full">
                        <h2 className={`maintitle ${styles.maintitle}`} dangerouslySetInnerHTML={{ __html: sectionData.title }} />
                    </div>
                    <div className="lg:w-1/2 md:w-full py-4">
                        <p className={`sub-title ${styles.subtitle}`}>
                            {sectionData.subtitle}
                        </p>
                        <div className={styles.techbgbtn}>
                            <Button href="#" text='Read more' variant="secondary"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TectStartupBg;
