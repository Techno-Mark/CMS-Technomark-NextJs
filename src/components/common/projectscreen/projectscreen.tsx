import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from './projectscreen.module.css'
import Image from 'next/image';

interface ProjectImage {
    imaegurl: string;
}

interface ProjectScreenProps {
    props: {
        images: ProjectImage[];
    };
}

const ProjectScreen: React.FC<ProjectScreenProps> = ({ props }) => {
    const settings = {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 3000,
        infinite: false,
        autoplaySpeed: 1000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1.8,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.projectslidewrapper}>
            <Slider {...settings}>
                {props.images.map((image, index) => (
                    <div key={index} className={styles.projectSlideInner}>
                        <div className={styles.projectimg}>
                            <Image src={image.imaegurl} alt="Mockup" width={600} height={400} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectScreen;
