import React from "react";
import Card from "./card";

const List = ({ data }) => {
  return (
    <div className="flex flex-column">
      {data.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
};

export default List;
