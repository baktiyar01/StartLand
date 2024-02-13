import React from "react";
import arrow from "../../img/icons/Vector1.png";
import RadioButton from "./RadioButton";

const SecondForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const salesSphereOptions = ["B2C", "B2B", "B2C&B2B"];
  const technologiesOptions = ["B2C", "B2C&B2B", "B2B"];

  return (
    <div className="mt-12 my-12">
      <div className="flex col">
        <div className="flex justify-between items-center gap-14">
          <div className="items-center">
            <label
              htmlFor="fullName"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Что даст Ваше решение?
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Введите имя"
              className="p-2 border rounded-md text-blue font-bold w-[385px] h-[32px]"
            />
          </div>
          <div className="flex items-center pt-6">
            <label
              htmlFor="salesSphere"
              className="block text-base font-medium text-gray-700 mr-4 "
            >
              Сфера продаж
            </label>
            <RadioButton
              name="salesSphere"
              options={salesSphereOptions}
              value={formData.salesSphere}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex col">
        <div className="flex justify-between gap-14">
          <div>
            <label
              htmlFor="description"
              className="block text-base font-medium text-gray-700 mt-4 mb-2"
            >
              Описание проекта
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Мой проект представляет из себя..."
              className="p-2 border rounded-md text-blue font-bold w-[532px] h-[125px]"
            />
          </div>
          <div className="pt-6">
            <label
              htmlFor="technologies"
              className="block text-base font-medium text-gray-700 mb-2 mt-2"
            >
              Используемые технологии
            </label>
            <div className="mt-4">
              <RadioButton
                name="technologies"
                options={technologiesOptions}
                value={formData.technologies}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-solid border-opacity-34  dark:border-opacity-60 mt-6"></div>
      <div className="flex justify-end mt-10">
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

export default SecondForm;
