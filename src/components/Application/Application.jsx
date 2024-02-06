import React from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import useForm from "../../hooks/useMultistepForm";
import background2 from "../../img/background/back-2.svg";
import { Element } from "react-scroll";

const Application = () => {
  const { formData, step, handleChange, nextStep, prevStep } = useForm({
    salesSphere: "",
  });

  const steps = [FirstForm, SecondForm, ThirdForm];
  const CurrentStep = steps[step - 1];
  const totalSteps = steps.length;
  const isFirstStep = step === 1;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Element name="application" className="relative m-5 p-5">
      <section id="application" className="w-3/4 ml-4">
        <div className="mt-8 flex justify-between">
          <h1 className="text-2xl">
            Заполните <span className="text-blue">заявку на участие</span>
          </h1>
          <div className="flex items-end ">
            {!isFirstStep && (
              <button
                onClick={prevStep}
                className="p-2 rounded-md text-blue flex items-center justify-center  border border-blue ml-1 text-sm font-bold"
                style={{
                  width: "283px",
                  height: "32px",
                  borderRadius: "8px",
                }}
              >
                Вернуться к предыдущему шагу
              </button>
            )}
            <div className="text-blue font-bold ml-3">
              Шаг {step} / {totalSteps}
            </div>
          </div>
        </div>
        <div className="relative">
          <form onSubmit={onSubmit} className="absolute z-10 ">
            <CurrentStep
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          </form>
          <img
            src={background2}
            alt="back2"
            className="absolute top-[200px] right-0"
          />
        </div>
      </section>
    </Element>
  );
};

export default Application;
