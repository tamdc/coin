import React from "react";
import List from "./list";

const data = [
  {
    src: "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "dog",
  },
  {
    src: "https://images.pexels.com/photos/939478/pexels-photo-939478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "dog",
  },
  {
    src: "https://images.pexels.com/photos/162829/squirrel-sciurus-vulgaris-major-mammal-mindfulness-162829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "dog",
  },
  {
    src: "https://images.pexels.com/photos/1692984/pexels-photo-1692984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "dog",
  },
];

const Main = () => {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold text-center mb-4">Academy app</h1>
      <List data={data} />
    </div>
  );
};

export default Main;
