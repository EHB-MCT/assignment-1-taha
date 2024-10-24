// src/components/BMIForm.js
import React, { useState } from "react";
import Button from "../ui/button/button";

const BMIForm = ({ calculateBMI }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(height, weight);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Height (in cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Weight (in kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <Button />
    </form>
  );
};

export default BMIForm;
