// src/components/BMIForm.js
import React, { useState } from "react";
import Button from "../ui/button/button.jsx";
import "./index.css";

const BMIForm = ({ calculateBMI }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI(height, weight);
  };

  return (
    <div className=" bg-[#eef5ff] rounded-lg shadow-inner ">
      <form
        class="max-w-sm mx-auto flex flex-col justify-start p-5"
        onSubmit={handleSubmit}
      >
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            height
          </label>
          <div className="flex items-center">
            <input
              class="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex. 170"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <span className="text-black ml-[-30px]">cm</span>
          </div>
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">
            Weight
          </label>
          <div className="flex items-center">
            <input
              class="bg-[#fafcff] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="ex. 70"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <span className="text-black ml-[-30px]">kg</span>
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
};

export default BMIForm;
