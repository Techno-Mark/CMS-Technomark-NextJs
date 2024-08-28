/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "./blogDescription.module.css";

interface blogDescProps {
  props: any;
}

const BlogDescription: React.FC<blogDescProps> = ({ props }) => {
  return (
    <div className="container mx-auto">
      <div className="flex relative justify-center text-center gap-10">
        <div
          className={` ${styles.blogDetails} max-w-[75%] text-[var(--secondary--color)] `}
        >
          {!!props && props.description && (
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          )}
        </div>
        <div className="sticky top-0 ml-10 mt-20">
          <img
            src="/images/whatsapp.png"
            className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="social-icon"
          />
          <img
            src="/images/linkdin.png"
            className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="social-icon"
          />
          <img
            src="/images/twitter.png"
            className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="social-icon"
          />
          <img
            src="/images/youtube.png"
            className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="social-icon"
          />
          <img
            src="/images/facebook.png"
            className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="social-icon"
          />
          <img
            src="/images/share.png"
            className="rounded-full mb-7 h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            alt="social-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
