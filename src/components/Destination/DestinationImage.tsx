import React from "react";

export type TDestinationImages = { png: string; webp: string };

export type TDestinationImageProps = {
  images: TDestinationImages;
  text: string;
};

const DestinationImage = ({ images, text }: TDestinationImageProps) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <picture className="w-44 h-44 text-center">
        <source srcSet={images.webp} />
        <img src={images.png} alt={text} />
      </picture>
    </div>
  );
};

export default DestinationImage;
