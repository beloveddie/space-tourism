import { TCrew } from "../components/Crew/CrewDetail";
import { TDestination } from "../components/Destination/DestinationDetail";
import { TTechnology } from "../components/Technology/TechnologyDetail";
import { reslugify } from "./reslugify";

type TExpectedData = TDestination[] & TCrew[] & TTechnology[];

export const findData = (data: [], searchString: string): unknown => {
  return data.find(
    (item: { name: string }) =>
      item.name.toLowerCase() === reslugify(searchString.toLowerCase())
  );
};
