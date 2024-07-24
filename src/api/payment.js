import axios from "axios";

export const paymentAPI = async (amount) => {
  const response = await axios.post(
    `${import.meta.env.VITE_PUBLIC_URL}/payment/withdraw`,
    { amount },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
