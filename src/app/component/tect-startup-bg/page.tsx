import React from 'react';
import Button from "@/app/component/common/button/page";
import styles from './tectstartupbg.module.css'
import Image from 'next/image';

interface SectionData {
    title?: string;
    subtitle?: string;
}
  
interface techstartup {
    sectionData: SectionData;
}

const TectStartupBg: React.FC<any> = ({ sectionData = { title: '', subtitle: ''} }) => {
    return (
        <section className={`${styles.tectstartupbg} tm-section`} id="tectstartupbg">
            <div className={styles.leftradientshape}>
                <Image src="/images/left-line-bg.svg" alt="left" height={600} width={1920} />
            </div>
            <div className={styles.rightradientshape}>
                <Image src="/images/right-line-bg.svg" alt="right" height={600} width={1920} />
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
