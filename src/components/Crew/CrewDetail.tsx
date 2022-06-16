import React from "react";
import CrewArticle from "./CrewArticle";
import CrewImage from "./CrewImage";
import CrewNav from "./CrewNav";

const CrewDetail = () => {
  return (
    <>
      <div className="w-[90%] h-auto mx-auto border-b-[0.14rem] border-selection">
        <CrewImage />
      </div>
      <CrewNav />
      <CrewArticle />
    </>
  );
};

export default CrewDetail;
