import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./techslider.module.css";
import Image from "next/image";
import Button from "@/components/common/button/button";
import NextArrow from "@/components/common/customarrow/next";
import PrevArrow from "@/components/common/customarrow/prev";

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

interface TechSliderProps {
  props: any;
}

const TechSlider: React.FC<TechSliderProps> = ({ props }) => {
  const slides = props.find((item: any) => item.Slides)?.Slides || [];
  const buttonText =
    props.find((item: any) => item.buttonText)?.buttonText || "";

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
        {slides.map((slide: any, index: number) => (
          <div key={index} className={`${styles.combineboxwrapper}`}>
            <div className={styles.combinebox}>
              <ul>
                <li className="flex gap-4">
                  <Image
                    src={
                      slide.items.find((item: any) => item.firstImage)
                        ? slide.items.find((item: any) => item.firstImage)
                            .firstImage
                        : ""
                    }
                    alt=""
                    width={36}
                    height={36}
                  />
                  <Image
                    src={"/images/plus-icon.svg"}
                    alt="Plus"
                    width={36}
                    height={36}
                  />
                  <Image
                    src={
                      slide.items.find((item: any) => item.secondImage)
                        ? slide.items.find((item: any) => item.secondImage)
                            .secondImage
                        : ""
                    }
                    alt=""
                    width={36}
                    height={36}
                  />
                </li>
              </ul>
            </div>
            <div className={styles.combinetext}>
              <h3>
                {slide.items.find((item: any) => item.title)
                  ? slide.items.find((item: any) => item.title).title
                  : ""}
              </h3>
              <p>
                {slide.items.find((item: any) => item.description)
                  ? slide.items.find((item: any) => item.description)
                      .description
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="viewallbtn">
        <Button href="#" text={buttonText} variant="primary" />
      </div>
    </div>
  );
};

export default TechSlider;
