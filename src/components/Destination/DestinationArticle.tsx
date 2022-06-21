import React from "react";

type TDestinationArticleProps = {
  title: string;
  description: string;
  travel: string;
  distance: string;
};

const DestinationArticle = ({
  title,
  description,
  distance,
  travel,
}: TDestinationArticleProps) => {
  return (
    <article className="pt-4">
      <h2 className="text-[56px]">{title.toUpperCase()}</h2>

      <p className="text-secondary text-base w-11/12 mx-auto pb-10 border-b-2 border-selection leading-8">
        {description}
      </p>

      <footer className=" pt-5">
        <div className="pb-8">
          <p className="sub-heading-2 text-secondary leading-loose">
            AVG. DISTANCE
          </p>
          <p className="sub-heading-1">{distance.toUpperCase()}</p>
        </div>
        <div>
          <p className="sub-heading-2 text-secondary leading-loose">
            EST. TRAVEL TIME
          </p>
          <time className="sub-heading-1 pb-8">{travel.toUpperCase()}</time>
        </div>
      </footer>
    </article>
  );
};

export default DestinationArticle;
