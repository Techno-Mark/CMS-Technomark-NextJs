import Image from "next/image"
import React from "react"
import styles from "./techicons.module.css"

interface TechIcon {
  src: string;
  alt: string;
  name: string;
}

interface TechIconProps {
  data: TechIcon[];
}

const TechIcons: React.FC<TechIconProps> = ({ data }) => {
  return (
    <div className={styles.meetgridicon}>
      <ul>
        {data?.map((tech: any, index: any) => {
          return (
            <li key={index}>
              <Image
                src={tech.icon}
                alt={tech.title}
                width={80}
                height={80}
                className="w-20 h-20 mx-auto"
              />
              <p>{tech.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TechIcons
