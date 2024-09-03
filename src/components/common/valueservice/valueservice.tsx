import React, { useEffect } from "react";
import styles from "./valueservice.module.css";
import TitleSection from "@/components/common/title/title";

interface ValueServiceProps {
  props: any;
}

const ValueService: React.FC<ValueServiceProps> = ({ props }) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const dynamicImage = document.getElementById(
      "dynamic-image"
    ) as HTMLImageElement;

    const observer = new IntersectionObserver(
      (entries) => {
        let isAnySectionVisible = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isAnySectionVisible = true;
            if (dynamicImage)
              dynamicImage.src = entry.target.getAttribute("data-image") || "";
          }
        });
        if (!isAnySectionVisible && dynamicImage) {
          dynamicImage.src = "/images/1-Seed.gif";
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const title = props?.title || "";
  const subtitle = props?.subTitle || "";
  const services = props?.services || [];

  return (
    <div className="flex flex-wrap sm:flex-row flex-col">
      <div className={`w-full md:w-1/2 ${styles.stickycol}`}>
        <TitleSection
          sectionData={{
            title: title,
            subtitle: subtitle,
          }}
          titleFirst={true}
          titleClassName="valueservice"
        />
        <div className={`${styles.bottomimage}`}>
          <img
            id="dynamic-image"
            src="/images/1-Seed.gif"
            alt="Dynamic Image"
          />
        </div>
      </div>
      <div className={`w-full md:w-1/2 ${styles.borderleftscroll}`}>
        <div className={`${styles.sectioncontent}`}>
          {services.map((service: any, index: number) => (
            <section
              key={index}
              id={`section${index + 1}`}
              data-image={`/images/${index + 1}-${
                !!service.title ? service.title.split(" ")[0] : "Seed"
              }.gif`}
            >
              <div className={styles.servicesscrollbox}>
                <h2>{index + 1}</h2>
                <h3>{!!service.title ? service.title : ""}</h3>
                <ul>
                  {service?.items
                    .split(",")
                    .map((item: any, itemIndex: number) => (
                      <li key={itemIndex}>
                        <img
                          src="/images/arrow-right-resource.png"
                          alt="arrow"
                        />
                        <p>{item}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueService;
