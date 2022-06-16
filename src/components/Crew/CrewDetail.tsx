import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/data";
import { TDataContext, TImages } from "../../shared/types";
import CrewArticle from "./CrewArticle";
import CrewImage from "./CrewImage";
import CrewNav from "./CrewNav";

export type TCrew = {
  name: string;
  bio: string;
  role: string;
  images: TImages;
};

const crewNavLinks = [
  "anousheh-ansari",
  "victor-glover",
  "mark-shuttleworth",
  "douglas-hurley",
];

const CrewDetail = () => {
  const { crew } = useContext(DataContext) as TDataContext;
  const params = useParams() as { crew: string };

  const crewFromUrl = crew.find(
    (crewMember) =>
      crewMember.name.toLowerCase() ===
      params.crew.replace("-", " ").toLowerCase()
  );

  return (
    <>
      <div className="w-[90%] h-auto mx-auto border-b-[0.14rem] border-selection">
        <CrewImage images={crewFromUrl!.images} text={crewFromUrl!.name} />
      </div>
      <CrewNav crewNavLinks={crewNavLinks} />
      <CrewArticle
        name={crewFromUrl!.name}
        role={crewFromUrl!.role}
        bio={crewFromUrl!.bio}
      />
    </>
  );
};

export default CrewDetail;
