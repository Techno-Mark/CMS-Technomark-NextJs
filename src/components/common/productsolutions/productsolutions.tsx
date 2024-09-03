import React from "react";
import styles from "./productsolutions.module.css";
import Image from "next/image";

interface PropsItem {
  image?: string;
  listItems:  [{text:string}];
}

interface ProductSolutionsProps {
  props: PropsItem;
}

const ProductSolutions: React.FC<ProductSolutionsProps> = ({ props }) => {
  const image = props?.image || "";
  const listItems =
    props?.listItems || [];

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
                  {listItem?.text || ""}
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
