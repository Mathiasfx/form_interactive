/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const url = "https://pixieapi.azurewebsites.net/api/users/accredited";

const acreditForm = async (data: any) => {
  try {
    const response = await axios.patch(url, data);

    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export default acreditForm;
