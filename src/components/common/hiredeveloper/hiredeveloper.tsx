import React from 'react';
import styles from './HireDeveloper.module.css';
import Image from 'next/image';

interface DeveloperType {
    type: string;
    hoursPerMonth: string;
    image: {
        src: string;
        alt: string;
    };
    details: string[];
    link: {
        url: string;
        text: string;
    };
}

interface HireDeveloperProps {
    props: {
        developerTypes: DeveloperType[];
    };
}

const HireDeveloper: React.FC<HireDeveloperProps> = ({ props }) => {
    const { developerTypes } = props;

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                {developerTypes.map((developer, index) => (
                    <div key={index} className="w-full md:w-1/3 p-4">
                        <div className={`${styles.devTimeBox}`}>
                            <div className={styles.devloperimg}>
                                <Image src={developer.image.src} alt={developer.image.alt} width={125} height={105}/>
                            </div>
                            <h2>{developer.type}</h2>
                            <p>{developer.hoursPerMonth}</p>
                            <ul className="list-none">
                                {developer.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-center my-2">
                                        <Image src="/images/arrow-right-resource.png" height={26} width={26} alt="arrow" className="mr-2" />
                                        <p>{detail}</p>
                                    </li>
                                ))}
                            </ul>
                            <a href={developer.link.url} className={`${styles.roundedBtn} rounded-btn btn-w-100`}>
                                {developer.link.text}
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HireDeveloper;
