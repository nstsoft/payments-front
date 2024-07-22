export const payment = async (email: string) => {
  const response = await fetch(`${import.meta.env.VITE_PUBLIC_URL}/payment/withdraw`, {
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const data = await response.json();
  return data;
};
