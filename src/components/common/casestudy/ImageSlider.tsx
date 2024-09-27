import React, { useRef } from "react"
import Slider from "react-slick"
import styles from "./imageslider.module.css"
import Image from "next/image"

const ImageSlider = ({
  images,
  setDetailedOpen,
  setDetailedImagesUrl,
  small = false
}: {
  images: string[];
  setDetailedOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDetailedImagesUrl: React.Dispatch<React.SetStateAction<string[]>>
  small?: boolean
}) => {
  const imageSlider = useRef(null)

  const imgSliderSettings = {
    dots: false,
    infinite: images.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1,
    autoplaySpeed: 2000,
    variableWidth: false,
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

  const handleOverlayClick = () => {
    setDetailedOpen(true)
    setDetailedImagesUrl(images)
  }

  return (
    <div className={small ? styles.sliderContainer2 : styles.sliderContainer1}>
      <Slider ref={imageSlider} {...imgSliderSettings}>
        {images.map((item, i) => (
          <div className={styles.imageSlide} key={i}>
            {/* Use item as key if unique */}
            <Image width={small ? 350 : 500} src={item} alt="" height={10} />
            <div className={styles.overlay} onClick={handleOverlayClick}>
              <Image
                src="/images/maximize-4.svg"
                alt={`${item}-${i}`}
                width={40}
                height={40}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ImageSlider
