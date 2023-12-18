import React from "react";
import Card from "./card";

const List = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
};

export default List;
