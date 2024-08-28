import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./screenslider.module.css";
import Image from "next/image";

interface ImageItem {
  imageUrl: string;
}

interface ScreenSliderProps {
  props: {
    items: ImageItem[];
  }[];
  useSlider1: boolean;
}

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
    { breakpoint: 1450, settings: { slidesToShow: 2 } },
    { breakpoint: 1399, settings: { slidesToShow: 1.8 } },
    { breakpoint: 1199, settings: { slidesToShow: 1.5 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
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
    { breakpoint: 1450, settings: { slidesToShow: 1 } },
    { breakpoint: 1399, settings: { slidesToShow: 1 } },
    { breakpoint: 1199, settings: { slidesToShow: 1 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

const ScreenSlider: React.FC<ScreenSliderProps> = ({ props, useSlider1 }) => {
  const selectedSettings = useSlider1 ? settings1 : settings2;

  return (
    <div
      className={
        useSlider1 ? styles.projectslidewrapper : styles.majorsliderwrapper
      }
    >
      <Slider {...selectedSettings}>
        {props.flatMap(({ items }, index) =>
          items.map((item, itemIndex) => (
            <div key={`${index}-${itemIndex}`} className={styles.projectimg}>
              <Image
                src={item.imageUrl}
                alt={`Slide image ${index}-${itemIndex}`}
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default ScreenSlider;
