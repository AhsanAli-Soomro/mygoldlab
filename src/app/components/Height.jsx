"use client"
import React, { useState } from "react";

export const Height = () => {
  const [inputs, setInputs] = useState({
    weight: "",
    refignedWeight: "",
  });
  const [result, setResult] = useState(null);

  const handleWeightChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    const weight = parseFloat(inputs.weight);
    const refignedWeight = parseFloat(inputs.refignedWeight);
    if (isNaN(weight) || isNaN(refignedWeight)) {
      alert("Please enter valid numbers for weight and refined weight.");
      return;
    }
    const sub = weight - refignedWeight;
    const divide = sub / weight;
    const result = (divide * 96).toFixed(2);
    setResult("Your Report is " + (result));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Height Calculator
          </h2>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Weight
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              name="weight"
              type="text"
              value={inputs.weight}
              onChange={handleWeightChange}
              placeholder="Enter weight"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="refignedWeight"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Refined Weight
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="refignedWeight"
              name="refignedWeight"
              type="text"
              value={inputs.refignedWeight}
              onChange={handleWeightChange}
              placeholder="Enter refined weight"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
              type="button"
              onClick={onSubmit}
            >
              Generate
            </button>
          </div>
          {result && (
            <div className="mt-8 p-4 border-t border-gray-200">
              <p className="text-lg text-center text-gray-700 font-semibold">
                Your Report:{" "}
                <span className="text-blue-600 font-bold">{result}</span>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
