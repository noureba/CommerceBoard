import React from "react";
import Card from "./Card";
import SalesBarChart from "./SalesBarChart";
import RevenuePieChart from "./RevenuePieChart";
import BestSales from "./BestSales";
import LastOrder from "./LastOrders";
import TrafficLineChart from "./TrafficLineChart";

const salesData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgb(53, 162, 235)",
      borderColor: "rgb(53, 162, 235)",
      data: [5, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const salesOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const revenueByDeviceData = {
  labels: ["Electronics", "Clothing", "Home", "Other"],
  datasets: [
    {
      label: "Category Distribution",
      data: [300, 150, 100, 50],
      backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      borderWidth: 0,
    },
  ],
};

const revenueByDeviceOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const TrafficData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sales",
      data: [100, 200, 150, 300, 250, 400],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: false,
      tension: 0.4,
    },
  ],
};
const TrafficOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
function Home() {
  return (
    <div className="flex flex-col gap-15">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex gap-5 flex-wrap justify-between items-center">
        <Card name="Revenue" total="300$" percent="+22" />
        <Card name="Orders" total="920" percent="-25" />
        <Card name="Visitors" total="15.5K" percent="+49" />
        <Card name="Conversion" total="28%" percent="+2" />
      </div>
      <div className="flex justify-between flex-wrap gap-5">
        <SalesBarChart name="Sales" data={salesData} options={salesOptions} />
        <RevenuePieChart
          name="Revenue by Categories"
          data={revenueByDeviceData}
          options={revenueByDeviceOptions}
        />
      </div>
      <div className="flex justify-between flex-wrap gap-5">
        <BestSales />
        <TrafficLineChart
          name="Traffic"
          data={TrafficData}
          options={TrafficOptions}
        />
      </div>
      <LastOrder />
    </div>
  );
}

export default Home;
