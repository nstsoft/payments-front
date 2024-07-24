import UserProfile from "./pages/userProfile";
import { useUser } from "./hooks";

const App = () => {
  const user = useUser();
  if (!user) return null;
  return <UserProfile userData={user} />;
};

export default App;
