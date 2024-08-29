import React, { useState } from "react";
import styles from "./faq.module.css";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqData {
  items: FaqItem[];
  keyMultiple: number;
}

interface FaqProps {
  data: FaqData[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqcontainer} id="accordion-collapse" data-accordion="collapse">
      {data.map((faqData, index) => {
        const question = faqData.items.find((item) => item.question)?.question || "";
        const answer = faqData.items.find((item) => item.answer)?.answer || "";

        return (
          <div key={faqData.keyMultiple} className={`${styles.cardheader} mb-5`}>
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
                  <span>{String(faqData.keyMultiple).padStart(2, "0")}</span>
                  {question}
                </div>
                <Image
                  src={openIndex === index ? "/images/minus-circle.svg" : "/images/plus-circle.svg"}
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
                <p>{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
