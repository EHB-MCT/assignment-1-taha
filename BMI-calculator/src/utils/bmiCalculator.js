// src/utils/bmiCalculator.js
export const calculateBMI = (height, weight) => {
  const heightInMeters = height / 100;
  const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let bmiCategory = "";
  if (bmiValue < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  return { bmiValue, bmiCategory };
};
