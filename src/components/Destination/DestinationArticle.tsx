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
    <article className="mt-4 pb-8 md:mt-8">
      <h2 className="text-[56px] md:text-[80px]">{title.toUpperCase()}</h2>

      <p className="text-secondary text-base w-11/12 mx-auto pb-10 border-b-2 border-selection leading-7 md:w-[573px] lg:mx-0 lg:w-[400px]">
        {description}
      </p>

      <footer className="mt-5 flex flex-col justify-center md:mt-7 md:flex-row md:gap-16 lg:justify-start">
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
