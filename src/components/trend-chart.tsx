"use client"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export function TrendChart() {
  const labels = Array.from({ length: 23 }, (_, i) => i + 1)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hoverRadius: 6,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Today",
        data: [20, 25, 30, 35, 30, 25, 18, 15, 22, 30, 40, 50, 45, 35, 25, 35, 45, 35, 25, 15, 10, 15, 20],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        pointBackgroundColor: "rgb(59, 130, 246)",
      },
    ],
  }

  return (
    <div className="h-64">
      <Line options={options} data={data} />
    </div>
  )
}

