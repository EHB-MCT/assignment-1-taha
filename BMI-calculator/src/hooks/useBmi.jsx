// src/hooks/useBMI.js
import { useState } from "react";
import { calculateBMI } from "../utils/bmiCalculator";

const useBMI = () => {
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const handleCalculateBMI = (height, weight) => {
    const { bmiValue, bmiCategory } = calculateBMI(height, weight);
    setBMI(bmiValue);
    setCategory(bmiCategory);
  };

  return { bmi, category, handleCalculateBMI };
};

export default useBMI;
