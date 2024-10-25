// src/utils/bmiCalculator.js

/**
 * Calculates the Body Mass Index (BMI) and categorizes the result.
 *
 * @param {number} height - Height of the individual in centimeters.
 * @param {number} weight - Weight of the individual in kilograms.
 * @returns {Object} An object containing:
 *  - `bmiValue` (number): The calculated BMI value, rounded to two decimal places.
 *  - `bmiCategory` (string): The BMI category (e.g., "Underweight", "Normal weight", "Overweight", "Obese").
 */
export const calculateBMI = (height, weight) => {
  // Convert height from centimeters to meters
  const heightInMeters = height / 100;

  // Calculate the BMI value
  const bmiValue = weight / (heightInMeters * heightInMeters);

  // Round the BMI value to two decimal places
  const bmiValueRounded = parseFloat(bmiValue.toFixed(2));

  // Determine the BMI category based on the calculated BMI value
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

  // Return the BMI value and category
  return { bmiValue: bmiValueRounded, bmiCategory };
};
