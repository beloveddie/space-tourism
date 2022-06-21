import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { TItem } from "./MobileNavListItem";
import MobileNavList from "./MobileNavList";

export type MobileNavProps = {
  logo: string;
  routes: TItem[];
};

const MobileNav = ({ logo, routes }: MobileNavProps) => {
  const [showMenuBar, setShowMenuBar] = useState<boolean>(false);
  return (
    <nav className="flex w-100 justify-between items-center">
      <Link to="/">
        <img src={logo} alt="space tourism logo" />
      </Link>
      {!showMenuBar ? (
        <AiOutlineMenu
          className="text-4xl text-secondary font-bold cursor-pointer z-20"
          role="button"
          onClick={() => {
            setShowMenuBar(!showMenuBar);
          }}
        />
      ) : (
        <IoMdClose
          className="text-4xl text-secondary font-bold cursor-pointer z-20"
          role="button"
          onClick={() => {
            setShowMenuBar(!showMenuBar);
          }}
        />
      )}
      {showMenuBar && (
        <MobileNavList items={routes} setShowMenuBar={setShowMenuBar} />
      )}
    </nav>
  );
};

export default MobileNav;
