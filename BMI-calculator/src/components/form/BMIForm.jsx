// src/components/BMIForm.js
import React, { useState } from "react";
import Button from "../ui/button/button.jsx";
import "./index.css";

const BMIForm = ({ calculateBMI }) => {
  const [height, setHeight] = useState({ feet: "", inches: "", cm: "" });
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("metric"); // State to toggle between metric and imperial

  // Convert height and weight to metric if needed
  const convertToMetric = () => {
    let metricHeight =
      unit === "imperial"
        ? parseFloat(height.feet) * 30.48 + parseFloat(height.inches) * 2.54
        : parseFloat(height.cm);

    let metricWeight =
      unit === "imperial" ? parseFloat(weight) * 0.453592 : parseFloat(weight);

    return { height: metricHeight, weight: metricWeight };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { height: metricHeight, weight: metricWeight } = convertToMetric();
    calculateBMI(metricHeight, metricWeight);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    setHeight({ feet: "", inches: "", cm: "" });
    setWeight("");
  };

  return (
    <div className="bg-[#eef5ff] rounded-lg shadow-inner">
      <form
        className="max-w-sm mx-auto flex flex-col justify-start p-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            Unit
          </label>
          <select
            className="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
            value={unit}
            onChange={handleUnitChange}
          >
            <option value="metric">Metric (cm, kg)</option>
            <option value="imperial">Imperial (ft, in, lbs)</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            Height
          </label>
          {unit === "metric" ? (
            <div className="flex items-center">
              <input
                className="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
                placeholder="ex. 170"
                type="number"
                value={height.cm}
                onChange={(e) => setHeight({ ...height, cm: e.target.value })}
                required
              />
              <span className="text-black ml-2">cm</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <input
                className="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-1/2"
                placeholder="ft"
                type="number"
                value={height.feet}
                onChange={(e) => setHeight({ ...height, feet: e.target.value })}
                required
              />
              <input
                className="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-1/2"
                placeholder="in"
                type="number"
                value={height.inches}
                onChange={(e) =>
                  setHeight({ ...height, inches: e.target.value })
                }
                required
              />
              <span className="text-black ml-2">ft/in</span>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            Weight
          </label>
          <div className="flex items-center">
            <input
              className="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
              placeholder={`ex. ${unit === "metric" ? "70" : "154"}`}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <span className="text-black ml-2">
              {unit === "metric" ? "kg" : "lbs"}
            </span>
          </div>
        </div>

        <Button />
      </form>
    </div>
  );
};

export default BMIForm;
