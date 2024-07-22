import { IAuthResponse } from "../interfaces/authResponse";

export const auth = async (email: string): Promise<IAuthResponse> => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth`, {
    body: JSON.stringify({ email, country: "US", default_currency: "usd" }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await response.json();
  return data;
};
