// src/utils/bmiCalculator.js
export const calculateBMI = (height, weight) => {
  const heightInMeters = height / 100;
  const bmiValue = weight / (heightInMeters * heightInMeters);

  const bmiValueRounded = parseFloat(bmiValue.toFixed(2));

  let bmiCategory = "";
  if (bmiValueRounded < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmiValueRounded >= 18.5 && bmiValueRounded < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmiValueRounded >= 25 && bmiValueRounded < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  return { bmiValue: bmiValueRounded, bmiCategory };
};
