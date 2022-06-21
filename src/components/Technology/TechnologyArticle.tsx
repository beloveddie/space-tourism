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
    <article className="text-center">
      <h5 className="text-base text-secondary">{tag.toUpperCase()}&nbsp;...</h5>
      <h4>{name.toUpperCase()}</h4>
      <p className="mt-3 mb-3 text-base text-secondary w-11/12 leading-6 mx-auto">
        {description}
      </p>
    </article>
  );
};

export default TechnologyArticle;
