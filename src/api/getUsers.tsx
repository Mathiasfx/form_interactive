/* eslint-disable @typescript-eslint/no-explicit-any  */
//GET
import axios from "axios";

const url = "https://pixie-api-rest.azurewebsites.net/api/lottery?lottery_pixie=True";
const url2 ="https://pixie-api-rest.azurewebsites.net/api/lottery?lottery_people=True";



const getUsers = async (param:string) => {

  try {
    if(param === "pixie"){
    const response = await axios.get(url);
    return response.data;
  }else if(param==="form"){
    const response = await axios.get(url2);
    return response.data;

  }

   
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export default getUsers;