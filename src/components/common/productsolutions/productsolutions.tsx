import React from "react"
import styles from "./productsolutions.module.css"
import Image from "next/image"

interface ListItem {
  text?: string;
}

interface PropsItem {
  image?: string;
  listItems?: ListItem[];
}

interface ProductSolutionsProps {
  props: PropsItem;
}

const ProductSolutions: React.FC<ProductSolutionsProps> = ({ props }) => {
  const image = props?.image || ""
  const listItems = props.listItems ? props.listItems : []

  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-5/12">
        <div
          className={styles.productbg}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="w-full md:w-7/12">
        <div className={styles.productsolutionlist}>
          <ul>
            {listItems.map((listItem, index) => (
              <li key={index}>
                <div className={`${styles.scalearea}` }>{/* text-[13px] */}
                  <Image
                    src="/images/arrow-right-solution.png"
                    alt={`arrow-${index}`}
                    height={40}
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
  )
}

export default ProductSolutions
