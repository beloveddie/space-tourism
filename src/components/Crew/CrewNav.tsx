import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CrewNav = () => {
  return (
    <ul className="flex mt-8 gap-7 justify-center mx-auto w-full">
      <Link
        to="#"
        className="text-primary/20 hover:text-primary/50 focus:text-primary text-[12px]"
      >
        <BsCircleFill />
      </Link>
    </ul>
  );
};

export default CrewNav;
