import React from "react";
import home from "../../img/background/back.svg";
import quote_2 from "../../img/quotes/quote2.svg";
import background from "../../img/background/background2.svg";
import startland from "../../img/background/StartLand.svg";
import quote_1 from "../../img/quotes/quote1.svg";
import { Element } from "react-scroll";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "470px",
  };

  const container = {
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "470px",
  };

  return (
    <Element name="home" className="relative">
      <div className="relative" style={containerStyle}>
        <div className="relative" style={container}>
          <div className="absolute top-12 right-28">
            <img src={quote_1} alt="start" />
          </div>
          <div className="absolute bottom-0">
            <img src={startland} alt="start" />
          </div>
        </div>
      </div>

      <section className="w-full md:w-3/4 ml-4 px-4 md:px-0 mt-10 md:mt-20">
        <div className="relative text-left font-light">
          <div className="flex flex-col md:flex-row items-end justify-between">
            <div className="md:w-3/5">
              <h1 className="md:text-lg">
                StartLand - это акселерационная программа созданная для развития
                ИТ стартапов и поддержки инновационных решений. Участникам
                предстоит пройти несколько этапов оценки и отбора, результатом
                которых станет определение наиболее перспективных проектов.
                Лучшие команды смогут получить финансовое вознаграждение или
                поддержку в развитии проекта.
              </h1>
            </div>
            <img
              src={quote_2}
              alt="Quotes"
              className="hidden md:block md:ml-10"
            />
          </div>
        </div>
        <div className="blue-bar mt-10 md:mt-20" />
      </section>
    </Element>
  );
};
export default Home;
