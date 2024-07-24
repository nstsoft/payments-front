import { useState, useEffect } from "react";

const fetchUserData = () => {
  const userData = {
    email: "test6@mail.com",
    name: "John Doe",
    balance: 1000,
    avatar: `${import.meta.env.VITE_PUBLIC_URL}/userIcon.svg`,
  };

  return new Promise((resolve) => setTimeout(resolve, 1000, userData));
};

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      fetchUserData().then(setUser);
    }
  }, []);

  return user;
};
