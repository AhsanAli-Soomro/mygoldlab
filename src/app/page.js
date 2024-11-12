"use client"
import React, { useState } from "react";
import { Stepper } from "./components/Stepper";

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
<Stepper/>
  );
}
