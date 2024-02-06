import React from "react";
import arrow from "../../img/icons/Vector1.png";
const SecondForm = ({ formData, handleChange, nextStep, prevStep }) => {
  const salesSphereOptions = ["B2C", "B2B", "B2C&B2B"];
  const technologiesOptions = ["B2C", "B2C&B2B", "B2B"];
  return (
    <div className="mt-12 my-12">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <label
            htmlFor="fullName"
            className="block text-base font-medium text-gray-700"
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
            className="mt-1 p-2 w-full border rounded-md text-blue font-bold"
          />
          <label
            htmlFor="salesSphere"
            className="block text-base font-medium text-gray-700"
          >
            Описание проекта
          </label>
          <textarea
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Мой проект представляет из себя..."
            className="mt-1 p-2 border rounded-md text-blue font-bold w-full h-[125px]"
          />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col space-y-4">
            <label
              htmlFor="salesSphere"
              className="block text-base font-medium text-gray-700"
            >
              Сфера продаж
            </label>
            <div className="mt-1 flex space-x-4">
              {salesSphereOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    id={option}
                    name="salesSphere"
                    value={option}
                    checked
                    onChange={() =>
                      handleChange({
                        target: {
                          name: "salesSphere",
                          value: option,
                          type: "radio",
                        },
                      })
                    }
                    className="h-4 w-4 cursor-pointer border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4 p-3">
            <label
              htmlFor="technologies"
              className="block text-base font-medium text-gray-700"
            >
              Используемые технологии
            </label>
            <div className="mt-1 flex space-x-4 items-center">
              {technologiesOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    id={option}
                    name="technologiesOptions"
                    value={option}
                    checked
                    onChange={() =>
                      handleChange({
                        target: {
                          name: "technologiesOptions",
                          value: option,
                          type: "radio",
                        },
                      })
                    }
                    className="h-4 w-4 cursor-pointer border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

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
