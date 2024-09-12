import React, { useEffect, useState } from "react";
import styles from "./imageSlider.module.css";

const images = [
  "/images/award1.png",
  "/images/award2.png",
  "/images/award3.png",
  "/images/award4.png",
  "/images/award5.png",
  "/images/award6.png",
  "/images/award7.png",
  "/images/award8.png",
  "/images/award9.png",
  "/images/award10.png",
];

const ImageSlider = () => {
  const [reverse1, setReverse1] = useState(false);
  const [reverse2, setReverse2] = useState(true);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setReverse1((prev) => !prev);
    }, 10000); // 10 seconds duration for left to right

    const interval2 = setInterval(() => {
      setReverse2((prev) => !prev);
    }, 10000); // 10 seconds duration for right to left

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const halfLength = Math.ceil(images.length / 2);
  const firstHalf = images.slice(0, halfLength);
  const secondHalf = images.slice(halfLength);

  return (
    <div className="flex flex-col space-y-8">
      {/* First slider (scroll left to right) */}
      <div className={styles.sliderContainer}>
        <div
          className={`${styles.slider} ${
            reverse1 ? styles.scrollRight : styles.scrollLeft
          }`}
        >
          {firstHalf.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>

      {/* Second slider (scroll right to left) */}
      <div className={styles.sliderContainer}>
        <div
          className={`${styles.slider} ${
            reverse2 ? styles.scrollLeft : styles.scrollRight
          }`}
        >
          {secondHalf.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
