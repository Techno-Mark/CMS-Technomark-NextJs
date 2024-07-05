import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getdata = async (param: string) => {
  console.log("param", param);
  if (param === "/home" || param === "/") {
    param = "/home-page";
  }
  if(param === "/casestudylist"){
    param = "/case-study-list"
  }
  if (param === "/casestudydetail"){
    param = "/case-study-detail";
  }
  try {
    const response = await axios.get(`${API_URL}getBySlug${param}`, {
      headers: {
        'referal': 'http://localhost:3001', 
      },
    });
    //const response = await axios.get(`http://localhost:3000/section.json`);
    //const response = await axios.get(`http://localhost:3000/casestudylist.json`);
    //const response = await axios.get(`http://localhost:3000/casestudydetail.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching guarantee data:", error);
    return null;
  }
};
