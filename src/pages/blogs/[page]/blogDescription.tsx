/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./blogDescription.module.css";

interface BlogDescProps {
  description: string;
}

const BlogDescription: React.FC<{ props: BlogDescProps }> = ({ props }) => {
  return (
    <div className="container mx-auto">
      <div className="flex relative justify-center text-center gap-10">
        <div
          className={`${styles.blogDetails} max-w-[75%] text-[var(--secondary--color)]`}
        >
          {props?.description && (
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          )}
        </div>
        <div className="sticky top-[65px] ml-10 mt-20">
          {[
            "whatsapp",
            "linkdin",
            "twitter",
            "youtube",
            "facebook",
            "share",
          ].map((icon, index) => (
            <img
              key={index}
              src={`/images/${icon}.png`}
              className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
              alt={`${icon}-icon`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
