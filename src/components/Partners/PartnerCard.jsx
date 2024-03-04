import React from "react";

const PartnerCard = ({ imgSrc, altText }) => {
  return (
    <div className="p-3 rounded shadow border border-gray-300 flex justify-center">
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default PartnerCard;
