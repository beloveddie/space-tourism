import { TCrew } from "../components/Crew/CrewDetail";
import { TDestination } from "../components/Destination/DestinationDetail";

export type TImages = { png: string; webp: string };

export type TDataContext = {
  destinations: TDestination[];
  crew: TCrew[];
  technology: [];
};

export type TPageLinks = string[];

export type TSetShowMobileMenuBar = React.Dispatch<
  React.SetStateAction<boolean>
>;

export type TItem = { title: string; url: string };

export type TItems = TItem[];

export type NavProps = {
  routes: TItem[];
};
