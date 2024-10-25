"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const BMIGaugeChart = ({ bmiValue = 0 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  if (bmiValue === null) {
    return null;
  }

  const categories = [
    { name: "Underweight", range: [0, 18.5], color: "#ffc300" },
    { name: "Normal", range: [18.5, 24.9], color: "#20bf55" },
    { name: "Overweight", range: [24.9, 29.9], color: "#ff9800" },
    { name: "Obese", range: [29.9, 40], color: "#ff008a" },
  ];

  const getCategoryPercentage = (bmi) => {
    const category = categories.find(
      (cat) => bmi >= cat.range[0] && bmi < cat.range[1]
    );
    if (!category) return 100; // For BMI >= 40

    const categoryRange = category.range[1] - category.range[0];
    const valueInCategory = bmi - category.range[0];
    return (valueInCategory / categoryRange) * 25;
  };

  const getGaugePosition = (bmi) => {
    if (bmi < 18.5) return getCategoryPercentage(bmi);
    if (bmi < 24.9) return 25 + getCategoryPercentage(bmi);
    if (bmi < 29.9) return 50 + getCategoryPercentage(bmi);
    if (bmi < 40) return 75 + getCategoryPercentage(bmi);
    return 100;
  };

  const gaugePosition = getGaugePosition(bmiValue);

  const data = {
    datasets: [
      {
        data: [25, 25, 25, 25],
        backgroundColor: categories.map((cat) => cat.color),
        borderWidth: 0,
        weight: 6,
        datalabels: {
          display: true,
          align: "center",
          color: "white",
          font: { weight: "bold", size: "20px" },
          formatter: (value, context) => {
            const category = categories[context.dataIndex];
            return `${category.range[0]}-${category.range[1]}`;
          },
        },
      },
      {
        data: [gaugePosition, 100 - gaugePosition],
        backgroundColor: ["#0057ff", "transparent"],
        weight: 2,
        borderWidth: 0,
        datalabels: {
          display: true,
          align: "center",
          color: "white",
          font: { weight: "bold" },
          formatter: (value, context) => {
            return context.dataIndex === 0 ? bmiValue.toFixed(1) : "";
          },
        },
      },
    ],
    labels: categories.map((cat) => cat.name),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const category = categories[context.dataIndex];
            if (context.datasetIndex === 0) {
              return `${category.name}: ${category.range[0]}-${category.range[1]} BMI`;
            }
            return context.datasetIndex === 1 && context.dataIndex === 0
              ? `Current BMI: ${bmiValue.toFixed(1)}`
              : "";
          },
        },
      },
    },
  };

  const getCurrentCategory = (bmi) => {
    return (
      categories.find((cat) => bmi >= cat.range[0] && bmi < cat.range[1])
        ?.name || "Extreme Obesity"
    );
  };

  return (
    <div className="flex flex-col relative items-center justify-center ">
      <div className="w-full max-w-md">
        <Doughnut data={data} options={options} ref={chartRef} />
      </div>
      <div className="mt-[-160px] text-center">
        <div className="text-3xl font-bold text-blue-600">
          {bmiValue.toFixed(1)}
        </div>
        <div className="text-xl font-semibold text-gray-700">
          {getCurrentCategory(bmiValue)}
        </div>
      </div>
    </div>
  );
};

export default BMIGaugeChart;
