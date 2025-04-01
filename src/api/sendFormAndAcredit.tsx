/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FormRegisterAndAcredit } from "../models/forms.model";
const url = import.meta.env.VITE_API_URL || "https://localhost";

const sendFormAndAcredit = async (data: FormRegisterAndAcredit) => {
  try {
    const response = await axios.post(
      `${url}/api/registerAcredited`,
      data || {}
    );
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export default sendFormAndAcredit;
