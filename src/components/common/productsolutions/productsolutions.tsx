import React from "react";
import styles from "./productsolutions.module.css";
import Image from "next/image";

interface ListItem {
  text?: string;
}

interface PropsItem {
  image?: string;
  "List Items"?: {
    items: ListItem[];
  }[];
}

interface ProductSolutionsProps {
  props: PropsItem[];
}

const ProductSolutions: React.FC<ProductSolutionsProps> = ({ props }) => {
  const image = props.find((item) => item.image)?.image || "";
  const listItems =
    props.find((item) => item["List Items"])?.["List Items"] || [];

  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <div
          className={styles.productbg}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="w-full md:w-1/2">
        <div className={styles.productsolutionlist}>
          <ul>
            {listItems.map((listItem, index) => (
              <li key={index}>
                <div className={styles.scalearea}>
                  <Image
                    src="/images/arrow-right-solution.png"
                    alt="arrow"
                    height={50}
                    width={80}
                  />
                  {listItem.items?.find((item) => item.text)?.text || ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSolutions;
