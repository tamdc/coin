import React from "react";
import FlyoutMenu from "./flyout-menu";

const Card = ({ src, alt }) => {
  return (
    <div className="relative w-full md:w-1/2 min-h-[238px]">
      <img src={src} alt={alt} className="rounded-xl" />
      <FlyoutMenu />
    </div>
  );
};

export default Card;
