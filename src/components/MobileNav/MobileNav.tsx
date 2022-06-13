import React, { ReactNode, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileNavList from "./MobileNavList";

export type MobileNavProps = {
  children?: ReactNode;
  logo: string;
};

const routes = [
  { title: "home", url: "/" },
  { title: "destination", url: "/destination" },
  { title: "crew", url: "/crew" },
  { title: "technology", url: "/technology" },
];

const MobileNav = ({ children, logo }: MobileNavProps) => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  return (
    <>
      <nav className="flex w-100 justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="space tourism logo" />
        </Link>
        {!showMenuBar ? (
          <AiOutlineMenu
            className="text-4xl text-secondary font-bold cursor-pointer"
            role="button"
            onClick={() => {
              setShowMenuBar(!showMenuBar);
            }}
          />
        ) : (
          <IoMdClose
            className="text-4xl text-secondary font-bold cursor-pointer"
            role="button"
            onClick={() => {
              setShowMenuBar(!showMenuBar);
            }}
          />
        )}
      </nav>
      {showMenuBar && <MobileNavList items={routes} />}
    </>
  );
};

export default MobileNav;
