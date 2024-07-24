import React from 'react';
import styles from './tectstartupbg.module.css';
import Image from 'next/image';
import Button from '../common/button/button';

interface SectionData {
    title?: string;
    subtitle?: string;
    isCaseStudy?: boolean;
}

interface TectStartupBgProps {
    sectionData: SectionData;
}

const TectStartupBg: React.FC<TectStartupBgProps> = ({ sectionData = { title: '', subtitle: '', isCaseStudy: false } }) => {
    const containerClassNames = `flex flex-wrap ${styles.techsubcontainer} ${sectionData.isCaseStudy ? `flex-col ${styles.techcasestudycontainer}` : ''}`;

    const safeTitle = sectionData.title || '';

    return (
        <section className={`${styles.tectstartupbg} tm-section`} id="tectstartupbg">
            <div className={styles.leftradientshape}>
                <Image src="/images/left-line-bg.svg" alt="left" height={600} width={1920} />
            </div>
            <div className={styles.rightradientshape}>
                <Image src="/images/right-line-bg.svg" alt="right" height={600} width={1920} />
            </div>
            <div className={` ${styles.container} mx-auto bg-white relative z-5`}>
                <div className={containerClassNames}>
                    {sectionData.isCaseStudy ? (
                        // Case Study Detail Page Layout
                        <>
                            <div className="w-full">
                                <h2 className={`maintitle !text-center ${styles.maintitle}`} dangerouslySetInnerHTML={{ __html: safeTitle }} />
                            </div>
                            <div className="w-full">
                                <p className={`sub-title !text-center ${styles.subtitle}`}>
                                    {sectionData.subtitle}
                                </p>
                            </div>
                        </>
                    ) : (
                        // Default Home Page Layout
                        <>
                            <div className="lg:w-1/2 md:w-full">
                                <h2 className={`maintitle ${styles.maintitle} `} dangerouslySetInnerHTML={{ __html: safeTitle }} />
                            </div>
                            <div className="lg:w-1/2 md:w-full py-4">
                                <p className={`sub-title ${styles.subtitle}`}>
                                    {sectionData.subtitle}
                                </p>
                                <div className={styles.techbgbtn}>
                                    <Button href="#" text='Read more' variant="secondary" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TectStartupBg;
