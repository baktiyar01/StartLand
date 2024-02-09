import React from "react";
import { Element } from "react-scroll";

const Category = () => {
  const categories = [
    { name: "IT", total: 256, completed: 122 },
    { name: "HR", total: 256, completed: 11 },
    { name: "Marketing", total: 256, completed: 33 },
    { name: "Health", total: 256, completed: 43 },
    { name: "Oil & Gas", total: 256, completed: 111 },
    { name: "Constraction", total: 256, completed: 11 },
  ];
  const totalApplications = categories[0].total;

  return (
    <Element name="deadline" className="relative mt-12">
      <h2 className="text-4xl mb-2">
        <span className="text-blue">Категории </span>поданных заявок
      </h2>
      <div className="p-4 max-w-[583px] mx-auto">
        <div className="flex justify-between mb-4">
          <div className="text-xl text-blue font-bold">Всего заявок</div>
          <div className="font-bold">{totalApplications}</div>
        </div>
        <div className="overflow-hidden">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center my-12">
              <div className="w-32 font-bold">{category.name}</div>
              <div className="relative flex-grow bg-gray-200 h-2.5 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-blue rounded-full"
                  style={{
                    width: `${(category.completed / category.total) * 100}%`,
                  }}
                ></div>
                <div className="mt-4 flex flex-col">
                  {category.completed}/{category.total}{" "}
                  {Math.round((category.completed / category.total) * 100)}%
                </div>
              </div>
              <div className="ml-8  flex flex-col">
                <div key={index} className="flex items-center">
                  <div className="ml-2 flex ">{category.completed}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Category;
