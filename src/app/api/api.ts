import axios from "axios";
const API_URL = process.env.api_url;
export const getdata = async (param: string) => {
  console.log("apiEndpoint", API_URL);

  if (param === "/home" || param === "/") {
    param = "/home-page";
  }
  try {
    const response = await axios.get(`${API_URL}/getBySlug${param}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching guarantee data:", error);
    return null;
  }
};
