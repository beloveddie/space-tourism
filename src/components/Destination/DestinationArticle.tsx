import React from "react";

const DestinationArticle = () => {
  return (
    <article className="pt-12">
      <h2 className="text-[56px]">EUROPA</h2>

      <p className="text-secondary text-base w-11/12 mx-auto pb-10 border-b-2 border-selection">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <footer className=" pt-5">
        <div className="pb-8">
          <p className="sub-heading-2 text-secondary leading-loose">
            AVG. DISTANCE
          </p>
          <p className="sub-heading-1">384,400 KM</p>
        </div>
        <div>
          <p className="sub-heading-2 text-secondary leading-loose">
            EST. TRAVEL TIME
          </p>
          <time className="sub-heading-1 pb-8">3 DAYS</time>
        </div>
      </footer>
    </article>
  );
};

export default DestinationArticle;
