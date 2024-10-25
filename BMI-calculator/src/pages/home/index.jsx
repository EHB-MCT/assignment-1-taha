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
          Curious if you have a healthy weight? Quickly calculate your BMI. The
          BMI indicates whether your weight is healthy in relation to your
          height.
        </h2>
      </div>
      <div className="flex  justify-center align-middle gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <BMIForm calculateBMI={handleCalculateBMI} />
          <BMIResult bmi={bmi} category={category} />
        </div>
        <div className="bmi-gauge bg-[#eef5ff] rounded-lg shadow-inner flex-3  pb-10 h-auto">
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
