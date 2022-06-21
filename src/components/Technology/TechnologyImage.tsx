import React from "react";

import { TTechnologyImage } from "./TechnologyDetail";

export type TTechnologyProps = {
  images: TTechnologyImage;
  text: string;
};
const TechnologyImage = ({ images, text }: TTechnologyProps) => {
  return (
    <picture>
      <img src={images.landscape} alt={text} className="mt-6 w-full" />
    </picture>
  );
};

export default TechnologyImage;
