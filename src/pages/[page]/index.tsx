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
  hlsCaseStudyDetails: HomeProps;
  airattixCaseStudyDetails: HomeProps;
  givsumCaseStudyDetails: HomeProps;
  services: HomeProps;
  technology: HomeProps;
}> = async () => {
  const apiCall = async (param: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getBySlug/${param}`,
      // 'https://jsonplaceholder.typicode.com/todos/1',
      // `http://localhost:3001/casestudylist.json`,
      {
        headers: {
          referal: "http://localhost:3001",
        },
      }
    );
    return res;
  };
  try {
    const homeDataPromise = apiCall("homePage");
    const caseStudyPromise = apiCall("casestudylist");
    const hlsCaseStudyDetailsPromise = apiCall("hlscasestudydetails");
    const airattixCaseStudyDetailsPromise = apiCall("airattixcasestudydetails");
    const givsumCaseStudyDetailsPromise = apiCall("givsumcasestudydetails");
    const servicesPromise = apiCall("servicePage");
    const technologyPromise = apiCall("technologyPage");

    const [
      maindata,
      caseStudy,
      hlsCaseStudyDetails,
      airattixCaseStudyDetails,
      givsumCaseStudyDetails,
      services,
      technology,
    ] = await Promise.all([
      homeDataPromise,
      caseStudyPromise,
      hlsCaseStudyDetailsPromise,
      airattixCaseStudyDetailsPromise,
      givsumCaseStudyDetailsPromise,
      servicesPromise,
      technologyPromise,
    ]);

    return {
      props: {
        maindata,
        caseStudy,
        hlsCaseStudyDetails,
        airattixCaseStudyDetails,
        givsumCaseStudyDetails,
        services,
        technology,
      },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return {
      props: {
        maindata: null,
        caseStudy: null,
        hlsCaseStudyDetails: null,
        airattixCaseStudyDetails: null,
        givsumCaseStudyDetails: null,
        services: null,
        technology: null,
      },
    };
  }
};

export default function page({
  maindata,
  caseStudy,
  hlsCaseStudyDetails,
  airattixCaseStudyDetails,
  givsumCaseStudyDetails,
  services,
  technology,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(
    "hello",
    maindata,
    caseStudy,
    hlsCaseStudyDetails,
    airattixCaseStudyDetails,
    givsumCaseStudyDetails,
    services,
    technology
  );
  return (
    <>
      <DataComponent
        maindata={maindata}
        caseStudy={caseStudy}
        hlsCaseStudyDetails={hlsCaseStudyDetails}
        airattixCaseStudyDetails={airattixCaseStudyDetails}
        givsumCaseStudyDetails={givsumCaseStudyDetails}
        services={services}
        technology={technology}
      />
    </>
  );
}
