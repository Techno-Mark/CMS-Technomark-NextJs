import React from 'react';
import Image from 'next/image';
import TitleSection from "@/components/common/title/title";
import Button from "@/components/common/button/button";
import styles from './herosection.module.css'

interface HeroSectionProps {
    props: {
        label: string;
        title: string;
        subtitle: string;
        url: string;
        heroImage: string;
        techimage: string;
    };
    istechnology?: boolean;
}

const Herosection: React.FC<HeroSectionProps> = ({ props, istechnology }) => {
    if (istechnology) {
        return (
            <>
                <div className={styles.techimgcontainer}>
                    <Image src={props.techimage} alt="" width={1920} height={160}/>
                </div>
                <div className={`container mx-auto ${styles.techherocontainer}`}>
                    <div className={`flex justify-center ${styles.herotechimg}`}>
                        <Image src={props.heroImage} alt="hero image" height={160} width={160} />
                    </div>
                    <TitleSection
                        sectionData={{
                            title: props.title,
                            subtitle: props.subtitle,
                        }}
                        titleClassName="techherosectiontitle"
                    />
                    <Button href={props.url} text="HIRE NOW" variant="secondary" />
                </div>
            </>
        )
    }
    return (
        <div className={`container mx-auto ${styles.herocontainer}`}>
            <div className="flex flex-wrap sm:flex-row flex-col-reverse items-center">
                <div className="w-full md:w-1/2">
                    <p className={styles.label}>{props.label}</p>
                    <TitleSection
                        sectionData={{
                            title: props.title,
                            subtitle: props.subtitle,
                        }}
                        titleClassName="herosectiontitle"
                    />
                    <Button href={props.url} text="Get Free Consultation" variant="primary" />
                </div>
                <div className="w-full md:w-1/2">
                    <div className={styles.imagecontainer}>
                        <Image src={props.heroImage} alt="Hero Image" width={500} height={700} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herosection;
