import React from "react";
import clipIcon from "../../img/icons/akar-icons_attach.svg";
import RadioButton from "./RadioButton";
import { useState } from "react";

const ThirdForm = ({ formData, handleChange, submission }) => {
  const options = ["Да", "Нет"];
  const [attachedFileName, setAttachedFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAttachedFileName(file ? file.name : "");
    handleChange(event);
  };
  return (
    <div className="mt-12 my-12">
      <div className="col-span-1">
        <label
          htmlFor="projectUniqueness"
          className="block text-base font-medium text-gray-700"
        >
          В чем уникальность проекта?
        </label>
        <textarea
          type="text"
          id="projectUniqueness"
          name="projectUniqueness"
          value={formData.projectUniqueness}
          onChange={handleChange}
          placeholder="Введите имя"
          className="mt-1 p-2 border rounded-md text-blue font-bold w-full "
        />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex">
            <label
              htmlFor="startupExperience"
              className="block text-base font-medium text-gray-700 mr-4"
            >
              Имеется ли опыт в старт апах?
            </label>

            <RadioButton
              name="startupExperience"
              options={options}
              value={formData.startupExperience}
              handleChange={handleChange}
            />
          </div>
          <div className="flex ">
            <label
              htmlFor="researches"
              className="block text-base font-medium text-gray-700 mr-4"
            >
              Проводились ли исследования?
            </label>

            <RadioButton
              name="researches"
              options={options}
              value={formData.researches}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex mt-6">
            <label
              htmlFor="presentation"
              className="block text-base font-medium text-gray-700 mr-4 mt-4"
            >
              Есть ли презентация проекта?
            </label>
            <RadioButton
              name="presentation"
              options={options}
              value={formData.presentation}
              handleChange={handleChange}
            />
          </div>

          <div
            className="flex justify-center mt-6 p-2  rounded-md w-[359px] h-[57px] "
            style={{ backgroundColor: "#D4E0F8" }}
          >
            <input
              type="file"
              id="attachedPresentation"
              name="attachedPresentation"
              className="hidden"
              onChange={handleFileChange}
            />
            <img src={clipIcon} alt="clipIcon" />
            <label
              htmlFor="attachedPresentation"
              className="block text-base  text-blue font-bold underline"
            >
              {attachedFileName ? attachedFileName : "Прикрепить презентацию"}
            </label>
          </div>
        </div>
        <div className="flex mt-6 ">
          <input
            type="file"
            id="attachedPresentation"
            name="attachedPresentation"
            className="hidden"
            onChange={handleFileChange}
          />
          <img src={clipIcon} alt="clipIcon" />
          <label
            htmlFor="attachedPresentation"
            className="block text-base  text-blue font-bold underline"
          >
            {attachedFileName ? attachedFileName : "Прикрепить другие файлы"}
          </label>
        </div>
        <div className="border-b border-solid border-opacity-34  dark:border-opacity-60 mt-6"></div>
        <div className="mt-10 flex justify-between">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              id="termsAgreement"
              name="termsAgreement"
              checked={formData.termsAgreement}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue"
            />
            <span className="ml-2 text-gray-700 text-xs">
              Отправляя заявку, я соглашаюсь с условиями пользовательского
              соглашения
            </span>
          </label>
          <button
            onClick={submission}
            className="mt-4 p-2 rounded-md w-full text-white flex items-center justify-center"
            style={{
              width: "283px",
              height: "32px",
              borderRadius: "8px",
              backgroundColor: "#024EDF",
            }}
          >
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
