import Image from "next/image"
import TitleSection from "../title/title"
import styles from "./techexpert.module.css"

interface TechExpertProps {
  props: any;
  istechstartupexpert?: any;
}

const TechExpertForm: React.FC<TechExpertProps> = ({ props }) => {
  return (
    <div className={`mx-auto ${styles.expertContainer}`}>
      <div className="flex flex-col w-full">
        {!!props &&
          props.map((i: any, index: number) => (
            <div key={index}>
              <div className={`w-full ${styles.expertdetails}`}>
                <TitleSection
                  sectionData={{
                    title: i.title ? i.title : "",
                    subtitle: ""
                  }}
                  titleClassName="techexperttitle"
                  singleLine={true}
                />
              </div>
              <div className="w-full">
                {!!i.details &&
                  [...i.details.matchAll(/<li>(.*?)<\/li>/g)]
                    .map((match) => match[1])
                    .map((expertise: any, index: number) => (
                      <div key={index} className={styles.techstartupbox}>
                        <Image
                          src="/images/arrow-right-resource.png"
                          height={26}
                          width={26}
                          alt="arrow"
                          className="mr-2"
                        />
                        <p>{expertise || ""}</p>
                      </div>
                    ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default TechExpertForm
