import axios from "axios";

export const fetchHeaderFooterData = async (param: string) => {
  try {
    let referalHeader = process.env.REFERAL_HEADER;
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
