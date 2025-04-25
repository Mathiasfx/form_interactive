/* eslint-disable @typescript-eslint/no-explicit-any  */
//POST
import axios from "axios";
import { FormDatazon } from "../models/forms.model";

const url = import.meta.env.VITE_API_URL || "https://localhost";

const sendForm = async (data: FormDatazon) => {
  try {
    const response = await axios.post(`${url}/api/register`, data);

    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:");
    throw error;
  }
};

export default sendForm;
