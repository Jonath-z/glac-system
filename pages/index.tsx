import type { NextPage } from "next";
import AuthPage from "../components/AuthPage";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-800">
      <AuthPage />
    </div>
  );
};

export default Home;
