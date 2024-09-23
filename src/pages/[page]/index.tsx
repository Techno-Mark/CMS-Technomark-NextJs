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
}

const apiCall = async (param: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug${param}`,
      {
        headers: {
          referal: process.env.REFERAL_HEADER || ""
        }
      }
    )
    return res.data.data
  } catch (error) {
    console.error(`Error fetching ${param} data:`, error)
    return null
  }
}

const seoData = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/site/seo-script`,
      {
        headers: {
          referal: process.env.REFERAL_HEADER || ""
        }
      }
    )
    return res.data.data
  } catch (error) {
    console.error(`Error fetching  data:`, error)
    return null
  }
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { resolvedUrl } = context

  try {
    const data =
      resolvedUrl != "/blogs" &&
      resolvedUrl != "/careerDetails" &&
      (await apiCall(resolvedUrl))

    const seo = await seoData()

    return {
      props: {
        data,
        seo
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: {
        data: null,
        seo: null
      }
    }
  }
}

const Page: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
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
        {/* {data?.googleAnalytics?.beforeScript && (
          <script
            dangerouslySetInnerHTML={{
              __html: data.googleAnalytics.beforeScript,
            }}
          />
        )} */}

        {/* Inject Facebook Script */}
        {/* {data?.facebookScript && (
          <script dangerouslySetInnerHTML={{ __html: data.facebookScript }} />
        )} */}
      </Head>
      <ToastContainer />
      {data?.popups && !!data.popups.length && (
        <Popup popupData={data?.popups} />
      )}

      <DataComponent data={data} />

      {/* Inject Google Analytics afterScript */}
      {/* {data?.googleAnalytics?.afterScript && (
        <script
          dangerouslySetInnerHTML={{ __html: data.googleAnalytics.afterScript }}
        />
      )} */}
    </>
  )
}

export default Page
