import React from 'react';
import styles from './methodologybox.module.css';

interface Detail {
    title: string;
    items?: string[];
}

interface methodology {
    cardNumber: string;
    title: string;
    description: string;
    details: (Detail | string)[];
}

interface MethodologyBoxProps {
    props?: {
        data: methodology[];
    };
}

const MethodologyBox: React.FC<MethodologyBoxProps> = ({ props }: any) => {
    return (
        <div className="flex flex-wrap -mx-4">
            {props?.data?.map((card: any, index: any) => (
                <div key={index} className={`w-full md:w-1/2 lg:w-1/4 ${styles.flipcard}`}>
                    <div className={styles.inner}>
                        <div className={styles.front}>
                            <h3>{card.cardNumber}</h3>
                            <h5 className={styles.cardtitle}>{card.title}</h5>
                            <p className={styles.cardtext}>{card.description}</p>
                        </div>
                        <div className={styles.back}>
                            <ul>
                                {card.details.map((detail: any, detailIndex: any) => (
                                    <li key={detailIndex}>
                                        {typeof detail === 'string' ? detail : detail.title}
                                        {Array.isArray((detail as Detail).items) && (
                                            <ul>
                                                {(detail as Detail).items?.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MethodologyBox;
