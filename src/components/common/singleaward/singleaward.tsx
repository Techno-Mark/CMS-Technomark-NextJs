import React from "react"
import styles from "./singleaward.module.css"
import Image from "next/image"

interface AwardItem {
  iconImage: string;
}

// interface Award {
//   items: AwardItem[];
//   keyMultiple: number;
// }

interface SingleAwardProps {
  props: AwardItem[];
}

const SingleAward: React.FC<SingleAwardProps> = ({ props }) => {
  return (
    <div className="award-section pt-8">
      <ul className={styles.awardlist}>
        {props.map((award, index) => (
          <li key={index}>
            <Image
              src={award.iconImage ? award.iconImage : ""}
              alt={`${index}`}
              width={107}
              height={107}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SingleAward
