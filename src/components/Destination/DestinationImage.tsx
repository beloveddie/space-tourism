import React from "react";
import { TImages } from "../../shared/types";
import PageImageCnt from "../ui/PageImageCnt";

export type TDestinationImageProps = {
  images: TImages;
  text: string;
};

const DestinationImage = ({ images, text }: TDestinationImageProps) => {
  return (
    <PageImageCnt>
      <picture className="w-44 h-44">
        <source srcSet={images.webp} />
        <img src={images.png} alt={text} />
      </picture>
    </PageImageCnt>
  );
};

export default DestinationImage;
