import React from "react";
import List from "./list";

const data = [
  {
    src: "../assets/dog2.jpg",
    alt: "dog",
  },
  {
    src: "../assets/dog3.jpg",
    alt: "dog",
  },
  {
    src: "../assets/dog4.jpg",
    alt: "dog",
  },
  {
    src: "../assets/dog6.jpg",
    alt: "dog",
  },
];

const Main = () => {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <List data={data} />
    </div>
  );
};

export default Main;
