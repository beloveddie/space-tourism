import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DestinationArticle from "./DestinationArticle";
import DestinationImage from "./DestinationImage";
import DataContext from "../../context/data";
import { TDataContext, TImages } from "../../shared/types";
import { destinationLinks } from "./DestinationLayout";
import DestinationNav from "./DestinationNav";

export type TDestination = {
  name: string;
  description: string;
  distance: string;
  images: TImages;
  travel: string;
};

const DestinationDetail = () => {
  const { destinations } = useContext(DataContext) as TDataContext;
  const params = useParams() as { destination: string };

  const destinationFromUrl = destinations.find(
    (destination) =>
      destination.name.toLowerCase() === params.destination.toLowerCase()
  );

  return (
    <div className="lg:flex lg:gap-32">
      <DestinationImage
        images={destinationFromUrl!.images}
        text={destinationFromUrl!.name}
      />

      <div>
        <DestinationNav
          destinationLinks={destinationLinks}
          activeLink={params.destination}
        />
        <DestinationArticle
          title={destinationFromUrl!.name}
          description={destinationFromUrl!.description}
          travel={destinationFromUrl!.travel}
          distance={destinationFromUrl!.distance}
        />
      </div>
    </div>
  );
};

export default DestinationDetail;
