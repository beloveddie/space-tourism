import React from "react";

type TCrewArticleProps = {
  name: string;
  role: string;
  bio: string;
};

const CrewArticle = ({ name, role, bio }: TCrewArticleProps) => {
  return (
    <article className="pt-9">
      <h5 className="text-base text-primary/50">{role.toUpperCase()}</h5>
      <h4>{name.toUpperCase()}</h4>
      <p className="text-secondary pt-4 text-base w-[90%] mx-auto pb-4 leading-7">
        {bio}
      </p>
    </article>
  );
};

export default CrewArticle;
