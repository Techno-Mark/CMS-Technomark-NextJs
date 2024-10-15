import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import axios from "axios"
import DataComponent from "./DataComponent"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Head from "next/head"
import Popup from "@/components/popup/popup"

interface HomeProps {
  data: any;
  seo: any;
  Theme: any;
}

const apiCall = async (
  param: string,
  preview: string | string[] | undefined,
  id: string | string[] | undefined
) => {
  try {
    const isPreview = preview === "true"
    const hashId = id || ""
    const url = isPreview
      ? `${process.env.NEXT_PUBLIC_API_URL || ""}preview/${hashId}`
      : `${process.env.NEXT_PUBLIC_API_URL || ""}page/getBySlug${param}`

    const res = await axios.get(`${url}`, {
      headers: {
        referal: process.env.REFERAL_HEADER || ""
      }
    })
    if (isPreview) {
      return res.data?.data?.data
    }

    return res.data.data
  } catch (error) {
    console.error(`Error fetching ${param} data:`, error)
    return null
  }
}

const seoData = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seo-script`, {
      headers: {
        referal: process.env.REFERAL_HEADER || ""
      }
    })
    return res.data.data
  } catch (error) {
    console.error(`Error fetching  data:`, error)
    return null
  }
}

const ThemeData = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/theme-data`, {
      headers: {
        referal: process.env.REFERAL_HEADER || ""
      }
    })
    return res.data.data
  } catch (error) {
    console.error(`Error fetching  data:`, error)
    return null
  }
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { resolvedUrl, query } = context
  const { preview, id } = query

  try {
    const data =
      resolvedUrl != "/blogs" &&
      resolvedUrl != "/careerDetails" &&
      (await apiCall(resolvedUrl, preview, id))

    const seo = await seoData()
    await apiCall(resolvedUrl, preview, id)

    const Theme = await ThemeData()
    await apiCall(resolvedUrl, preview, id)

    return {
      props: {
        data,
        seo,
        Theme
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: {
        data: null,
        seo: null,
        Theme: null
      }
    }
  }
}

const Page: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data, seo, Theme }) => {
  return (
    <>
      <Head>
        <title>{data ? data.title : ""}</title>
        <meta name="title" content={data ? data.metaTitle : ""} />
        <meta name="description" content={data ? data.metaDescription : ""} />
        <meta name="keywords" content={data ? data.metaKeywords : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        {/* Inject Google Analytics beforeScript */}
        {seo?.googleAnalytics?.beforeScript && (
          <script
            dangerouslySetInnerHTML={{
              __html: seo.googleAnalytics.beforeScript
            }}
          />
        )}

        {/* Inject Facebook Script */}
        {seo?.facebookScript && (
          <script dangerouslySetInnerHTML={{ __html: seo.facebookScript }} />
        )}
      </Head>
      <ToastContainer />

      {/* <style jsx global>{`
        :root {
          --primary-color: ${Theme?.buttonColor};
          --hover-color: ${Theme?.hoverColor};
        }
      `}</style> */}

      {/* Inject Google Analytics afterScript */}
      {seo?.googleAnalytics?.afterScript && (
        <script
          dangerouslySetInnerHTML={{ __html: seo.googleAnalytics.afterScript }}
        />
      )}
      {data?.popups &&
        !!data.popups.length &&
        data.popups?.map((popupDetail: any, index: number) => (
          <Popup popupData={popupDetail} key={index} />
        ))}
      <DataComponent data={data} />
    </>
  )
}

export default Page
