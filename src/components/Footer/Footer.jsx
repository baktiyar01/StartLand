import React from "react";
import dot from "../../img/icons/dot.svg";
import icon from "../../img/icons/carbon_user-online.svg";
import elipse from "../../img/icons/Ellipse 20.svg";

function Footer() {
  return (
    <footer className="py-4 px-2">
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold break-words font-raleway">
          <span className="text-black">Start</span>
          <span className="text-blue inline-flex items-baseline">
            Land
            <img src={dot} alt="Dot" />
          </span>
        </span>
        <div className="flex items-center font-ptSansPro">
          <span className="mr-3 text-lg font-light">
            Добрый день,
            <span className="mr-3 text-lg font-bold">Татьяна Ф.</span>
          </span>
          <div className="relative rounded-full overflow-hidden w-8 h-8 mr-3">
            <img
              src={elipse}
              alt="Elipse"
              className="w-full h-full object-cover"
            />
            <img
              src={icon}
              alt="Icon"
              className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
