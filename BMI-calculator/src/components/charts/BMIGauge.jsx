"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

/**
 * A gauge chart component to visualize BMI value using a doughnut chart.
 *
 * @param {Object} props - The component props.
 * @param {number} props.bmiValue - The current BMI value to visualize.
 * @returns {JSX.Element|null} The rendered gauge chart component or null if no BMI value is provided.
 */
const BMIGaugeChart = ({ bmiValue = 0 }) => {
  const chartRef = useRef(null);

  // Clear chart instance on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  // Render nothing if BMI value is absent
  if (bmiValue === null) return null;

  // BMI categories with respective ranges and colors
  const categories = [
    { name: "Underweight", range: [0, 18.5], color: "#ffc300" },
    { name: "Normal", range: [18.5, 24.9], color: "#20bf55" },
    { name: "Overweight", range: [24.9, 29.9], color: "#ff9800" },
    { name: "Obese", range: [29.9, 40], color: "#ff008a" },
  ];

  /**
   * Calculates the percentage position within the BMI category based on the current BMI.
   *
   * @param {number} bmi - The current BMI value.
   * @returns {number} The percentage position within the category.
   */
  const getPercentageWithinCategory = (bmi) => {
    const category = categories.find(
      (cat) => bmi >= cat.range[0] && bmi < cat.range[1]
    );
    if (!category) return 100;

    const rangeSize = category.range[1] - category.range[0];
    const positionWithinCategory = bmi - category.range[0];
    return (positionWithinCategory / rangeSize) * 25;
  };

  /**
   * Calculates the gauge position based on the current BMI.
   *
   * @param {number} bmi - The current BMI value.
   * @returns {number} The calculated position for the gauge.
   */
  const getGaugePosition = (bmi) => {
    if (bmi < 18.5) return getPercentageWithinCategory(bmi);
    if (bmi < 24.9) return 25 + getPercentageWithinCategory(bmi);
    if (bmi < 29.9) return 50 + getPercentageWithinCategory(bmi);
    if (bmi < 40) return 75 + getPercentageWithinCategory(bmi);
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
          formatter: (value, context) =>
            context.dataIndex === 0 ? bmiValue.toFixed(1) : "",
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
            return context.datasetIndex === 0
              ? `${category.name}: ${category.range[0]}-${category.range[1]} BMI`
              : context.datasetIndex === 1 && context.dataIndex === 0
              ? `Current BMI: ${bmiValue.toFixed(1)}`
              : "";
          },
        },
      },
    },
  };

  /**
   * Gets the current BMI category based on the BMI value.
   *
   * @param {number} bmi - The current BMI value.
   * @returns {string} The name of the BMI category.
   */
  const getCurrentCategory = (bmi) =>
    categories.find((cat) => bmi >= cat.range[0] && bmi < cat.range[1])?.name ||
    "Extreme Obesity";

  return (
    <div className="flex flex-col relative items-center justify-center">
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
