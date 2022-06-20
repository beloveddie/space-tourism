import { TCrew } from "../components/Crew/CrewDetail";
import { TDestination } from "../components/Destination/DestinationDetail";
import { TTechnology } from "../components/Technology/TechnologyDetail";
import { reslugify } from "./reslugify";

type TExpectedData = TDestination[] & TCrew[] & TTechnology[];

export const findData = (data: TExpectedData, searchString: string) => {
  return data.find(
    (item) => item.name.toLowerCase() === reslugify(searchString.toLowerCase())
  );
};
