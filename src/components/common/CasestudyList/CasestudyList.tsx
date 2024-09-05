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
        !!props.buttons
          ? props.buttons.map((entry: any) => entry.buttonText)
          : []
      )
    ),
  ];

  const filteredData =
    selectedCategory === "All"
      ? !!props.data
        ? props.data
        : []
      : !!props.data
      ? props.data.filter(
          (caseStudy: any) => caseStudy.category === selectedCategory
        )
      : [];

  // Display 3 items by default, show all if "View All" is clicked
  const displayedData = showAll ? filteredData : filteredData.slice(0, 3);

  return (
    <div className={styles.caseslide} id="case-slide">
      {/* <div className={styles.tabContainer}>
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
      </div> */}
      {displayedData.map((caseStudy: any, index: number) => (
        <div key={index} className={styles.casebox}>
          <div className={styles.textarea}>
            <Image
              src={!!caseStudy.image ? caseStudy.image : ""}
              alt="logo"
              width={200}
              height={200}
            />
            <p>{!!caseStudy.text ? caseStudy.text : ""}</p>
            <ul className={styles.techusetext}>
              {!!caseStudy.subPoints &&
                caseStudy.subPoints
                  .split(",")
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
              href={!!caseStudy.linkUrl ? caseStudy.linkUrl : "#"}
            >
              {!!caseStudy.linkText ? caseStudy.linkText : "Read More"}
            </a>
          </div>
          <div className={styles.resultarea}>
            <div className={styles.videoarea}>
              <video autoPlay loop muted>
                <source
                  width="320"
                  height="240"
                  src={
                    !!caseStudy.video
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
            <div className={styles.resultview}>
              <h4>
                {!!caseStudy.additionalTitle ? caseStudy.additionalTitle : ""}
              </h4>
              <ul
                className={styles.successratiobox}
                dangerouslySetInnerHTML={{
                  __html: !!caseStudy.additionalPoints
                    ? caseStudy.additionalPoints
                    : "",
                }}
              />
            </div>
          </div>
        </div>
      ))}
      {!showAll && (
        <button
          className={`${styles.tabButton} ${styles.viewbtn} mx-auto`}
          onClick={() => setShowAll(true)}
        >
          VIEW ALL
        </button>
      )}
    </div>
  );
};

export default CaseStudyList;
