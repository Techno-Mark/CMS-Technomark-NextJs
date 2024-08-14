import React from "react";
import Image from "next/image";
import styles from "./techexpert.module.css";
import TitleSection from "@/components/common/title/title";

interface TechExpertProps {
  props: any;
}

const TechExpert: React.FC<TechExpertProps> = ({ props }) => {
  const title = props.find((item: any) => item.title)?.title || "";
  const image = props.find((item: any) => item.image)?.image || "";
  const expertiseList = props.find((item: any) => item["Expertise List"])?.[
    "Expertise List"
  ];
  return (
    <div className={`container mx-auto ${styles.expertContainer}`}>
      <div className="flex flex-wrap sm:flex-row flex-col">
        <div className={`w-full md:w-1/2 ${styles.expertdetails}`}>
          <TitleSection
            sectionData={{
              title: title,
              subtitle: "",
            }}
            titleClassName="techexperttitle"
          />
          <div className={styles.expertvector}>
            <Image src={image} alt="Expert Image" width={900} height={900} />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {expertiseList.map((expertise: any, index: number) => (
            <div key={index} className={styles.expertlistbox}>
              <Image
                src="/images/tick-circle.svg"
                alt="tick"
                height={45}
                width={45}
              />
              <p>
                {expertise.items.find((item: any) => item.text)
                  ? expertise.items.find((item: any) => item.text).text
                  : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechExpert;
