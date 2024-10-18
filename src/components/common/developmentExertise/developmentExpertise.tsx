import React from "react"
import TitleSection from "../title/title"
import styles from "./developmentExertise.module.css"
import Image from "next/image"

const DevelopmentExpertise = ({ data }: any) => {
  const { title, mainImage, Expertise } = data
  return (
    <section className="tm-section bg-white">
      <div className="flex container">
        {/* Left Section - Title and Main Image */}
        <div className="w-1/2">
          <div className={`flex ${styles.expertiseTitle} flex-col`}>
            <TitleSection
              sectionData={{
                title,
                subtitle: ""
              }}
              titleClassName={`${styles.expertiseTitle}`}
            />
            <div className="flex relative justify-center h-full items-center">
              <Image
                src="/images/ExpertiseGradient-bubble.svg"
                alt="bubble"
                className="h-full max-h-[390px] object-contain"
                height={350}
                width={450}
              />
              <Image
                alt="Android"
                loading="lazy"
                width="150"
                height="150"
                decoding="async"
                data-nimg="1"
                className="mx-auto absolute"
                src={mainImage}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Expertise List */}
        <div className="w-1/2">
          {Expertise.map((item:any, index:any) => (
            <div key={index} className={styles.servicesscrollbox}>
              <ul>
                <li>
                  <Image
                    src={item.icon}
                    alt={`arrow-item-${index}`}
                    height={30}
                    width={30}
                  />
                  <p>{item.description}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopmentExpertise
