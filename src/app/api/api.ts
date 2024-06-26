import axios from "axios";

export const getdata = async (param: string) => {
    if(param === "/home"){
        param= "/home-page";
    }
    try{
        const response = await axios.get(`http://crm-stageapi.pacificabs.com:3005/site/page/getBySlug${param}`);
        return response.data;
    } catch(error){
        console.error('Error fetching guarantee data:', error);
        return null;
    }
};