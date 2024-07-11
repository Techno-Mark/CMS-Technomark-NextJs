/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import DataComponent from "./DataComponent";

interface HomeProps {
  sectionsOrder: string[];
  homeSection: any;
  techstartup: any;
  methodology?: any;
  services?: any;
  casestudy?: any;
  techIcons?: any;
  guarantee?: any;
  client?: any;
  achievement?: any;
  faq?: any;
  awards?: any;
  formsection?: any;
  casestudylist?: any;
  videosection?: any;
  casestudydetailherosection?: any;
  businessimpact?: any;
  problemstatement?: any;
  projectscreens?: any;
  Challengessolutions?: any;
  majorscreen?: any;
  features?: any;
  productherosection?: any;
  productservices?: any;
  productsolutions?: any;
  props: any;
}

export const getServerSideProps: GetServerSideProps<{
  homeData: HomeProps;
  caseStudy: HomeProps;
  caseStudyDetails: HomeProps;
  product: HomeProps;
}> = async () => {
  const apiCall = async (param: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getBySlug/${param}`,
      {
        headers: {
          referal: "http://localhost:3001",
        },
      }
    );
    return res.data.data.templateData;
  };
  try {
    const homeDataPromise = apiCall("home-page");
    const caseStudyPromise = apiCall("case-study-list");
    const caseStudyDetailsPromise = apiCall("case-study-detail");
    const productPromise = apiCall("product");

    const [homeData, caseStudy, caseStudyDetails, product] = await Promise.all([
      homeDataPromise,
      caseStudyPromise,
      caseStudyDetailsPromise,
      productPromise,
    ]);

    return {
      props: { homeData, caseStudy, caseStudyDetails, product },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return {
      props: {
        homeData: null,
        caseStudy: null,
        caseStudyDetails: null,
        product: null,
      },
    };
  }
};

export default function page({
  homeData,
  caseStudy,
  caseStudyDetails,
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <DataComponent
        homeData={homeData}
        caseStudy={caseStudy}
        caseStudyDetails={caseStudyDetails}
        product={product}
      />
    </>
  );
}
