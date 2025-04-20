import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function SalesBarChart(Props) {
  return (
    <div className="bg-white rounded p-5 grow">
      <h3 className="text-gray-500 text-center font-bold">{Props.name}</h3>
      <div className="">
        <Bar data={Props.data} options={Props.options} />
      </div>
    </div>
  );
}

export default SalesBarChart;
