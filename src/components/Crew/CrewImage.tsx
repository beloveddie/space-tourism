import { TImages } from "../../shared/types";

type TCrewImageProps = {
  images: TImages;
  text: string;
};

const CrewImage = ({ images, text }: TCrewImageProps) => {
  return (
    <picture>
      <source srcSet={images.webp} />
      <img src={images.png} alt={text} className="w-56 h-60 mx-auto" />
    </picture>
  );
};

export default CrewImage;
