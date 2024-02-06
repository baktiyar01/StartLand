// useMultistepForm.jsx
import { useState } from "react";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState({ initialValues });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? value : "", // Uncheck the radio button if already selected
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return {
    formData,
    step,
    handleChange,
    nextStep,
    prevStep,
  };
};

export default useForm;
