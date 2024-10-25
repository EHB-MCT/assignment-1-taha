// src/components/BMIForm.js

import React, { useState } from "react";
import Button from "../ui/button/button.jsx";
import "./index.css";

/**
 * Form component for BMI calculation, allowing users to enter height and weight in metric or imperial units.
 *
 * @param {Function} calculateBMI - Function to calculate BMI using the provided height and weight.
 * @returns {JSX.Element} The rendered BMI form component.
 */
const BMIForm = ({ calculateBMI }) => {
  // State to manage height (either in metric or imperial units)
  const [height, setHeight] = useState({ feet: "", inches: "", cm: "" });

  // State to manage weight
  const [weight, setWeight] = useState("");

  // State to toggle between metric and imperial units
  const [unit, setUnit] = useState("metric");

  /**
   * Converts height and weight to metric units if imperial units are selected.
   *
   * @returns {Object} An object containing:
   *  - `height` (number): Height in centimeters.
   *  - `weight` (number): Weight in kilograms.
   */
  const convertToMetric = () => {
    // Convert height to centimeters
    const metricHeight =
      unit === "imperial"
        ? parseFloat(height.feet) * 30.48 + parseFloat(height.inches) * 2.54
        : parseFloat(height.cm);

    // Convert weight to kilograms
    const metricWeight =
      unit === "imperial" ? parseFloat(weight) * 0.453592 : parseFloat(weight);

    return { height: metricHeight, weight: metricWeight };
  };

  /**
   * Handles form submission, converting values to metric and triggering the BMI calculation.
   *
   * @param {Event} e - Form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const { height: metricHeight, weight: metricWeight } = convertToMetric();
    calculateBMI(metricHeight, metricWeight);
  };

  /**
   * Handles unit toggle between metric and imperial, clearing previous input values.
   *
   * @param {Event} e - The change event for unit selection.
   */
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
        {/* Unit selection dropdown */}
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

        {/* Height input */}
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

        {/* Weight input */}
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

        {/* Submit Button */}
        <Button />
      </form>
    </div>
  );
};

export default BMIForm;
