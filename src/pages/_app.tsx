import CustomerLabel from "@/components/common/customerlabel/customerlabel"
import Footer from "@/components/common/footer/Footer"
import Header from "@/components/common/header/Header"
import SideBar from "@/components/common/sidebar/sidebar"
import { fetchHeaderFooterData } from "@/serverAction/fetchHeaderFooterData"
import "@/styles/globals.css"
import { NextPageContext } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useState } from "react"
export default function App({ Component, pageProps }: AppProps) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const [commonData, setCommonData] = useState({
    headerData: null as any,
    footerData: null as any
  })

  if (commonData.headerData === null && commonData.footerData === null) {
    setCommonData({
      headerData: pageProps.headerData,
      footerData: pageProps.footerData
    })
  }

  const toggleDrawer = () => {
    setIsDrawerVisible((prev) => !prev)
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/path/to/your/font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <div className="maindiv">
        <Header
          onShowDrawer={toggleDrawer}
          headerData={commonData?.headerData?.menuItem}
        />
        <SideBar
          isDrawerVisible={isDrawerVisible}
          toggleDrawer={toggleDrawer}
        />
        <CustomerLabel />
        <Component {...pageProps} />
        <Footer footerData={commonData?.footerData?.menuItem} />
      </div>
    </>
  )
}

App.getInitialProps = async (ctx: NextPageContext) => {
  const [header, footer] = await Promise.all([
    fetchHeaderFooterData("header"),
    fetchHeaderFooterData("footer")
  ])

  return {
    pageProps: {
      headerData: header,
      footerData: footer
    }
  }
}
