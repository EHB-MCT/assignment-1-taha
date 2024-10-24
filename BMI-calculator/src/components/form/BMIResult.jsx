// src/components/BMIResult.js
import React from "react";

const BMIResult = ({ bmi, category }) => {
  if (!bmi) return null;

  return (
    <div>
      <h2>Your BMI: {bmi}</h2>
      <p>Category: {category}</p>
    </div>
  );
};

export default BMIResult;
