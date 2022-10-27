import { useState } from "react";
import Box from "./Box";

const fillArray = () => {
  let arr = [];

  for (let i = 0; i < 100; i++) {
    arr.push(0);
  }

  return arr;
};

const Boxes = () => {
  const [array] = useState(fillArray);

  return (
    <>
      {array.map((element, index) => {
        return (
          <Box
            key={index}
            color={index % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
          />
        );
      })}
    </>
  );
};

export default Boxes;
