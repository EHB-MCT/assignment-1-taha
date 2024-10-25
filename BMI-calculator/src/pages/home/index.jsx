// src/pages/home/index.jsx
import React from "react";
import BMIGauge from "../../components/charts/BMIGauge";
import BMIForm from "../../components/form/BMIForm";
import BMIResult from "../../components/form/BMIResult";
import useBMI from "../../hooks/useBmi";
import "../../styles/App.css";
import HealthTips from "./HealthTips";
import "./index.css";

const Home = () => {
  const { bmi, category, handleCalculateBMI } = useBMI();

  return (
    <div className="home w-full">
      <div className="mb-20 mt-5 flex flex-col gap-5">
        <h1 className=" text-black font-extrabold text-2xl">BMI Calculator</h1>
        <h2 className="text-[#4a4a4c] font-normal text-md underline underline-offset-[40px] decoration-size-[0.5px] decoration-[#dedfe3]">
          Wil je weten of je een gezond gewicht hebt? Bereken snel je BMI. De
          BMI geeft aan of je gewicht gezond is in relatie tot je lengte.
        </h2>
      </div>
      <div className="flex  justify-center align-middle gap-10">
        <div className="flex flex-col gap-10 flex-1">
          <BMIForm calculateBMI={handleCalculateBMI} />
          <BMIResult bmi={bmi} category={category} />
        </div>
        <div className="bmi-gauge">
          <BMIGauge bmiValue={bmi || 0} />
        </div>
      </div>
      <div className="flex">
        <HealthTips category={category} />
      </div>
    </div>
  );
};

export default Home;
