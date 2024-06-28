// components/GuaranteePoints/GuaranteePoints.tsx
'use client';
import React, { useEffect, useState } from 'react';
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
}
const commonIcon = '/images/check-circle.png';
const commonAltText = 'check';

const GuaranteePoints: React.FC<any> = ({ props }: any) => {
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
             {props?.data?.map((point: any, index: any) => (
                <div key={index} className={styles.iconTextArea}>
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
