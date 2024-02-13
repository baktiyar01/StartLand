import React from "react";
import dot from "../../img/icons/dot.svg";
import logo from "../../img/background/StartLand-f.svg";
import telegram from "../../img/socials/telegramm.svg";
import instagram from "../../img/socials/instagramm.svg";
import facebook from "../../img/socials/facebook.svg";
import vk from "../../img/socials/vk.svg";

function Footer() {
  return (
    <footer className=" py-8 px-2 bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <span className="inline-flex items-baseline">
          <img src={logo} alt="logo" />
          <img src={dot} alt="Dot" />
        </span>

        <span className="mr-3 text-lg font-light text-white">
          2021. StartLand Публичная офферта
        </span>

        <div className="flex justify-between">
          <img src={telegram} alt="telegram" className="mr-5" />
          <img src={instagram} alt="instagram" className="mr-5" />
          <img src={facebook} alt="facebook" className="mr-5" />
          <img src={vk} alt="vk" className="mr-5" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
