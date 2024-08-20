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
  maindata: any;
  caseStudy: any;
  hlsCaseStudyDetails: any;
  airattixCaseStudyDetails: any;
  givsumCaseStudyDetails: any;
  services: any;
  technology: any;
}> = async () => {
  const apiCall = async (param: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getBySlug/${param}`,
      {
        headers: {
          referal: "https://cms-technomark-next-js.vercel.app",
        },
      }
    );
    console.log("response", res.data.data);
    return res.data.data;
  };

  try {
    const maindata = await apiCall("homePage");
    const caseStudy = await apiCall("casestudylist");
    const hlsCaseStudyDetails = await apiCall("hlscasestudydetails");
    const airattixCaseStudyDetails = await apiCall("airattixcasestudydetails");
    const givsumCaseStudyDetails = await apiCall("givsumcasestudydetails");
    const services = await apiCall("servicePage");
    const technology = await apiCall("technologyPage");

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
    console.error("Error fetching data:", error);
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
