import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";

type TCrewNavProps = {
  crewNavLinks: TPageLinks;
};
const CrewNav = ({ crewNavLinks }: TCrewNavProps) => {
  return (
    <ul className="flex mt-8 gap-7 justify-center mx-auto w-full">
      {crewNavLinks.map((crewNavLink) => (
        <Link
          to={`/crew/${crewNavLink}`}
          className="text-primary/20 hover:text-primary/50 focus:text-primary text-[12px]"
        >
          <BsCircleFill />
        </Link>
      ))}
    </ul>
  );
};

export default CrewNav;
