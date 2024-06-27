"use client"
import Button from "@/app/component/common/button/page";
import { NextArrow, PrevArrow } from "@component/common/customarrow/page";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./casestudy.module.css";

interface casestudy {
  title: string;
  image: string;
  text: string;
  subpoints: string[];
  video: string;
  additionalTitle: string;
  additionalPoints: { score: string; description: string }[];
}

interface CaseStudyProps {
  props?: {
    data: casestudy[];
  };
}

const CaseStudy: React.FC<CaseStudyProps> = ({ props }: any) => {
  const [currentslide, setcurrentslide] = useState(0);
  const settings = {
    slidesToShow: 1.4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: false,
    draggable: false,
    swipe: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (current: number) => setcurrentslide(current),
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.caseslide} id="case-slide">
        <Slider {...settings}>
          {props[0]?.data?.map((caseStudy: any, index: any) => (
            <div
              key={index}
              className={`${styles.casebox} ${
                currentslide === index ? styles.activeSlide : ""
              }`}
            >
              <div className={styles.textarea}>
                <img src={caseStudy.image} alt="logo" />
                <p>{caseStudy.text}</p>
                <ul className={styles.techusetext}>
                  {caseStudy.subpoints.map((point: any, i: any) => (
                    <li key={i}>
                      <img src="/images/check-circle.png" alt="check" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a className={styles.readmore} href="#">
                  read more
                </a>
              </div>
              <div className={styles.resultarea}>
                <div className={styles.videoarea}>
                  <video autoPlay loop muted>
                    <source
                      width="320"
                      height="240"
                      src={caseStudy.video}
                      type="video/mp4"
                    />
                  </video>
                  <div className={styles.playbtn}>
                    <svg
                      width="24"
                      height="27"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.9302 13.4651L0.732501 26.8583L0.732502 0.0719318L23.9302 13.4651Z"
                        fill="#168944"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.resultview}>
                  <h4>{caseStudy.additionalTitle}</h4>
                  <ul className={styles.successratiobox}>
                    {caseStudy.additionalPoints.map((point: any, i: any) => (
                      <li key={i}>
                        <p>{point.score}</p>
                        <span>{point.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container mx-auto viewallbtn">
        <Button href="#" text="VIEW ALL" variant="secondary" />
      </div>
    </>
  );
};

export default CaseStudy;
