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
  // Convert category to lowercase and replace spaces for key matching
  const tipKey = category.toLowerCase();
  const tip = healthTips[tipKey] || "Please calculate your BMI first.";

  return (
    <div className="health-tips">
      <h2>Health Tips</h2>
      <p>{tip}</p>
    </div>
  );
};

export default HealthTips;
