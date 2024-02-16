import React from "react";
import { Element } from "react-scroll";
import timeLine from "../../img/background/timeline.svg";
const Deadline = () => {
  return (
    <Element name="deadline" className="relative mt-12 my-12">
      <div className="mt-12 my-12">
        <h2 className="text-4xl  text-blue mb-2">Сроки и этапы</h2>
      </div>
      <div className="flex justify-center">
        <img src={timeLine} alt="timeline" />
      </div>
      {/* <div className="flex justify-center">
        <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:gap-6 md:border-l-0 md:border-t">
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-gray-700 ">1.02.2022</p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h1 className="mb-1.5 text-sm font-semibold">
                <span className="text-blue mr-1">I</span>Подача заявки
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-gray-700 ">1.02.2022</p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h1 className="mb-1.5 text-sm font-semibold">
                <span className="text-blue mr-1">II</span>Завершение приема
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-gray-700  ">1.02.2022</p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h1 className="mb-1.5 text-sm font-semibold">
                <span className="text-blue mr-1">III</span>Экспертиза
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-gray-700 ">1.02.2022</p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h1 className="mb-1.5 text-sm font-semibold">
                <span className="text-blue mr-1">IV</span>Акселератор
              </h1>
            </div>
          </li>
          <li>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-blue md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-gray-700">1.02.2022</p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h1 className="mb-1.5 text-sm font-semibold">
                <span className="text-blue mr-1">V</span>Оглашение результатов
              </h1>
            </div>
          </li>
        </ol>
      </div> */}
    </Element>
  );
};

export default Deadline;
