import React from "react";
import UserProfile from "./pages/userProfile";
import { useUser } from "./hooks";

const App: React.FC = () => {
  const user = useUser();
  if (!user) return null;
  return <UserProfile userData={user} />;
};

export default App;
