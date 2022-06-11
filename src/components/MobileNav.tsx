import React, { ReactNode } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export type MobileNavProps = {
  children?: ReactNode;
  logo: string;
};

const MobileNav = ({ children, logo }: MobileNavProps) => {
  return (
    <nav className="flex w-100 justify-between items-center ">
      <Link to="/">
        <img src={logo} alt="space tourism logo" />
      </Link>
      <AiOutlineMenu className="text-2xl text-secondary font-bold" />
    </nav>
  );
};

export default MobileNav;
