import React, { useState } from "react"
import styles from "./BlogList.module.css"
import Image from "next/image"
import Button from "../button/button"

const BlogList = ({ props }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    props
      ?.find((item: any) => item.Buttons)
      ?.Buttons[0].items.find((item: any) => item.buttonText).buttonText || ""
  )
  const [showAll, setShowAll] = useState<boolean>(false)

  const filteredBlogs =
    props
      ?.find((item: any) => item.Data)
      ?.Data?.filter((blog: any) =>
        blog.items.some((item: any) => item.category === selectedCategory)
      ) || []

  const displayedBlogs = showAll ? filteredBlogs : filteredBlogs.slice(0, 9)

  const handleToggleShow = () => setShowAll(true)

  return (
    <div className={styles.caseslide} id="case-slide">
      <div className={styles.tabContainer}>
        {props
          ?.find((item: any) => item.Buttons)
          ?.Buttons?.map((text: any, index: number) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                selectedCategory ===
                text.items.find((item: any) => item.buttonText).buttonText ? styles.activeTab : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  text.items.find((item: any) => item.buttonText).buttonText
                )
              }
            >
              {text.items.find((item: any) => item.buttonText).buttonText}
            </button>
          ))}
      </div>

      <div
        className={`flex flex-wrap justify-start text-black ${styles.hireengaged}`}
      >
        {displayedBlogs.map((blog: any, index: number) => {
          const title = blog.items.find((item: any) => item.title)?.title || ""
          const description =
            blog.items.find((item: any) => item.description)?.description || ""
          const imageUrl =
            blog.items.find((item: any) => item.imageUrl)?.imageUrl || ""
          const category =
            blog.items.find((item: any) => item.category)?.category || ""
          const date = blog.items.find((item: any) => item.date)?.date || ""
          const redirectLink =
            blog.items.find((item: any) => item.redirectLink)?.redirectLink ||
            "#"
          const redirectText =
            blog.items.find((item: any) => item.redirectText)?.redirectText ||
            "Read More"

          return (
            <div key={index} className="w-full md:w-1/2 2xl:w-1/3 px-4 mb-8">
              <div className={`${styles.devTimeBox}`}>
                <div className={styles.devloperimg}>
                  <Image src={imageUrl} alt={title} width={440} height={350} />
                </div>
                <div className="content">
                  <div className="flex items-center justify-between mt-8">
                    <span>{category}</span>
                    <span>{date}</span>
                  </div>
                  <h2>{title}</h2>
                  <p className={styles.description}>{description}</p>
                </div>
                <p className={`${styles.readmore}`}>
                  <a href={redirectLink}>{redirectText}</a>
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-auto viewallbtn" onClick={handleToggleShow}>
        <Button
          href="#"
          text={
            props.find((item: any) => item.buttonText) ? props.find((item: any) => item.buttonText).buttonText : "VIEW ALL"
          }
          variant="secondary"
        />
      </div>
    </div>
  )
}

export default BlogList
