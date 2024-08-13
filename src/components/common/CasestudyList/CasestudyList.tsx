import Image from "next/image";
import { useState } from "react";
import styles from "./CasestudyList.module.css";

interface Casestudy {
  category: string;
  title: string;
  image: string;
  text: string;
  subpoints: string[];
  video: string;
  additionalTitle: string;
  additionalPoints: { score: string; description: string }[];
}

interface CaseStudyListProps {
  props: any;
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ props }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    "All",
    ...Array.from(
      new Set(
        props.find((item: any) => item.Buttons)
          ? props
              .find((item: any) => item.Buttons)
              .Buttons.map(
                (entry: any) =>
                  entry.items.find((item: any) => item.buttonText).buttonText
              )
          : []
      )
    ),
  ];

  const filteredData =
    selectedCategory === "All"
      ? props.find((item: any) => item.Data)
        ? props.find((item: any) => item.Data).Data
        : []
      : props.find((item: any) => item.Data)
      ? props
          .find((item: any) => item.Data)
          .Data.filter(
            (caseStudy: any) =>
              caseStudy.items.find((item: any) => item.category).category ===
              selectedCategory
          )
      : [];

  const displayedData = showAll ? filteredData : filteredData.slice(0, 3);

  return (
    <div className={styles.caseslide} id="case-slide">
      <div className={styles.tabContainer}>
        {categories.map((category: any, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              selectedCategory === category ? styles.activeTab : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {displayedData.map((caseStudy: any, index: number) => (
        <div key={index} className={styles.casebox}>
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
                  ? caseStudy.items.find((item: any) => item.linkUrl).linkUrl
                  : "#"
              }
            >
              {caseStudy.items.find((item: any) => item.linkText)
                ? caseStudy.items.find((item: any) => item.linkText).linkText
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
                      ? caseStudy.items.find((item: any) => item.video).video
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
                  ? caseStudy.items.find((item: any) => item.additionalTitle)
                      .additionalTitle
                  : ""}
              </h4>
              <ul
                className={styles.successratiobox}
                dangerouslySetInnerHTML={{
                  __html: caseStudy.items.find(
                    (item: any) => item.additionalPoints
                  )
                    ? caseStudy.items.find((item: any) => item.additionalPoints)
                        .additionalPoints
                    : "",
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <button
        className={`${styles.tabButton} ${styles.viewbtn} ${
          showAll ? styles.activeTab : ""
        } mx-auto`}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "VIEW ALL"}
      </button>
    </div>
  );
};

export default CaseStudyList;
