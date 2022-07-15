import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import MobileNavList from "./MobileNavList";
import { NavProps } from "../../shared/types";

const MobileNav = ({ routes }: NavProps) => {
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
