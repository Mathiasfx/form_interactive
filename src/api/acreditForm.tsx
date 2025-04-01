/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FormAcredit } from "../models/forms.model";
const url = import.meta.env.VITE_API_URL || "https://localhost";

const acreditForm = async (data: FormAcredit) => {
  const { user_email } = data;
  try {
    const response = await axios.post(
      `${url}/api/acredited?user_email=${encodeURIComponent(user_email)}`,
      data || {}
    );
    return response.data;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw error;
  }
};

export default acreditForm;
