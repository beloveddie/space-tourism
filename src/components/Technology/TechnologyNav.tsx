import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";
import { isActive } from "../../utils/isActive";
import { slugify } from "./../../utils/slugify";

type TTechnologyNavProps = {
  technologyLinks: TPageLinks;
  activeLink: string;
};

const TechnologyNav = ({
  technologyLinks,
  activeLink,
}: TTechnologyNavProps) => {
  return (
    <ul className="mt-6 flex gap-3 justify-center w-full md:mt-14 lg:flex-col lg:mt-0 lg:h-[23rem]">
      {technologyLinks.map((technologyLink, index) => (
        <li key={nanoid()}>
          <Link
            to={`/technology/${slugify(technologyLink)}`}
            className={`flex justify-center items-center bg-transparent border w-[60px] h-[60px] rounded-full border-primary/20 hover:border-primary/50 md:w-20 md:h-20 md:text-2xl ${
              isActive(activeLink, slugify(technologyLink))
                ? "bg-primary text-dark"
                : ""
            }`}
          >
            {index + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TechnologyNav;
