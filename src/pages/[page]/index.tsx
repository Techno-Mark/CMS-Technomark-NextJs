import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import DataComponent from "./DataComponent";

interface HomeProps {
  data: any;
}

const apiCall = async (param: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}getBySlug${param}`,
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { resolvedUrl } = context;
  console.log("resolve", resolvedUrl);

  try {
    let data = await apiCall(resolvedUrl);

    return {
      props: {
        data,
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
  return <DataComponent data={data} />;
};

export default Page;
