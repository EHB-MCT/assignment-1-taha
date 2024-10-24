// src/App.js
import React from "react";
import BMIForm from "../../components/form/BMIForm";
import BMIResult from "../../components/form/BMIResult";
import useBMI from "../../hooks/useBmi";
import "../../styles/App.css";

const Home = () => {
  const { bmi, category, handleCalculateBMI } = useBMI();

  return (
    <div className="home">
      <h1>BMI Calculator</h1>
      <BMIForm calculateBMI={handleCalculateBMI} />
      <BMIResult bmi={bmi} category={category} />
    </div>
  );
};

export default Home;
