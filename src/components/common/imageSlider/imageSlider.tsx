import Image from "next/image";
import React from "react";
import styles from "./imageSlider.module.css";

interface GalleryData {
  title?: string;
  Images: { Images: string }[]; // Array of objects containing 'Images' property
}

interface ImageGalleryProps {
  sectionData: GalleryData;
}

const ImageSlider: React.FC<ImageGalleryProps> = ({ sectionData }) => {
  const images = sectionData.Images;
  const half = Math.ceil(images.length / 2);
  const firstRowImages = images.slice(0, half);
  const secondRowImages = images.slice(half);

  return (
    <section className="bg-white py-8 md:py-24 relative border-t border-b border-[var(--secondary--color)] overflow-hidden">
      <div className={styles.leftbubblecircle}>
        <Image
          src="/images/gradient-bubble.svg"
          alt="bubble"
          height={850}
          width={850}
        />
      </div>
      <div className="container overflow-hidden">
        {sectionData.title && (
          <h3
            className={styles.imageGalleryTitle}
            dangerouslySetInnerHTML={{ __html: sectionData.title || "" }}
          />
        )}
        <div className={styles.sliderTrack}>
          {firstRowImages.map((item, i) => (
            <div key={i} className={styles.slide}>
              <Image
                className="w-auto"
                src={item.Images}
                width={600}
                height={220}
                alt={`Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <div className={`${styles.sliderTrack} ${styles.sliderTrack2}`}>
          {secondRowImages.map((item, i) => (
            <div key={i + firstRowImages.length} className={styles.slide}>
              <Image
                className="w-auto"
                src={item.Images}
                width={600}
                height={220}
                alt={`Image ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
