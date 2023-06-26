"use client";

import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const chartOptions = {
      type: "radar",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "My Skills",
            data: data.data,
            borderColor: "#000",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            pointRadius: 5,
            pointHoverBackgroundColor: "#000",
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        scales: {
          r: {
            min: 20,
            grid: {
              color: "rgb(0,0,0,0.3)",
            },
            angleLines: {
              color: "rgb(0,0,0,0.05)",
            },
            pointLabels: {
              color: "rgb(0,0,0,1)",
              
            },
            ticks: {
              color: "#2e1065",
              backdropColor: "rgb(0,0,0,0)",
            },
          },
        },
      },
    };

    const chartInstance = new Chart(ctx, chartOptions);
    function cleanup() {
      chartInstance.destroy();
    }

    return cleanup;
    setChart(chartInstance);
  }, [data]);

  return (<canvas id="myChart" width="400" height="400" />);
};

export default LineChart;
