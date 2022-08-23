import React from "react";
// import { VictoryBar } from "victory";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonitoringChart = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 390,
      type: "bar",
      events: {
        click: function () {
          // console.log(chart, w, e)
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },

    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#2dd4bf"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        borderRadius: 9,
        colors: {
          backgroundBarColors: ["gray"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 9,
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Mon"],
        ["Tue"],
        ["Wed"],
        ["Tues"],
        ["Fri"],
        ["Sat"],
        ["Sun"],
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: "white",
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div>
      <Chart
        type="bar"
        options={chartOptions}
        series={[
          {
            data: [21, 22, 10, 28, 16, 21, 13],
          },
        ]}
      />
    </div>
  );
};

export default MonitoringChart;
