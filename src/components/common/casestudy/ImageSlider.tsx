import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./imageslider.module.css";

const ImageSlider = ({
  images,
  setDetailedOpen,
  setDetailedImagesUrl,
}: {
  images: string[];
  setDetailedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailedImagesUrl: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const image_slider = useRef(null);

  const img_slider_settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    pauseOnHover: true,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={image_slider} {...img_slider_settings}>
        {images.map((item, i: number) => (
          <div className={styles.imageSlide} key={i}>
            <img width={500} src={item} alt="" />
            <div
              className={styles.overlay}
              onClick={() => {
                setDetailedOpen(true);
                setDetailedImagesUrl(images);
              }}
            >
              <img src="/images/maximize-4.svg" alt="maximize" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
