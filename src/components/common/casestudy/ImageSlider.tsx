import React, { useRef } from "react"
import Slider from "react-slick"
import styles from "./imageslider.module.css"

const ImageSlider = ({
  images,
  setDetailedOpen,
  setDetailedImagesUrl,
  small = false
}: {
  images: string[];
  setDetailedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailedImagesUrl: React.Dispatch<React.SetStateAction<string[]>>;
  small?: boolean;
}) => {
  const imageSlider = useRef(null)

  const imgSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      }
    ]
  }
  return (
    <div className={small ? styles.sliderContainer2 : styles.sliderContainer1}>
      <Slider ref={imageSlider} {...imgSliderSettings}>
        {images.map((item, i: number) => (
          <div className={styles.imageSlide} key={i}>
            <img width={small ? 350 : 500} src={item} alt="" />
            <div
              className={styles.overlay}
              onClick={() => {
                setDetailedOpen(true)
                setDetailedImagesUrl(images)
              }}
            >
              <img src="/images/maximize-4.svg" alt="maximize" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
