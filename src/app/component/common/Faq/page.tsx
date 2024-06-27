// FaqSection.tsx
"use client";
import React, { useState } from "react";
import styles from "./faq.module.css";

interface faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  props?: {
    data: faq[];
  };
}

const FaqSection: React.FC<FaqSectionProps> = ({ props }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="faq-container"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      {props[0]?.data?.map((faq: any, index: any) => (
        <div key={index} className={`${styles.cardheader} mb-5`}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className={`flex justify-between items-center w-full p-5 ${openIndex === index} ${styles.cardtitle}`}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => handleToggle(index)}
            >
              <div className="">
                <span className="mr-2">{index + 1}.</span>
                {faq.question}
              </div>
              <img
                src={
                  openIndex === index
                    ? "/images/minus-circle.svg"
                    : "/images/plus-circle.svg"
                }
                alt={openIndex === index ? "Collapse" : "Expand"}
                className={styles.faqimg}
              />
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${openIndex === index ? "" : "hidden"}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className={styles.cardbody}>
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
