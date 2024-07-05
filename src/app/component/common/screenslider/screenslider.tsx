import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './screenslider.module.css';
import Image from 'next/image';

interface ProjectImage {
    imaegurl: string;
}

interface ProjectScreenProps {
    props: {
        images: ProjectImage[];
    };
    useSlider1: boolean;
}

const ProjectScreen: React.FC<ProjectScreenProps> = ({ props, useSlider1 }) => {
    // Define different settings objects
    const settings1 = {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 3000,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
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

    const settings2 = {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
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

    // Determine which settings object to use based on the useSlider1 flag
    const selectedSettings = useSlider1 ? settings1 : settings2;

    return (
        <div className={useSlider1 ? styles.projectslidewrapper : styles.majorsliderwrapper}>
            <Slider {...selectedSettings}>
                {props.images.map((image, index) => (
                    <div key={index} className={styles.projectimg}>
                        <Image src={image.imaegurl} alt="Mockup" width={600} height={400} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProjectScreen;
