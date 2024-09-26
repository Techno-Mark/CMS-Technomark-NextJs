import React from "react"
import styles from "./blogDescription.module.css"
import Link from "next/link"
import Image from "next/image"

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
      <div className="sticky top-[75px] ml-10 md:ml-14 mt-20 self-start">
        {["whatsapp", "linkdin", "twitter", "youtube", "facebook", "share"].map(
          (icon, index) => (
            <Link key={index} href={"/"} target="_blank">
              <Image
                key={index}
                src={`/images/${icon}.png`}
                className="rounded-full mb-7 h-[40px] w-[40px]"
                alt={`${icon}-icon`}
              />
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default BlogDescription
