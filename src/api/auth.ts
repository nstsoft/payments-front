import axios from "axios";
import { IAuthResponse } from "../interfaces/authResponse";

export const auth = async (email: string): Promise<IAuthResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/auth`,
    { email, country: "US", default_currency: "usd" },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
