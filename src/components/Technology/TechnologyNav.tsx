import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";
import { slugify } from "./../../utils/slugify";

type TTechnologyNavProps = {
  technologyLinks: TPageLinks;
};

const TechnologyNav = ({ technologyLinks }: TTechnologyNavProps) => {
  return (
    <ul className="mt-56 flex gap-3 justify-center w-full">
      {technologyLinks.map((technologyLink, index) => (
        <li key={nanoid()}>
          <Link
            to={`/technology/${slugify(technologyLink)}`}
            className="flex justify-center items-center bg-transparent border w-[60px] h-[60px] rounded-full border-primary/20 hover:border-primary/50 focus:bg-primary focus:text-dark"
          >
            {index + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TechnologyNav;
