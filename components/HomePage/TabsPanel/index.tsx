import { Tab } from "@headlessui/react";
import React from "react";
import MonitoringChart from "./MonitoringChart";
import Chart from "./MonitoringChart";
import VolumeChart from "./VolumeChart";

const TabPanel = () => {
  return (
    <Tab.Panels>
      <Tab.Panel>
        <VolumeChart />
      </Tab.Panel>
      <Tab.Panel>
        <MonitoringChart />
      </Tab.Panel>
    </Tab.Panels>
  );
};

export default TabPanel;
