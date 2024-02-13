import React from "react";
import { Element } from "react-scroll";
import Question from "./Question";
import background4 from "../../img/background/back-4.svg";
const Faq = ({ question, answer }) => {
  return (
    <Element name="faq" className="relative">
      <div className="mt-12 my-12 ">
        <h2 className="text-4xl mb-5">
          Часто задаваемые <span className="text-blue">вопросы?</span>
        </h2>
        <Question
          question="Должен ли я передать интеллектуальные права по завершение акселерационной программы?"
          answer="Да, каждый участник имеет право подавать любое количество заявок. Главное указывать разные описания и название проектов"
        />
        <Question
          question="Могу ли я подать заявку на новый проект?"
          answer="Да, каждый участник имеет право подавать любое количество заявок. Главное указывать разные описания и название проектов"
        />

        <Question
          question="На какой стадии готовности мой стартап может попасть в акселерационные программу?"
          answer="Empty"
        />
        <Question
          question="Могут ли физические лица участвовать в программе?"
          answer="Empty"
        />
      </div>
      <img
        src={background4}
        alt="back-4"
        className="absolute top-0 right-0 pointer-events-none"
      />
      <div className="mt-7 flex justify-end w-3/4">
        <h2 className="text-lg mb-2 text-blue font-bold underline">
          Ещё 12 вопросов
        </h2>
      </div>
    </Element>
  );
};
export default Faq;
