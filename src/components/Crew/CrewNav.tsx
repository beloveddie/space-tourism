import { nanoid } from "nanoid";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";

type TCrewNavProps = {
  crewNavLinks: TPageLinks;
};
const CrewNav = ({ crewNavLinks }: TCrewNavProps) => {
  return (
    <ul className="flex gap-7 justify-center mx-auto w-full">
      {crewNavLinks.map((crewNavLink) => (
        <li key={nanoid()}>
          <Link
            to={`/crew/${crewNavLink}`}
            className="text-primary/20 hover:text-primary/50 active:text-primary focus:text-primary text-[12px]"
          >
            <BsCircleFill />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CrewNav;
