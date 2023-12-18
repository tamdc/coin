import React from "react";
import dog from "../assets/dog2.jpg";

const Card = ({ src, alt }) => {
  return (
    <div>
      <img src={require(src).default} alt={alt} />
      {/* test */}
    </div>
  );
};

export default Card;
