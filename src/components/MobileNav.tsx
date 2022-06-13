import React, { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

export type MobileNavProps = {
  children?: ReactNode;
  logo: string;
};

const MobileNav = ({ children, logo }: MobileNavProps) => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  return (
    <>
      <nav className="flex w-100 justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="space tourism logo" />
        </Link>
        <AiOutlineMenu
          className="text-2xl text-secondary font-bold cursor-pointer"
          role="button"
          onClick={() => {
            setShowMenuBar(!showMenuBar);
          }}
        />
      </nav>
      {showMenuBar && <MenuBar />}
    </>
  );
};

export default MobileNav;
