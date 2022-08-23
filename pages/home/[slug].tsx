import { NextPage } from "next";
import React from "react";
import HomePage from "../../components/HomePage";

const LandingPage: NextPage = () => {
  return (
    <div className="h-screen bg-slate-800 overflow-y-auto">
      <HomePage />
    </div>
  );
};

export default LandingPage;
