import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavProps } from "../../shared/types";
import DesktopNavList from "./DesktopNavList";

const TabletNav = ({ routes }: NavProps) => {
  const params = useParams();
  const [activeNavLink, setActiveNavLink] = useState("");

  useEffect(() => {
    if (!Object.keys(params).toString()) {
      setActiveNavLink("home");
    } else {
      setActiveNavLink(Object.keys(params).toString());
    }
  }, [params]);

  return (
    <nav className="hidden md:hidden lg:flex absolute bg-primary/5 w-100 h-24 top-0 right-0 text-center items-center p-14">
      <DesktopNavList items={routes} activeNavLink={activeNavLink} />
    </nav>
  );
};

export default TabletNav;
