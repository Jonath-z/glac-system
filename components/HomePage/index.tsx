import { Tab } from "@headlessui/react";
import React from "react";
import Menu from "../modules/Menu";
import {
  VChartLine,
  VRecharge,
  VWaterGallon,
} from "../modules/_modules/vectors";
import TabsList from "./TabsList";
import TabPanel from "./TabsPanel";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Menu />
      <div className="flex flex-col gap-1 py-5">
        <h1 className="text-3xl text-white">Hi Jonathan</h1>
        <p className="text-white">welcome back</p>
      </div>

      <Tab.Group>
        <TabsList />
        <TabPanel />
      </Tab.Group>
    </div>
  );
};

export default HomePage;
