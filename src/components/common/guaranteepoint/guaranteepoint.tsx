// components/GuaranteePoints/GuaranteePoints.tsx
import React from 'react';
import styles from './GuaranteePoints.module.css';
import Image from 'next/image';

interface guarantee {
    title: string;
    description: string;
}

interface guaranteeProps {
    props?: {
        data: guarantee[];
    };
    isProblemStatement?: boolean; // Optional flag
}

const commonIcon = '/images/check-circle.png';
const commonAltText = 'check';

const GuaranteePoints: React.FC<guaranteeProps> = ({ props, isProblemStatement }) => {
    return (
        <>
            {props?.data?.map((point: guarantee, index: number) => (
                <div key={index} className={`${styles.iconTextArea} ${isProblemStatement ? styles.problemStatement : ''}`}>
                    <div className={styles.inlineIcon}>
                        <div className={styles.checkicon}>
                            <Image src={commonIcon} alt={commonAltText} height={24} width={24}/>
                        </div>
                        <h4>{point.title}</h4>
                    </div>
                    <p>{point.description}</p>
                </div>
            ))}
        </>
    );
};

export default GuaranteePoints;
