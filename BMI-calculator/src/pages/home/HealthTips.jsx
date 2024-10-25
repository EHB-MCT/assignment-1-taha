import React from "react";

const healthTips = {
  underweight:
    "It's important to eat nutrient-rich foods and consult a healthcare provider for personalized advice.",
  "normal weight":
    "Maintain a balanced diet and regular exercise to keep your weight stable.",
  overweight:
    "Focus on a balanced diet, portion control, and regular physical activity.",
  obese:
    "Consult a healthcare provider for personalized advice, and consider a structured weight loss plan.",
};

const HealthTips = ({ category }) => {
  if (!category) return null;

  const tipKey = category.toLowerCase();
  const tip = healthTips[tipKey] || "Please calculate your BMI first.";

  return (
    <div className="flex flex-col items-center justify-center bg-[#eef5ff] rounded-lg shadow-inner w-full mt-6 pt-6 pb-6 gap-6">
      <h1 className="text-black font-semibold text-2xl">Health Tips</h1>
      <p className="text-black">{tip}</p>
    </div>
  );
};

export default HealthTips;
