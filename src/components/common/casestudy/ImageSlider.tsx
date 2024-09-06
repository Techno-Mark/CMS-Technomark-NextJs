import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./imageslider.module.css";

const ImageSlider = ({ images }: { images: string[] }) => {
  const image_slider = useRef(null);

  const img_slider_settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={image_slider} {...img_slider_settings}>
        {images.map((item, i: number) => (
          <div key={i}>
            <img width={500} src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
