import React from 'react';
import Image from 'next/image';
import styles from './techbenifits.module.css';
import TitleSection from "@/components/common/title/title";
import Button from "@/components/common/button/button";

interface BenefitProps {
    image: {
        src: string;
        alt: string;
    };
    text: string;
}

interface TechHomeProps {
    title: string;
    subtitle: string;
    url: string;
    heroImage: string;
    benefits: BenefitProps[];
}

interface TechBenefitsProps {
    props: TechHomeProps;
}

const TechBenefits: React.FC<TechBenefitsProps> = ({ props }) => {
    return (
        <div className={`container mx-auto ${styles.benifitContainer}`}>
            <div className="flex flex-wrap items-center">
                <div className={`w-full md:w-1/2 ${styles.benifitdetails}`}>
                    <TitleSection
                        sectionData={{
                            title: props.title,
                            subtitle: props.subtitle,
                        }}
                        titleClassName="techbenifitstitle"
                    />
                    <div className={`${styles.discussbtn}`}>
                    <Button href={props.url} text="LET's DISCUSS" variant="secondary" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className={styles.imageContainer} style={{ backgroundImage: `url(${props.heroImage})` }}>
                        <div className={styles.benefitListWrapper}>
                            {props.benefits.map((benefit, index) => (
                                <div key={index} className={styles.benefitListItem}>
                                    <Image src={benefit.image.src} alt={benefit.image.alt} width={36} height={36} />
                                    <p>{benefit.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TechBenefits;
