import React from "react"
import Image from "next/image"
import styles from "./techexpert.module.css"
import TitleSection from "@/components/common/title/title"

interface TechExpertProps {
  props: any;
  istechstartupexpert?: any;
}

const TechExpert: React.FC<TechExpertProps> = ({
  props,
  istechstartupexpert
}) => {
  const title = props?.title || ""
  const image = props?.image || ""
  const expertiseList = props?.expertiseList || []
  return (
    <div className={`container mx-auto ${styles.expertContainer}`}>
      <div className="flex flex-wrap sm:flex-row flex-col">
        <div className={`w-full md:w-1/2 ${styles.expertdetails}`}>
          <TitleSection
            sectionData={{
              title,
              subtitle: ""
            }}
            titleClassName="techexperttitle"
            singleLine={true}
          />
          <div className={styles.expertvector}>
            <Image src={image} alt="Expert Image" width={900} height={900} />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {!!expertiseList &&
            expertiseList.map((expertise: any, index: number) => (
              <div
                key={index}
                className={
                  istechstartupexpert ? styles.techstartupbox : styles.expertlistbox
                }
              >
                {istechstartupexpert ? (
                  <Image
                    src="/images/arrow-right-resource.png"
                    height={26}
                    width={26}
                    alt={`arrow-expertise-${index}`}
                    className="mr-2"
                  />
                ) : (
                  <Image
                    src="/images/tick-circle.svg"
                    alt="tick"
                    height={45}
                    width={45}
                  />
                )}
                <p>{expertise.text ? expertise.text : ""}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TechExpert
