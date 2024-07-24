import axios from "axios";

export const authAPI = async (email) => {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/payment/account`,
    { email, country: "US", default_currency: "usd" },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
