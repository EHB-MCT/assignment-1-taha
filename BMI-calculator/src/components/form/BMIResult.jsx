// src/components/BMIResult.js
import React from "react";

const BMIResult = ({ bmi, category }) => {
  if (!bmi) return null;

  return (
    <div className="flex flex-col relative items-center justify-center bg-black rounded-lg shadow-md flex-1 p-5 ">
      <h2>Your BMI: {bmi}</h2>
      <p>Category: {category}</p>
    </div>
  );
};

export default BMIResult;
