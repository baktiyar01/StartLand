import React, { useState, useEffect } from "react";
import arrow from "../../img/icons/Vector1.png";
import supabase from "../../utils/supabaseClient";

const FirstForm = ({ formData, handleChange, nextStep }) => {
  const [industries, setIndustries] = useState([]);
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    getIndustries();
  }, []);

  async function getIndustries() {
    const { data } = await supabase.from("industries").select();
    setIndustries(data);
  }

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    handleChange(event);
    validateEmail(value);
  };

  return (
    <div className="mt-12  my-12">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <label
            htmlFor="fullName"
            className="block text-base font-medium text-gray-700"
          >
            Полное имя
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Татьяна"
            className="mt-1 p-2 w-[283px] h-[32px] border rounded-md text-blue font-bold"
          />
          <label
            htmlFor="projectName"
            className="block text-base font-medium text-gray-700 text-blue w-[283px] h-[32px] mt-4"
          >
            Название проекта
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Введите имя"
            className="mt-1 p-2 w-full border rounded-md text-blue font-bold"
          />
        </div>

        <div className="col-span-1">
          <label
            htmlFor="phoneNumber"
            className="block text-base font-medium text-gray-700"
          >
            Телефон
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 ("
            className="mt-1 p-2 w-full border rounded-md text-blue font-bold"
          />

          <label
            htmlFor="industry"
            className="block text-base font-medium text-gray-700 w-[283px] h-[32px] mt-4"
          >
            Отрасль
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value=""> Выберите отрасль</option>
            {industries.map((industry) => (
              <option key={industry.id} value={industry.id}>
                {industry.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 ">
          <label
            htmlFor="email"
            className="block  text-base font-medium text-gray-700  "
          >
            e-mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="Введите e-mail"
            className="mt-1 p-2 w-full border rounded-md text-blue font-bold"
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
      </div>
      <div className="border-b border-solid border-opacity-34  dark:border-opacity-60 mt-6"></div>
      <div className="flex justify-between mt-10">
        <h1>Перейти к следующему шагу</h1>
        <button
          onClick={nextStep}
          className="p-2 rounded-md w-full text-white flex items-center justify-center"
          style={{
            width: "283px",
            height: "32px",
            borderRadius: "8px",
            backgroundColor: "#024EDF",
          }}
        >
          Далее
          <img src={arrow} alt="arrow" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FirstForm;
