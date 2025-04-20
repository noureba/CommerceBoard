import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function TrafficLineChart(Props) {
  return (
    <div className="bg-white rounded p-5 grow">
      <h3 className="text-gray-500 text-center font-bold">{Props.name}</h3>
      <div className="">
        <Line data={Props.data} options={Props.options} />
      </div>
    </div>
  );
}

export default TrafficLineChart;
