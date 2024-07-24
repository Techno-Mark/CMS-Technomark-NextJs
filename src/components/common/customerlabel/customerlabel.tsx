import React from 'react';
import Image from "next/image"; 
import styles from './customerlabel.module.css'

const CustomerLabel: React.FC = () => {
  return (
    <div className={styles.customerfixedlabel}>
        <h5>100%</h5>
        <p>Customer Satisfaction</p>
        <Image src="/images/gradient-line.png" alt='Gradientline' width={5} height={48} />
    </div>
  );
}

export default CustomerLabel;
