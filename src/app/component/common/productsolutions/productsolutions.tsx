import React from 'react';
import styles from './productsolutions.module.css'
import Image from 'next/image';

interface ProductSolutionsProps {
    props: {
        listItems: string[];
    };
}

const ProductSolutions: React.FC<ProductSolutionsProps> = ({ props }) => {
    const { listItems } = props;

    return (
        <div className={`flex flex-wrap items-center`}>
            <div className="w-full md:w-1/2">
                <div className={styles.productbg}>
                    {/* <img src="/images/product-solution.png" alt="" /> */}
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className={styles.productsolutionlist}>
                    <ul>
                        {listItems.map((item, index) => (
                            <li key={index}>
                                <div className={styles.scalearea}>
                                    <Image src="/images/arrow-right-solution.png" alt="arrow" height={50} width={80} />
                                    {item}
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
