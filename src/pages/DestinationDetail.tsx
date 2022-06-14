import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/data";

type TDataContext = {
  destinations: TDestination[];
  crew: [];
  technology: [];
};

type TDestination = {
  name: string;
  description: string;
  distance: string;
  images: {};
  travel: string;
};

// type TDestinations = TDestination[];

const DestinationDetail = () => {
  const { destinations } = useContext(DataContext) as TDataContext;
  const params = useParams() as { destination: string };

  const destinationFromUrl = destinations.find(
    (destination) =>
      destination.name.toLowerCase() === params.destination.toLowerCase()
  );

  console.log(destinationFromUrl);
  return <div>DestinationDetail</div>;
};

export default DestinationDetail;
