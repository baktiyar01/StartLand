import { useState } from "react";

const useForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio" && checked) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (type !== "radio") {
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
    setFormData,
    setStep,
  };
};

export default useForm;
