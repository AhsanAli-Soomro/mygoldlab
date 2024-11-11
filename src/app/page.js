"use client"
import React, { useState } from "react";

export default function Home() {
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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
              Weight
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              name="weight"
              type="text"
              value={inputs.weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="refignedWeight" className="block text-gray-700 text-sm font-bold mb-2">
              Refined Weight
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="refignedWeight"
              name="refignedWeight"
              type="text"
              value={inputs.refignedWeight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Generate
            </button>
          </div>
          {
            result && result != null ?
              <p style={{ marginTop: "20px" }}>{result}</p> : ""
          }
        </form>
      </div>
    </div>
  );
}
