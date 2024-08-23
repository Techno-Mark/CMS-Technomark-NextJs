import Image from "next/image";
import React from "react";
import styles from "./blogDescription.module.css";

interface blogdescsection {
  mainHeading?: string;
  subtitle?: string;
  description?: string;
}

interface blogDescProps {
  props: {
    data: blogdescsection[];
  }[];
}

const BlogDescription: React.FC<blogDescProps> = ({ props }) => {
  console.log("🚀 ~ props:", props[0].data[0].mainHeading);
  return (
    <div className="container mx-auto">
      <div className="flex relative justify-end text-center">
        <div
          className={` ${styles.blogDetails} max-w-[90%] text-[var(--secondary--color)] `}
        >
          {props[0].data[0].mainHeading && (
            <h3
              className={`${styles.mainHeading}`}
              dangerouslySetInnerHTML={{ __html: props[0].data[0].mainHeading }}
            />
          )}
          {props[0].data[0].subtitle && (
            <i
              className={`${styles.subtitle}`}
              dangerouslySetInnerHTML={{ __html: props[0].data[0].subtitle }}
            />
          )}
          {props[0].data[0].description && (
            <p
              className={`${styles.description}`}
              dangerouslySetInnerHTML={{ __html: props[0].data[0].description }}
            />
          )}
        </div>
        <div className="sticky top-0 ml-10 mt-20">
          <Image
            src="/images/whatsapp.png"
            width={50}
            height={50}
            className="rounded-full mb-7"
            alt="social-icon"
          />
          <Image
            src="/images/linkdin.png"
            width={50}
            height={50}
            className="rounded-full mb-7"
            alt="social-icon"
          />
          <Image
            src="/images/twitter.png"
            width={50}
            height={50}
            className="rounded-full mb-7"
            alt="social-icon"
          />
          <Image
            src="/images/youtube.png"
            width={50}
            height={50}
            className="rounded-full mb-7"
            alt="social-icon"
          />
          <Image
            src="/images/facebook.png"
            width={50}
            height={50}
            className="rounded-full mb-7"
            alt="social-icon"
          />
          <Image
            src="/images/share.png"
            width={50}
            height={50}
            className="rounded-full mb-7"
            alt="social-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
