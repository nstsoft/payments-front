import axios from "axios";

export const payment = async (email: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_PUBLIC_URL}/payment/withdraw`,
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
