import React from "react";
import SideNumbers from "../components/ui/SideNumbers";
import Title from "../components/ui/Title";
import moon from "../assets/destination/image-moon.png";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const destinationLinks = ["moon", "mars", "europa", "titan"];

const Destination = () => {
  return (
    <section className="Destination min-h-screen w-full text-center">
      <div className="pt-28 flex justify-center gap-3">
        <SideNumbers index="1" dark={true} />
        <Title title="Pick your destination" />
      </div>
      {/* image document */}
      <div className="w-full flex justify-center mt-8">
        <img src={moon} alt="moon" className="w-44 h-44 text-center" />
      </div>
      {/* destination links */}
      <ul className="flex mt-6 gap-7 justify-center">
        {destinationLinks.map((destinationLink) => (
          <li key={nanoid()}>
            <h5 className="nav-text text-secondary">
              <Link
                to={`/destination/${destinationLink}`}
                className="pb-1 hover:border-b-4 hover:border-primary/20 active:border-primary focus:text-primary focus:border-b-4 focus:border-primary"
              >
                {destinationLink.toUpperCase()}
              </Link>
            </h5>
          </li>
        ))}
      </ul>
      {/* destination article */}
      <article className="pt-4">
        <h2 className="text-[56px]">EUROPA</h2>

        <p className="text-secondary text-base w-11/12 mx-auto pb-10 border-b-2 border-selection">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
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
    </section>
  );
};

export default Destination;
