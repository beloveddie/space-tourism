import React from "react";
import H5 from "./H5";

export type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <H5>{title}</H5>;
};

export default Title;
