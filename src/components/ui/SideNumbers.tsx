import React from "react";
import H5 from "./H5";

type TSideNumber = string;

type TSideNumbersProps = {
  index: TSideNumber;
  dark?: boolean;
};

const SideNumbers = ({ index, dark }: TSideNumbersProps) => {
  if (dark) {
    return (
      <h5 className="text-xl text-primary tracking-[2.7px] uppercase text-primary/25">
        {0 + index}
      </h5>
    );
  }

  return (
    <H5>
      <span className="font-bold">{0 + index}</span>
    </H5>
  );
};

export default SideNumbers;
