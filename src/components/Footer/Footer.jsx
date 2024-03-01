import React from "react";
import dot from "../../img/icons/dot.svg";
import logo from "../../img/background/StartLand-f.svg";
import telegram from "../../img/socials/telegramm.svg";
import instagram from "../../img/socials/instagramm.svg";
import facebook from "../../img/socials/facebook.svg";
import vk from "../../img/socials/vk.svg";

function Footer() {
  return (
    <footer className="py-8 px-2 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <span className="flex items-center">
          <img src={logo} alt="logo" className="mr-2" />
          <img src={dot} alt="Dot" />
        </span>

        <span className="mr-3 text-lg font-light text-white">
          2021. StartLand Публичная офферта
        </span>

        <div className="flex justify-center md:justify-between mt-4 md:mt-0">
          <img src={telegram} alt="telegram" className="mr-5" />
          <a href=" https://www.instagram.com/atyrautechinvest.kz/">
            <img src={instagram} alt="instagram" className="mr-5" />
          </a>
          <a href="https://www.facebook.com/AtyrauTechInvest?mibextid=LQQJ4d">
            <img src={facebook} alt="facebook" className="mr-5" />
          </a>
          <img src={vk} alt="vk" className="mr-5" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
