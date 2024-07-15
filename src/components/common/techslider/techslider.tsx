import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './techslider.module.css';
import Image from 'next/image';
import Button from "@/components/common/button/button";
import NextArrow from '@/components/common/customarrow/next';
import PrevArrow from '@/components/common/customarrow/prev';

interface ImageData {
  src: string;
  alt: string;
}

interface CombineBox {
  images: ImageData[];
}

interface CombineText {
  title: string;
  description: string;
}

interface Slide {
  combineBox: CombineBox;
  combineText: CombineText;
}

interface TechSliderProps {
  props: {
    slides: Slide[];
  };
}

const TechSlider: React.FC<TechSliderProps> = ({ props }) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div id="combine-slide" className={styles.combineslidercontainer}>
      <Slider {...settings}>
        {props.slides.map((slide, index) => (
          <div key={index} className={`${styles.combineboxwrapper}`}>
            <div className={styles.combinebox}>
              <ul>
                {slide.combineBox.images.map((image, imgIndex) => (
                  <li key={imgIndex}>
                    <Image src={image.src} alt={image.alt} width={36} height={36} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.combinetext}>
              <h3>{slide.combineText.title}</h3>
              <p>{slide.combineText.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="viewallbtn">
        <Button href="#" text="HIRE NOW" variant="primary" />
      </div>
    </div>
  );
};

export default TechSlider;
