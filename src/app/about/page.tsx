'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TitleSection from '@component/common/title/page';
import Servicesection from './_servicesection/page'


interface SectionData {
    title?: string;
    subtitle?: string;
}

interface HomeProps {
    serviceSection: SectionData;
}

const Page: React.FC = () => {
    const [data, setData] = useState<HomeProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/section.json');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching section data:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="coreservices tm-section">
                <div className="container mx-auto">
                    <TitleSection sectionData={data.serviceSection} titleFirst={false} />
                    <Servicesection />
                </div>
            </section>
        </>
    );
}

export default Page;
