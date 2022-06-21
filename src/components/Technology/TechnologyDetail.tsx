import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/data";
import { TDataContext } from "../../shared/types";
import { findData } from "./../../utils/findData";
import TechnologyArticle from "./TechnologyArticle";
import TechnologyImage from "./TechnologyImage";

export type TTechnologyImage = { portrait: string; landscape: string };

export type TTechnology = {
  name: string;
  images: TTechnologyImage;
  description: string;
};

const TechnologyDetail = () => {
  const { technology } = useContext(DataContext) as TDataContext;
  const params = useParams() as { technology: string };

  const technologyFromUrl = findData(
    technology,
    params.technology
  ) as TTechnology;

  if (!technologyFromUrl) {
    return <p>No Data yet...</p>;
  }

  return (
    <>
      <TechnologyImage
        text={technologyFromUrl!.name}
        images={technologyFromUrl.images}
      />
      <TechnologyArticle
        name={technologyFromUrl!.name}
        tag={"The terminology"}
        description={technologyFromUrl!.description}
      />
    </>
  );
};

export default TechnologyDetail;
