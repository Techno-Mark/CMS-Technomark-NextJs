import React from "react";
import styles from "./productsolutions.module.css";
import Image from "next/image";

interface ProductSolutionsProps {
  props: any;
}

const ProductSolutions: React.FC<ProductSolutionsProps> = ({ props }) => {
  const image = props.find((item: any) => item.image)?.image || "";
  const listItems = props.find((item: any) => item["List Items"])?.[
    "List Items"
  ];

  return (
    <div className={`flex flex-wrap items-center`}>
      <div className="w-full md:w-1/2">
        <div
          className={styles.productbg}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* <img src="/images/product-solution.png" alt="" /> */}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className={styles.productsolutionlist}>
          <ul>
            {listItems.map((item: any, index: number) => (
              <li key={index}>
                <div className={styles.scalearea}>
                  <Image
                    src="/images/arrow-right-solution.png"
                    alt="arrow"
                    height={50}
                    width={80}
                  />
                  {item.items.find((item: any) => item.text)
                    ? item.items.find((item: any) => item.text).text
                    : ""}
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
