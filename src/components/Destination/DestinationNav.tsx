import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";

type TDestinationLinks = string[];

type TDestinationNavProps = {
  destinationLinks: TDestinationLinks;
};

const DestinationNav = ({ destinationLinks }: TDestinationNavProps) => {
  return (
    <ul className="flex mt-56 gap-7 justify-center mx-auto w-full">
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
  );
};

export default DestinationNav;
