import React from "react";
import { Element } from "react-scroll";
import icon1 from "../../img/icons/Graph.svg";
import icon2 from "../../img/icons/Chat.svg";
import icon3 from "../../img/icons/Work.svg";
import icon4 from "../../img/icons/Send.svg";
const Participation = () => {
  return (
    <Element name="participation" className="relative mt-12">
      <h2 className="text-4xl my-12">
        Что даст Вам <span className="text-blue">участие? </span>
      </h2>
      <div className="p-4 max-w-[583px] mx-auto">
        <img src={icon1} alt="graph" className="absolute" />
        <div className="ml-14">
          <h5 className="mb-2 text-2xl font-bold text-black dark:text-opacity-60">
            Сильного стратегического партнёра
          </h5>
          <p className="mb-4 text-lg">
            Возможность интеграции с 60+ компаниями экосистемы Сбера: запуск
            пилотных проектов, заключение полноценных контрактов, обмен опытом и
            экспертизой
          </p>
        </div>
        <div className="border-b border-solid border-opacity-34  dark:border-opacity-60 mb-6"></div>

        <img src={icon2} alt="graph" className="absolute" />
        <div className="ml-14">
          <h5 className="mb-2 text-2xl font-bold text-black dark:text-opacity-60">
            Сотрудничество с внешними партнерами
          </h5>
          <p className="mb-4 text-lg">
            В числе партнёров StartLand— десятки крупнейших корпораций, которые
            будут присматриваться к стартапам в период Акселератора
          </p>
        </div>
        <div className="border-b border-solid border-opacity-34  dark:border-opacity-60 mb-6"></div>

        <img src={icon3} alt="graph" className="absolute" />
        <div className="ml-14">
          <h5 className="mb-2 text-2xl font-bold text-black dark:text-opacity-60">
            Инвестиции от фонда
          </h5>
          <p className="mb-4 text-lg">
            По итогу программы лучшие команды могут получить инвестиции от
            других фондов-партнеров акселератора. Условия инвест-предложений
            будут определяться индивидуально
          </p>
        </div>
        <div className="border-b border-solid border-opacity-34 dark:border-opacity-60 mb-6"></div>

        <img src={icon4} alt="graph" className="absolute" />
        <div className="ml-14">
          <h5 className="mb-2 text-2xl font-bold text-black dark:text-opacity-60">
            Возможность дальнейшего роста
          </h5>
          <p className="mb-4 text-lg">
            Самым зрелым и интересным стартапам мы предложим коллаборацию с нами
            без прохождения буткемпов и акселератора
          </p>
        </div>
        <div className="border-b border-solid border-opacity-34 dark:border-opacity-60 mb-6"></div>
      </div>
    </Element>
  );
};

export default Participation;
