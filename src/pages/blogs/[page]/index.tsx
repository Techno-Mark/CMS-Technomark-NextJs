/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import TitleSection from "@/components/common/title/title";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "../list/home.module.css";
import Image from "next/image";
import { convertDate } from "@/utils/commonFunction";
import BlogDescription from "./blogDescription";
import FormSection from "@/components/common/formsection/formsection";
import Head from "next/head";

interface BlogData {
  title: string;
  subTitle: string;
  slug: string;
  authorName: string;
  bannerImageUrl: string;
  thumbnailImageUrl: string;
  authorImageUrl: string;
  description: string;
  tags: string;
  categories: {
    name: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  createdAt: string;
  updatedAt: string;
}

interface FormSectionData {
  formatData: {
    formsection: any;
  }[];
}

const BlogPage: React.FC = () => {
  const param = useParams();
  const [data, setData] = useState<BlogData | null>(null);
  const [formData, setFormData] = useState<FormSectionData | null>(null);

  const apiCall = async (slug: string | string[]) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL || ""}blog/getBySlug/${slug}`,
        {
          headers: {
            referal: process.env.REFERAL_HEADER || "",
          },
        }
      );
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const apiCallForm = async (param: any) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug/${param}`,
        {
          headers: {
            referal: process.env.REFERAL_HEADER || "",
          },
        }
      );
      setFormData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    if (param?.page) {
      apiCall(param.page);
    }
  }, [param]);

  useEffect(() => {
    apiCallForm("blogs");
  }, []);

  return (
    <>
      <Head>
        <title>{!!data ? data.title : ""}</title>
        <meta name="title" content={!!data ? data.metaTitle : ""} />
        <meta name="description" content={!!data ? data.metaDescription : ""} />
        <meta name="keywords" content={!!data ? data.metaKeywords : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={`${styles.casestudylist} tm-section bg-white`}>
        <div className="container mx-auto">
          <p className={styles.casestudylistlabel}>Resources</p>
          <TitleSection
            sectionData={{
              title: data?.title || "",
              subtitle: data?.subTitle || "",
            }}
            titleFirst={true}
            titleClassName="bloglisttitle"
          />
        </div>

        <div className="container mx-auto">
          <div className="shadow-custom-green p-16 mb-20 bg-[rgba(231,248,234,0.40)]">
            <div className="flex w-full">
              {data?.authorImageUrl && (
                <Image
                  src={data.authorImageUrl}
                  className="rounded-full h-[50px]"
                  alt="user-image"
                  width={50}
                  height={50}
                />
              )}
              <div className="w-full ml-5 text-[var(--secondary--color)]">
                <h3 className="text-3xl font-semibold">
                  {data?.authorName || ""}
                </h3>
                <div className="flex justify-between font-medium text-2xl">
                  <span>
                    {data?.createdAt ? convertDate(data.createdAt) : ""}
                  </span>
                  <span>
                    Last updated{" "}
                    {data?.updatedAt ? convertDate(data.updatedAt) : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full mt-10">
              {data?.bannerImageUrl && (
                <img
                  src={data.bannerImageUrl}
                  className="object-contain w-full"
                  alt="banner"
                />
              )}
            </div>
            <div className="flex mt-10 opacity-60 items-center">
              <Image
                src="/images/thumbs-up.png"
                className="object-contain cursor-pointer"
                width={25}
                height={25}
                alt="thumbs"
              />
              <span className="ml-3 cursor-pointer font-semibold text-2xl text-[var(--secondary--color)]">
                0 Likes
              </span>
            </div>
          </div>
        </div>

        {data && <BlogDescription props={data} />}
      </section>

      {formData?.formatData?.[0]?.formsection && (
        <section className={`${styles.formsection} tm-section bg-white`}>
          <div className="container mx-auto">
            <FormSection props={formData.formatData[0].formsection} />
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPage;
