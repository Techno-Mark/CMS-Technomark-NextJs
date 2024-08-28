import React, { useEffect, useState } from "react";
import styles from "./BlogList.module.css";
import Image from "next/image";
import Button from "@/components/common/button/button";
import axios from "axios";
import { convertDate } from "@/utils/commonFunction";

const BlogList = ({ props }: any) => {
  const Buttons = [
    "Software Development",
    "Development & Operation",
    "Artificial Intelligence",
    "Automation",
    "Marketing",
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Software Development"
  );
  const [showAll, setShowAll] = useState<boolean>(false);
  const [data, setData] = useState([]);

  const filteredBlogs =
    data?.filter((blog: any) =>
      blog.categories?.some(
        (category: any) => category.name === selectedCategory
      )
    ) || [];

  // Decide which blogs to display
  const displayedBlogs = showAll ? filteredBlogs : filteredBlogs.slice(0, 9);

  const handleToggleShow = () => setShowAll(true);

  const apiCall = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}blog/list`,
        {
          headers: {
            referal: "http://localhost:3001",
          },
        }
      );
      setData(res.data.data.blogs);
    } catch (error) {
      console.error(`Error fetching data:`, error);
      return null;
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className={styles.caseslide} id="case-slide">
      <div className={styles.tabContainer}>
        {Buttons?.map((text: any, index: number) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              selectedCategory == text ? styles.activeTab : ""
            }`}
            onClick={() => setSelectedCategory(text)}
          >
            {text}
          </button>
        ))}
      </div>

      <div
        className={`flex flex-wrap justify-start text-black ${styles.hireengaged}`}
      >
        {displayedBlogs.map((blog: any, index: number) => {
          const title = blog.title || "";
          const description = blog.subTitle || "";
          const imageUrl = blog.thumbnailImageUrl || "";
          const date = blog.createdAt || "";
          const redirectLink = blog.slug || "#";
          const redirectText = "Read More";

          return (
            <div key={index} className="w-full md:w-1/2 2xl:w-1/3 px-4 mb-8">
              <div className={`${styles.devTimeBox}`}>
                <div className={styles.devloperimg}>
                  <Image src={imageUrl} alt={title} width={440} height={350} />
                </div>
                <div className="content">
                  <div className="flex items-center justify-between mt-8">
                    <span>{selectedCategory}</span>
                    <span>{!!date ? convertDate(date.toString()) : ""}</span>
                  </div>
                  <h2>{title}</h2>
                  <p className={styles.description}>{description}</p>
                </div>
                <p className={`${styles.readmore}`}>
                  <a href={`/blogs/${redirectLink}`}>{redirectText}</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto viewallbtn" onClick={handleToggleShow}>
        <Button href="#" text="VIEW ALL" variant="secondary" />
      </div>
    </div>
  );
};

export default BlogList;
