import React, { useEffect, useState } from "react"
import styles from "./home.module.css"
import TitleSection from "@/components/common/title/title"
import BlogList from "./blogList/BlogList"
import axios from "axios"
import FormSection from "@/components/common/formsection/formsection"
import Head from "next/head"

interface FormSectionData {
  formsection: any;
}

interface ApiResponse {
  data: {
    formatData: FormSectionData[];
  };
}

const Index: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const [formData, setFormData] = useState<any>(null)

  const apiCallForm = async (param: string) => {
    try {
      const res = await axios.get<ApiResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug/${param}`,
        {
          headers: {
            referal: process.env.REFERAL_HEADER || "http://localhost:3001"
          }
        }
      )
      setData(res.data.data)
      setFormData(res.data.data.formatData)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    apiCallForm("blogs")
  }, [])

  const renderSection = (sectionName: string, sectionData: any) => {
    switch (sectionName) {
      case "Blog hero section":
        return (
          sectionData && (
            <section className={`${styles.casestudylist} tm-section bg-white`}>
              <div className="container mx-auto">
                <p className={styles.casestudylistlabel}>{sectionData ? sectionData.label : ""}</p>
                <TitleSection
                  sectionData={{
                    title: sectionData ? sectionData.title : "",
                    subtitle: sectionData ? sectionData.subTitle : ""
                  }}
                  titleFirst={true}
                  titleClassName="casestudylisttitle"
                />
                <BlogList />
              </div>
            </section>
          )
        )
      case "Contact Form Section":
        return (
          sectionData && (
            <section className={`${styles.formsection} tm-section bg-white`}>
              <div className="container mx-auto">
                <FormSection props={sectionData} />
              </div>
            </section>
          )
        )
    }
  }

  return (
    <>
      <Head>
        <title>{data ? data.title : ""}</title>
        <meta name="title" content={data ? data.metaTitle : ""} />
        <meta name="description" content={data ? data.metaDescription : ""} />
        <meta name="keywords" content={data ? data.metaKeywords : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {!!formData &&
        formData.map((sectionName: any, index: number) => (
          <React.Fragment key={index}>
            {Object.entries(sectionName).map(([key, value]) => (
              <div key={key}>{renderSection(key, value)}</div>
            ))}
          </React.Fragment>
        ))}
    </>
  )
}

export default Index
