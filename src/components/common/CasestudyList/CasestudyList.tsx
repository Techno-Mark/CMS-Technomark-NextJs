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
  props: {
    data: Casestudy[];
  };
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ props }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    "All",
    ...Array.from(new Set(props.data?.map((caseStudy) => caseStudy.category))),
  ];

  const filteredData =
    selectedCategory === "All"
      ? props.data
      : props.data.filter(
          (caseStudy) => caseStudy.category === selectedCategory
        );

  const displayedData = showAll ? filteredData : filteredData?.slice(0, 3);

  return (
    <div className={styles.caseslide} id="case-slide">
      
        <div className={styles.tabContainer}>
          {categories.map((category, index) => (
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
      
      {displayedData?.length > 0 &&
        displayedData.map((caseStudy, index) => (
          <div key={index} className={styles.casebox}>
            <div className={styles.textarea}>
              <Image
                src={caseStudy.image}
                alt="logo"
                width={200}
                height={200}
              />
              <p>{caseStudy.text}</p>
              <ul className={styles.techusetext}>
                {caseStudy.subpoints.map((point, i) => (
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
                  {caseStudy.additionalPoints.map((point, i) => (
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
