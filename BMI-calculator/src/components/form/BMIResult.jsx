import React from "react";

/**
 * The BMIResult component displays the BMI value and its corresponding category.
 * It receives 'bmi' and 'category' as props from its parent component.
 *
 * @param {Object} props - The component props.
 * @param {number} props.bmi - The calculated BMI value.
 * @param {string} props.category - The category corresponding to the BMI value.
 * @returns {JSX.Element|null} The rendered BMI result component or null if no BMI is provided.
 */
const BMIResult = ({ bmi, category }) => {
  // If there's no BMI value provided, return null (don't render the component)
  if (!bmi) return null;

  return (
    <div className="flex flex-col relative items-center justify-center bg-black rounded-lg shadow-md flex-1 p-5">
      <h2 className="text-white text-2xl font-bold">
        Your BMI: {bmi.toFixed(1)}
      </h2>
      <p className="text-gray-300">Category: {category}</p>
    </div>
  );
};

export default BMIResult;
