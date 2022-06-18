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
      <picture>
        <source srcSet={images.webp} />
        <img src={images.png} alt={text} className="w-56 h-60" />
      </picture>
    </PageImageCnt>
  );
};

export default CrewImage;
