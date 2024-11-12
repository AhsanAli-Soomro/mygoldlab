import React, { useState } from "react";
import { Weight } from "./Weight";
import { Height } from "./Height";

export const Stepper = () => {
  const steps = [
    { id: 1, name: "Weight", component: <Weight /> },
    { id: 2, name: "Height", component: <Height/> },
  ];

  const [activeStep, setActiveStep] = useState(steps[0].id);

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <div className="flex border-b-2 justify-center mb-3 gap-3">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className={`text-lg font-semibold ${
                activeStep === step.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
              }`}
            >
              {step.name}
            </button>
          ))}
        </div>
        <div>
          {steps.find((step) => step.id === activeStep)?.component}
        </div>
      </div>
    </div>
  );
};
