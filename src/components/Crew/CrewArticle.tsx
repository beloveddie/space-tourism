import React from "react";

type TCrewArticleProps = {
  name: string;
  role: string;
  bio: string;
};

const CrewArticle = ({ name, role, bio }: TCrewArticleProps) => {
  return (
    <article className="pt-9 lg:pb-0">
      <h5 className="text-base text-primary/50 md:text-2xl">
        {role.toUpperCase()}
      </h5>
      <h4 className="md:text-[40px]">{name.toUpperCase()}</h4>
      <p className="text-secondary pt-4 text-base w-[90%] mx-auto pb-4 leading-7 md:w-[592px] lg:pb-0 lg:w-[444px] lg:pr-6">
        {bio}
      </p>
    </article>
  );
};

export default CrewArticle;
