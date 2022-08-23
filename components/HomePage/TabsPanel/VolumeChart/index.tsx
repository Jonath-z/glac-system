import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { VPowerOff } from "../../../modules/_modules/vectors";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const VolumeChart = () => {
  const [componetMounted, setComponentMounted] = useState(false);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  const chartOptions: ApexCharts.ApexOptions | undefined = {
    chart: {
      height: 200,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: "gray",
          strokeWidth: "10px",
        },

        dataLabels: {
          name: {
            fontSize: "11px",
            color: "white",
            offsetY: 40,
          },
          value: {
            offsetY: 0,
            fontSize: "30px",
            color: "white",
            formatter: function (val: number) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      colors: ["#2dd4bf"],
      gradient: {
        shade: "dark",
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },

    stroke: {
      dashArray: 3,
      curve: "smooth",
      lineCap: "round",
    },

    labels: ["water volume"],
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {componetMounted && (
        <Chart
          options={chartOptions}
          series={[54]}
          type="radialBar"
          height={350}
        />
      )}
      <div className="flex justify-center items-center p-3 border border-teal-700 w-fit rounded-full">
        <VPowerOff className="text-2xl text-white" />
      </div>
    </div>
  );
};

export default VolumeChart;
