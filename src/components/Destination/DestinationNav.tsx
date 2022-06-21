import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";

type TDestinationNavProps = {
  destinationLinks: TPageLinks;
};

const DestinationNav = ({ destinationLinks }: TDestinationNavProps) => {
  // automatically set active state to the first link in the array..
  const [activeLink, setActiveLink] = useState<string>("0");

  return (
    <ul className="flex mt-56 gap-7 justify-center mx-auto w-full">
      {destinationLinks.map((destinationLink, index) => (
        <li key={nanoid()}>
          <h5 className="nav-text text-secondary">
            <Link
              id={index.toString()}
              to={`/destination/${destinationLink}`}
              className={`pb-1 hover:border-b-4 hover:border-primary/20 ${
                activeLink === index.toString()
                  ? " border-primary text-primary border-b-4"
                  : ""
              }`}
              onClick={(e) => {
                setActiveLink(e.currentTarget.id);
              }}
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
function useParams(): { destination: string } {
  throw new Error("Function not implemented.");
}
