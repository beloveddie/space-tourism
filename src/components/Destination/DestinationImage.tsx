import React from "react";
import PageImageCnt from "../ui/PageImageCnt";

export type TDestinationImages = { png: string; webp: string };

export type TDestinationImageProps = {
  images: TDestinationImages;
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
