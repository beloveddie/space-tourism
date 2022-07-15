import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { TItem } from "./MobileNavListItem";
import MobileNavList from "./MobileNavList";

export type MobileNavProps = {
  routes: TItem[];
};

const MobileNav = ({ routes }: MobileNavProps) => {
  const [showMenuBar, setShowMenuBar] = useState<boolean>(false);
  return (
    <nav className="md:hidden flex">
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
