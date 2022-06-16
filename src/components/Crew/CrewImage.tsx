import React from "react";
import { TImages } from "../../shared/types";
import PageImageCnt from "../ui/PageImageCnt";

type TCrewImageProps = {
  images: TImages;
  text: string;
};

const CrewImage = ({ images, text }: TCrewImageProps) => {
  return (
    <PageImageCnt>
      <picture className="w-[226.25px]">
        <source srcSet={images.webp} />
        <img src={images.png} alt={text} />
      </picture>
    </PageImageCnt>
  );
};

export default CrewImage;
