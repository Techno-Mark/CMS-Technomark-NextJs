import React, { useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";

interface faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  props?: {
    data: faq[];
  };
}

const Faq: React.FC<FaqSectionProps> = ({ props }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={styles.faqcontainer}
      id="accordion-collapse"
      data-accordion="collapse"
    >
      {props?.map((faq: any, index: any) => (
        <div key={index} className={`${styles.cardheader} mb-5`}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className={`flex justify-between items-center w-full p-5 ${styles.cardtitle}`}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => handleToggle(index)}
            >
              <div className={`${styles.questionText} flex`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.items.find((item: any) => item.question)?.question || ""}
              </div>
              <Image
                src={
                  openIndex === index
                    ? "/images/minus-circle.svg"
                    : "/images/plus-circle.svg"
                }
                alt={openIndex === index ? "Collapse" : "Expand"}
                className={styles.faqimg}
                height={36}
                width={36}
              />
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openIndex === index ? styles.expanded : styles.collapsed
            }`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className={`${styles.cardbody} ml-5 mb-5`}>
              <p>{faq.items.find((item: any) => item.answer)?.answer || ""}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
