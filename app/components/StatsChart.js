"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

// register radar components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function StatsChart({ pokemon }) {
  const labels = pokemon.stats.map((s) => s.stat.name);
  const values = pokemon.stats.map((s) => s.base_stat);

  const data = {
    labels,
    datasets: [
      {
        label: pokemon.name,
        data: values,
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(99, 102, 241, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(99, 102, 241, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: "#e5e7eb" },
        grid: { color: "#e5e7eb" },
        pointLabels: { color: "#374151", font: { size: 12, weight: "600" } },
        ticks: {
          backgroundColor: "transparent",
          color: "#6b7280",
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#374151",
          font: { size: 14, weight: "bold" },
        },
      },
    },
    tooltip: {
      backgroundColor: "#111827",
      titleColor: "#fff",
      bodyColor: "#d1d5db",
    },
  };  

  return (
    <div className="p-4 bg-white rounded-md shadow">
      <Radar data={data} />
    </div>
  );
}