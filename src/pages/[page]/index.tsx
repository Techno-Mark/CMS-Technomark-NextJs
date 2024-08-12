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
  maindata: HomeProps;
  caseStudy: HomeProps;
  caseStudyDetails: HomeProps;
  product: HomeProps;
  technology: HomeProps;
}> = async () => {
  const apiCall = async (param: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getBySlug/${param}`,
      // `http://localhost:3001/casestudylist.json`,
      {
        headers: {
          referal: "http://localhost:3001",
        },
      }
    );
    return res.data.data;
  };
  try {
    const homeDataPromise = apiCall("home-page");
    const caseStudyPromise = apiCall("casestudylist");
    const caseStudyDetailsPromise = apiCall("case-study-detail");
    const productPromise = apiCall("product");
    const technologyPromise = apiCall("technology");
    

    const [maindata, caseStudy, caseStudyDetails, product, technology] = await Promise.all([
      homeDataPromise,
      caseStudyPromise,
      caseStudyDetailsPromise,
      productPromise,
      technologyPromise,
    ]);

    return {
      props: { maindata, caseStudy, caseStudyDetails, product, technology },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return {
      props: {
        maindata: null,
        caseStudy: null,
        caseStudyDetails: null,
        product: null,
        technology: null,
      },
    };
  }
};

export default function page({
  maindata,
  caseStudy,
  caseStudyDetails,
  product,
  technology,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <DataComponent
        maindata={maindata}
        caseStudy={caseStudy}
        caseStudyDetails={caseStudyDetails}
        product={product}
        technology={technology}
      />
    </>
  );
}
