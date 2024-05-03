/* eslint-disable @typescript-eslint/no-explicit-any  */
//GET
import axios from "axios";

const url = "https://pixie-api-rest.azurewebsites.net/api/lottery";

const getUsers = async () => {

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export default getUsers;