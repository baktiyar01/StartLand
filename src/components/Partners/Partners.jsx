import React from "react";
import { Element } from "react-scroll";
import partner1 from "../../img/partners/lenel.svg";
import partner2 from "../../img/partners/google.svg";
import partner3 from "../../img/partners/axis_logo.svg";
import partner4 from "../../img/partners/traka.svg";
import partner5 from "../../img/partners/microsoft.svg";
import partner6 from "../../img/partners/aveva.svg";
import partner7 from "../../img/partners/xerox.svg";
import partner8 from "../../img/partners/lenovo.svg";
import partner9 from "../../img/partners/hp.svg";
import partner10 from "../../img/partners/vmware.svg";
import partner11 from "../../img/partners/h3c.svg";
import partner12 from "../../img/partners/3cx.svg";
import partner13 from "../../img/partners/veeam.svg";
import partner14 from "../../img/partners/Logitech.svg";
import partner15 from "../../img/partners/dell.svg";
import partner16 from "../../img/partners/acronic.svg";
import PartnerCard from "./PartnerCard";

const partners = [
  { imgSrc: partner1, altText: "partner1" },
  { imgSrc: partner2, altText: "partner2" },
  { imgSrc: partner3, altText: "partner3" },
  { imgSrc: partner4, altText: "partner4" },
  { imgSrc: partner5, altText: "partner5" },
  { imgSrc: partner6, altText: "partner6" },
  { imgSrc: partner7, altText: "partner7" },
  { imgSrc: partner8, altText: "partner8" },
  { imgSrc: partner9, altText: "partner9" },
  { imgSrc: partner10, altText: "partner10" },
  { imgSrc: partner11, altText: "partner11" },
  { imgSrc: partner12, altText: "partner12" },
  { imgSrc: partner13, altText: "partner13" },
  { imgSrc: partner14, altText: "partner14" },
  { imgSrc: partner15, altText: "partner15" },
  { imgSrc: partner16, altText: "partner16" },
];

const Partners = () => {
  return (
    <Element name="partners" className="relative">
      <div className="mt-12 my-12 mr-20 ">
        <h2 className="text-4xl mb-5">
          Наши <span className="text-blue">партнеры</span>
        </h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-10 ">
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              imgSrc={partner.imgSrc}
              altText={partner.altText}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Partners;
