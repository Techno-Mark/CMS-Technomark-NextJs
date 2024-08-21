import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./casestudy.module.css";
import Image from "next/image";
import NextArrow from "@/components/common/customarrow/next";
import PrevArrow from "@/components/common/customarrow/prev";
import Button from "../button/button";

interface CaseStudy {
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
    data: CaseStudy[];
  };
}

const CaseStudy: React.FC<CaseStudyProps> = ({ props }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1.2,
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
    afterChange: (current: number) => setCurrentSlide(Math.ceil(current)),
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
    <div className={styles.casestudyparent}>
      <div className={styles.caseslide} id="case-slide">
        <Slider {...settings}>
          {props?.map((caseStudy: any, index: number) => (
            <div
              key={index}
              className={`${styles.casebox} ${
                currentSlide === index ? styles.activeSlide : ""
              }`}
            >
              <div className={styles.textarea}>
                <Image
                  src={
                    caseStudy.items.find((item: any) => item.image)
                      ? caseStudy.items.find((item: any) => item.image).image
                      : ""
                  }
                  alt="logo"
                  width={200}
                  height={200}
                />
                <p>
                  {caseStudy.items.find((item: any) => item.text)
                    ? caseStudy.items.find((item: any) => item.text).text
                    : ""}
                </p>
                <ul className={styles.techusetext}>
                  {caseStudy.items.find((item: any) => item.subPoints) &&
                    caseStudy.items
                      .find((item: any) => item.subPoints)
                      .subPoints.split(",")
                      .map((point: string, i: number) => (
                        <li key={i}>
                          <Image
                            src="/images/check-circle.png"
                            alt="check"
                            height={20}
                            width={20}
                          />
                          {point}
                        </li>
                      ))}
                </ul>
                <a
                  className={styles.readmore}
                  href={
                    caseStudy.items.find((item: any) => item.linkUrl)
                      ? caseStudy.items.find((item: any) => item.linkUrl)
                          .linkUrl
                      : "#"
                  }
                >
                  {caseStudy.items.find((item: any) => item.linkText)
                    ? caseStudy.items.find((item: any) => item.linkText)
                        .linkText
                    : "Read More"}
                </a>
              </div>
              <div className={styles.resultarea}>
                <div className={styles.videoarea}>
                  <video autoPlay loop muted>
                    <source
                      width="320"
                      height="240"
                      src={
                        caseStudy.items.find((item: any) => item.video)
                          ? caseStudy.items.find((item: any) => item.video)
                              .video
                          : "/images/Case-study.mp4"
                      }
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
                  <h4>
                    {caseStudy.items.find((item: any) => item.additionalTitle)
                      ? caseStudy.items.find(
                          (item: any) => item.additionalTitle
                        ).additionalTitle
                      : ""}
                  </h4>
                  <ul
                    className={styles.successratiobox}
                    dangerouslySetInnerHTML={{
                      __html: caseStudy.items.find(
                        (item: any) => item.additionalPoints
                      )
                        ? caseStudy.items.find(
                            (item: any) => item.additionalPoints
                          ).additionalPoints
                        : "",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mx-auto viewallbtn">
        <Button href="#" text="VIEW ALL" variant="secondary" />
      </div>
    </div>
  );
};

export default CaseStudy;
