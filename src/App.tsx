import React from "react";
import UserProfile from "./pages/userProfile";

const App: React.FC = () => {
  const user = {
    email: "test6@mail.com",
    name: "John Doe",
    balance: 1000,
    avatar: `${import.meta.env.VITE_PUBLIC_URL}/userIcon.svg`,
  };

  return <UserProfile userData={user} />;
};

export default App;
