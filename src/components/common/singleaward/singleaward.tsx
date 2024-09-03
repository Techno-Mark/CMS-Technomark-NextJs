import React from "react";
import styles from "./singleaward.module.css";
import Image from "next/image";

interface AwardItem {
  iconImage: string;
}

interface Award {
  items: AwardItem[];
  keyMultiple: number;
}

interface SingleAwardProps {
  data: Award[];
}

const SingleAward: React.FC<SingleAwardProps> = ({ data }) => {
  return (
    <div className="award-section">
      <ul className={styles.awardlist}>
        {data.map((award, index) => (
          <li key={award.keyMultiple}>
            <Image
              src={
                award.items.length > 0 && award.items[0].iconImage
                  ? award.items[0].iconImage
                  : "/default-image.png"
              }
              alt={`Award ${award.keyMultiple}`}
              width={107}
              height={107}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleAward;
