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
    <article className="text-center mt-6 mb-8">
      <h5 className="text-[12px] text-secondary">{tag.toUpperCase()}...</h5>
      <h4 className="">{name.toUpperCase()}</h4>
      <p className="mt-3 mb-3 text-base text-secondary w-11/12 leading-7 mx-auto">
        {description}
      </p>
    </article>
  );
};

export default TechnologyArticle;
