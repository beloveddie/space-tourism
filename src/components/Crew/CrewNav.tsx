import { nanoid } from "nanoid";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";
import { isActive } from "../../utils/isActive";
import { slugify } from "../../utils/slugify";

type TCrewNavProps = {
  crewNavLinks: TPageLinks;
  activeLink: string;
};

const CrewNav = ({ crewNavLinks, activeLink }: TCrewNavProps) => {
  return (
    <ul className="flex gap-7 justify-center mx-auto w-full md:mt-8 lg:justify-start lg:mb-5 lg:mt-20">
      {crewNavLinks.map((crewNavLink) => (
        <li key={nanoid()}>
          <Link
            to={`/crew/${slugify(crewNavLink)}`}
            className={`text-primary/20 hover:text-primary/50 ${
              isActive(activeLink, crewNavLink)
                ? " text-primary text-[12px]"
                : ""
            }`}
          >
            <BsCircleFill />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CrewNav;
