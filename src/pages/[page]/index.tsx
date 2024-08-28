import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import DataComponent from "./DataComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

interface HomeProps {
  data: any;
}

const apiCall = async (param: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}page/getBySlug${param}`,
      {
        headers: {
          referal: "http://localhost:3001",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${param} data:`, error);
    return null;
  }
};
const fetchHeaderFooter = async (param: string) => {
  let referalHeader = process.env.REFERAL_HEADER;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/menu/getByName/${param}`,
      {
        headers: {
          referal: referalHeader,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${param} data:`, error);
    return null;
  }
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { resolvedUrl } = context;

  try {
    let data = null;
   
      data = await apiCall(resolvedUrl);
      
    let [headerData, footerData] = await Promise.all([
      fetchHeaderFooter("Main Header Menu"),
      fetchHeaderFooter("Footer Menu"),
    ]);
    return {
      props: {
        data,
        headerData: headerData?.menuItem,
        footerData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
};

const Page: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>{!!data ? data.title : ""}</title>
        <meta name="title" content={!!data ? data.metaTitle : ""} />
        <meta name="description" content={!!data ? data.metaDescription : ""} />
        <meta name="keywords" content={!!data ? data.metaKeywords : ""} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ToastContainer />
      <DataComponent data={data} />
    </>
  );
};

export default Page;
