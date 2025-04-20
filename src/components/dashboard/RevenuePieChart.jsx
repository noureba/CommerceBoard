import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function RevenuePieChart(Props) {
  return (
    <div className="bg-white rounded p-5">
      <h3 className="text-gray-500 text-center font-bold">{Props.name}</h3>
      <div className="flex justify-center items-center h-[300px]">
        <Pie data={Props.data} options={Props.options} />
      </div>
    </div>
  );
}

export default RevenuePieChart;
