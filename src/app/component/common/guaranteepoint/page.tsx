// components/GuaranteePoints/GuaranteePoints.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { getGuaranteeData } from '@app/api/guarantee';
import styles from './GuaranteePoints.module.css';

interface guarantee {
    title: string;
    description: string;
}


interface guaranteeProps {
    props?: {
        data: guarantee[];
    };
}
const commonIcon = '/images/check-circle.png';
const commonAltText = 'check';

const GuaranteePoints: React.FC<guaranteeProps> = ({ props }: any) => {
    // const [points, setPoints] = useState<GuaranteePoint[] | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getGuaranteeData();
    //         setPoints(result.points);
    //     };

    //     fetchData();
    // }, []);

    // if (!points) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
             {props[0]?.data?.map((point: any, index: any) => (
                <div key={index} className={styles.iconTextArea}>
                    <div className={styles.inlineIcon}>
                        <div className={styles.checkicon}>
                            <img src={commonIcon} alt={commonAltText} />
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
