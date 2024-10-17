import NextArrow from "@/components/common/customarrow/next";
import PrevArrow from "@/components/common/customarrow/prev";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./casestudy.module.css";
import ImageSlider from "./ImageSlider";

interface CaseStudyList {
  title: string;
  image: string;
  text: string;
  subpoints: string[];
  video: string;
  additionalTitle: string;
  additionalPoints: { score: string; description: string }[];
}

interface CaseStudyProps {
  props?: CaseStudyList[];
  setDetailedOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailedImagesUrl: React.Dispatch<React.SetStateAction<string[]>>;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  props,
  setDetailedOpen,
  setDetailedImagesUrl,
}: CaseStudyProps) => {
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
    // draggable: false,
    // swipe: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (current: number) => setCurrentSlide(Math.ceil(current)),
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1.2,
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
    <div className={`mb-20 ${styles.casestudyparent}`}>
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
                  src={caseStudy.image ? caseStudy.image : ""}
                  alt="logo"
                  width={200}
                  height={200}
                />
                <p>{caseStudy.text ? caseStudy.text : ""}</p>
                <ul className={styles.techusetext}>
                  {!!caseStudy.subpoints &&
                    caseStudy.subpoints
                      .split(",")
                      .map((point: string, i: number) => (
                        <li key={i}>
                          <Image
                            src="/images/check-circle.png"
                            alt="check"
                            height={20}
                            width={20}
                            className="-mt-1"
                          />
                          {point}
                        </li>
                      ))}
                </ul>
                <a
                  className={styles.readmore}
                  href={caseStudy.linkUrl ? caseStudy.linkUrl : "#"}
                >
                  {caseStudy.linkText ? caseStudy.linkText : "Read More"}
                </a>
              </div>
              <div className={`${styles.resultarea} relative`}>
                {!!caseStudy.video && caseStudy.video.includes(",") ? (
                  <ImageSlider
                    setDetailedImagesUrl={setDetailedImagesUrl}
                    setDetailedOpen={setDetailedOpen}
                    images={caseStudy.video.split(",")}
                    alt={caseStudy.alt ? caseStudy.alt.split(",") : []}
                  />
                ) : (
                  <div className={styles.videoarea}>
                    <video autoPlay loop muted>
                      <source
                        width="320"
                        height="240"
                        src={
                          caseStudy.video
                            ? caseStudy.video
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
                )}
                <div className={styles.resultview}>
                  <h4>
                    {caseStudy.additionalTitle ? caseStudy.additionalTitle : ""}
                  </h4>
                  <ul
                    className={styles.successratiobox}
                    dangerouslySetInnerHTML={{
                      __html: caseStudy.additionalPoints
                        ? caseStudy.additionalPoints
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
        {/* <Button href="#" text="VIEW ALL" variant="secondary" /> */}
      </div>
    </div>
  );
};

export default CaseStudy;
