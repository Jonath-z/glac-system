import { Tab } from "@headlessui/react";
import React from "react";
import {
  VWaterGallon,
  VChartLine,
  VRecharge,
} from "../../modules/_modules/vectors";

const TabsList = () => {
  return (
    <Tab.List className="flex gap-3 justify-center items-center">
      <Tab className="w-full flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-transparent to-teal-400 p-3 rounded-md border border-teal-800 outline-none">
        <span>
          <VWaterGallon className="text-2xl" />
        </span>
        <span className="text-white text-sm">Volume</span>
      </Tab>
      <Tab className="w-full flex flex-col justify-center items-center  gap-4 border text-white p-3 rounded-md border-teal-800 outline-none">
        <span>
          <VChartLine className="text-2xl" />
        </span>
        <span className="text-sm">Monitoring</span>
      </Tab>
      <Tab className="w-full flex flex-col justify-center items-center  gap-4 border text-white p-3 rounded-md border-teal-800 outline-none">
        <span>
          <VRecharge className="text-2xl" />
        </span>
        <span className="text-sm">Recharge</span>
      </Tab>
    </Tab.List>
  );
};

export default TabsList;
