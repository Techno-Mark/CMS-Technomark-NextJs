/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./blogDescription.module.css";

interface BlogDescProps {
  description: string;
}

const BlogDescription: React.FC<{ props: BlogDescProps }> = ({ props }) => {
  return (
    <div className="relative container mx-auto flex justify-center">
      {/* Left Section: Blog Details */}
      <div
        className={`${styles.blogDetails} text-center max-w-[75%] text-[var(--secondary--color)]`}
      >
        {props?.description && (
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        )}
      </div>

      {/* Right Section: Sticky Social Icons */}
      <div className="sticky top-[75px] ml-10 mt-20 self-start">
        {["whatsapp", "linkdin", "twitter", "youtube", "facebook", "share"].map(
          (icon, index) => (
            <img
              key={index}
              src={`/images/${icon}.png`}
              className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
              alt={`${icon}-icon`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BlogDescription;
