import React from "react";

import { TTechnologyImage } from "./TechnologyDetail";

export type TTechnologyProps = {
  images: TTechnologyImage;
  text: string;
};
const TechnologyImage = ({ images, text }: TTechnologyProps) => {
  return (
    <picture>
      <img src={images.landscape} alt={text} />
    </picture>
  );
};

export default TechnologyImage;
