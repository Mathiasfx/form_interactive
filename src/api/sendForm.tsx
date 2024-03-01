/* eslint-disable @typescript-eslint/no-explicit-any  */
//POST
import axios from "axios";

const url = "https://pixieapi.azurewebsites.net/api/users";

const sendForm = async (data: any) => {
  console.log(data);
  try {
    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export default sendForm;
