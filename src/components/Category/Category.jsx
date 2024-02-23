import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import background3 from "../../img/background/back-3.svg";
import quote_2 from "../../img/quotes/quote2.svg";
import supabase from "../../utils/supabaseClient";
const Category = () => {
  // const categories = [
  //   { name: "IT", total: 256, completed: 122 },
  //   { name: "HR", total: 256, completed: 11 },
  //   { name: "Marketing", total: 256, completed: 33 },
  //   { name: "Health", total: 256, completed: 43 },
  //   { name: "Oil & Gas", total: 256, completed: 111 },
  //   { name: "Constraction", total: 256, completed: 11 },
  // ];
  // const totalApplications = categories[0].total;
  const [industries, setIndustries] = useState([]);
  useEffect(() => {
    getIndustries();
  }, []);

  async function getIndustries() {
    const { data } = await supabase.from("industries").select();
    setIndustries(data);
  }
  const totalApplications = industries.length > 0 ? industries[0].total : 0;

  return (
    <Element name="deadline" className="mt-12">
      <h2 className="text-4xl my-12">
        <span className="text-blue">Категории </span>поданных заявок
      </h2>
      <img src={background3} alt="back3" className="absolute" />
      <div className="p-4 max-w-[583px] mx-auto relative ">
        <div className="flex justify-between mb-4">
          <div className="text-xl text-blue font-bold">Всего заявок</div>
          <div className="font-bold">{totalApplications}</div>
        </div>
        <div className="overflow-hidden">
          {industries.map((industry, index) => (
            <div key={industry.id} className="flex items-center my-12">
              <div className="w-32 font-bold">{industry.name}</div>
              <div className="relative flex-grow bg-gray-200 h-2.5 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-blue rounded-full"
                  style={{
                    width: `${(industry.completed / industry.total) * 100}%`,
                  }}
                ></div>
                <div className="mt-4 flex flex-col">
                  {industry.completed}/{industry.total}{" "}
                  {Math.round((industry.completed / industry.total) * 100)}%
                </div>
              </div>
              <div className="ml-8  flex flex-col">
                <div key={index} className="flex items-center">
                  <div className="ml-2 flex ">{industry.completed}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-end">
          <img src={quote_2} alt="Quotes" />
        </div>
      </div>
    </Element>
  );
};

export default Category;
