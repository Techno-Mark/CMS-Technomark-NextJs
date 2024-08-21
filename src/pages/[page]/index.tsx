import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import DataComponent from "./DataComponent";

interface HomeProps {
  maindata: any;
  caseStudy: any;
  hlsCaseStudyDetails: any;
  airattixCaseStudyDetails: any;
  givsumCaseStudyDetails: any;
  services: any;
  technology: any;
  startup: any;
  contactus: any;
}

// Utility function to make API calls
const apiCall = async (param: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getBySlug/${param}`,
      {
        headers: {
          referal: "http://localhost:3001",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${param} data:`, error);
    return null; // Handle error by returning null
  }
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { resolvedUrl } = context;
  let maindata = null;
  let caseStudy = null;
  let hlsCaseStudyDetails = null;
  let airattixCaseStudyDetails = null;
  let givsumCaseStudyDetails = null;
  let services = null;
  let technology = null;
  let startup = null;
  let contactus = null;

  try {
    // Determine the API endpoint based on the pathname and query parameters
    switch (resolvedUrl) {
      case "/home":
        maindata = await apiCall("homePage");
        break;
      case "/casestudylist":
        caseStudy = await apiCall("casestudylist");
        break;
      case "/casestudydetail?client=HLS":
        hlsCaseStudyDetails = await apiCall("hlscasestudydetails");
        break;
      case "/casestudydetail?client=Airattix":
        airattixCaseStudyDetails = await apiCall("airattixcasestudydetails");
        break;
      case "/casestudydetail?client=Givsum":
        givsumCaseStudyDetails = await apiCall("givsumcasestudydetails");
        break;
      case "/services":
        services = await apiCall("servicePage");
        break;
      case "/technology":
        technology = await apiCall("technologyPage");
        break;
      case "/start_up_services":
        startup = await apiCall("startupPage");
        break;
      case "/contact_us":
        contactus = await apiCall("contactusPage");
        break;
      default:
        return {
          notFound: true, // Serve a 404 page if the route is not matched
        };
    }

    return {
      props: {
        maindata,
        caseStudy,
        hlsCaseStudyDetails,
        airattixCaseStudyDetails,
        givsumCaseStudyDetails,
        services,
        technology,
        startup,
        contactus,
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
        startup: null,
        contactus: null,
      },
    };
  }
};

const Page: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  maindata,
  caseStudy,
  hlsCaseStudyDetails,
  airattixCaseStudyDetails,
  givsumCaseStudyDetails,
  services,
  technology,
  startup,
  contactus,
}) => {
  return (
    <DataComponent
      maindata={maindata}
      caseStudy={caseStudy}
      hlsCaseStudyDetails={hlsCaseStudyDetails}
      airattixCaseStudyDetails={airattixCaseStudyDetails}
      givsumCaseStudyDetails={givsumCaseStudyDetails}
      services={services}
      technology={technology}
      startup={startup}
      contactus={contactus}
    />
  );
};

export default Page;
