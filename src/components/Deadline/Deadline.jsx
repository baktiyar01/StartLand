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
        <img src={timeLine} alt="timeline" className="w-full md:w-auto" />
      </div>
    </Element>
  );
};

export default Deadline;
