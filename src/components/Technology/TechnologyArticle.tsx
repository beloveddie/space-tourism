import React from "react";

export type TTechnologyArticleProps = {
  name: string;
  tag: string;
  description: string;
};

const TechnologyArticle = ({
  name,
  tag,
  description,
}: TTechnologyArticleProps) => {
  return (
    <article className="text-center mt-6 mb-8 md:mt-14 lg:text-left">
      <h5 className="text-xs text-secondary md:text-base lg:px-[1rem]">
        {tag.toUpperCase()}...
      </h5>
      <h4 className="md:text-[40px] lg:px-[1rem]">{name.toUpperCase()}</h4>
      <p className="mt-3 mb-3 text-base text-secondary w-11/12 leading-7 mx-auto md:w-[458px] md:px-[.5rem] lg:w-[444px] lg:px-[1rem]">
        {description}
      </p>
    </article>
  );
};

export default TechnologyArticle;
