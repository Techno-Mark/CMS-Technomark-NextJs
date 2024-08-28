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

const index = () => {
  const param = useParams();
  const [data, setData] = useState<any>(null);
  const [formData, setFormData] = useState<any>(null);

  const apiCall = async (param: any) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}blog/getBySlug/${param}`,
        {
          headers: {
            referal: "http://localhost:3001",
          },
        }
      );
      setData(res.data.data);
    } catch (error) {
      console.error(`Error fetching data:`, error);
      return null;
    }
  };

  const apiCallForm = async (param: any) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug/${param}`,
        {
          headers: {
            referal: "http://localhost:3001",
          },
        }
      );
      setFormData(res.data.data);
    } catch (error) {
      console.error(`Error fetching data:`, error);
      return null;
    }
  };

  useEffect(() => {
    !!param && apiCall(param.page);
  }, [param]);

  useEffect(() => {
    apiCallForm("blogs");
  }, []);

  return (
    <>
      <section className={`${styles.casestudylist} tm-section bg-white`}>
        <div className="container mx-auto">
          <p className={styles.casestudylistlabel}>Resources</p>
          <TitleSection
            sectionData={{
              title: !!data ? data.title : "",
              subtitle: !!data ? data.subTitle : "",
            }}
            titleFirst={true}
            titleClassName="bloglisttitle"
          />
        </div>

        <div className="container mx-auto">
          <div className="shadow-custom-green p-16 mb-20 bg-[rgba(231,248,234,0.40)]">
            <div className="flex w-full ">
              <Image
                src={!!data ? data.authorImageUrl : ""}
                className="rounded-full h-[50px]"
                alt="user-image"
                width={50}
                height={50}
              />
              <div className="w-full ml-5 text-[var(--secondary--color)]">
                <h3 className="text-3xl font-semibold">
                  {!!data ? data.authorName : ""}
                </h3>
                <div className="flex justify-between font-medium text-2xl">
                  <span>
                    {!!data && data.createdAt
                      ? convertDate(data.createdAt)
                      : ""}
                  </span>
                  <span>
                    Last updated{" "}
                    {!!data && data.updatedAt
                      ? convertDate(data.updatedAt)
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full mt-10">
              <img
                src={!!data ? data.bannerImageUrl : ""}
                className="object-contain w-full"
                alt="banner"
              />
            </div>
            <div className="flex mt-10   opacity-60 items-center">
              <Image
                src="/images/thumbs-up.png"
                className="object-contain cursor-pointer"
                width={25}
                height={25}
                alt="thumbs"
              />
              <span className="ml-3  cursor-pointer font-semibold text-2xl text-[var(--secondary--color)]">
                0 Likes
              </span>
            </div>
          </div>
        </div>

        <BlogDescription props={data} />
      </section>
      
      {!!formData &&
        !!formData.formatData &&
        !!formData.formatData[0].formsection && (
          <section className={`${styles.formsection} tm-section bg-white`}>
            <div className="container mx-auto">
              <FormSection
                props={!!formData ? formData.formatData[0].formsection : ""}
              />
            </div>
          </section>
        )}
    </>
  );
};

export default index;
