// src/hooks/useBmi.js

import { useState } from "react";
import { calculateBMI } from "../utils/bmiCalculator"; // Import the BMI calculator utility

/**
 * Custom hook to handle BMI calculation and tracking BMI history.
 *
 * @returns {Object} An object containing:
 *  - `bmi` (number|null): The calculated BMI value or null if not yet calculated.
 *  - `category` (string): The BMI category (e.g., "Underweight", "Normal weight", "Overweight", "Obese").
 *  - `handleCalculateBMI` (function): Function to calculate and update BMI and category.
 *  - `bmiHistory` (Array<number>): Array of past BMI values, updated with each calculation.
 */
const useBMI = () => {
  const [bmi, setBMI] = useState(null); // State to store current BMI value
  const [category, setCategory] = useState(""); // State to store current BMI category
  const [bmiHistory, setBmiHistory] = useState([]); // State to store history of BMI values

  /**
   * Calculates BMI and updates state with the current BMI value, category, and history.
   *
   * @param {number} height - Height of the individual in centimeters.
   * @param {number} weight - Weight of the individual in kilograms.
   */
  const handleCalculateBMI = (height, weight) => {
    // Destructure BMI value and category from the calculateBMI function
    const { bmiValue, bmiCategory } = calculateBMI(height, weight);

    // Update current BMI and category
    setBMI(bmiValue);
    setCategory(bmiCategory);

    // Update BMI history with the latest calculated BMI value
    setBmiHistory((prevHistory) => [...prevHistory, bmiValue]);
  };

  // Return current BMI value, category, handler function, and BMI history
  return { bmi, category, handleCalculateBMI, bmiHistory };
};

export default useBMI;
