import { TImages } from "../../shared/types";

type TCrewImageProps = {
  images: TImages;
  text: string;
};

const CrewImage = ({ images, text }: TCrewImageProps) => {
  return (
    <picture>
      <source srcSet={images.webp} />
      <img
        src={images.png}
        alt={text}
        className="w-56 h-60 mx-auto md:mt-[4.8rem] md:w-[434px] md:h-[532px] lg:w-[615px]"
      />
    </picture>
  );
};

export default CrewImage;
