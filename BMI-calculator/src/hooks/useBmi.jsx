// src/hooks/useBmi.js
import { useState } from "react";
import { calculateBMI } from "../utils/bmiCalculator"; // Adjust the import as necessary

const useBMI = () => {
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");
  const [bmiHistory, setBmiHistory] = useState([]); // New state for BMI history

  const handleCalculateBMI = (height, weight) => {
    const { bmiValue, bmiCategory } = calculateBMI(height, weight);
    setBMI(bmiValue);
    setCategory(bmiCategory);
    setBmiHistory((prevHistory) => [...prevHistory, bmiValue]); // Update BMI history
  };

  return { bmi, category, handleCalculateBMI, bmiHistory }; // Return bmiHistory
};

export default useBMI;
