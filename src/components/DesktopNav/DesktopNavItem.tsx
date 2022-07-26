import React from "react";
import { Link } from "react-router-dom";
import { TItem } from "../../shared/types";
import { isActive } from "../../utils/isActive";
import H5 from "../ui/H5";
import SideNumbers from "../ui/SideNumbers";

type DesktopItemProps = {
  item: TItem;
  index: string;
  activeNavLink: string;
};
const TabletNavItem = ({ item, index, activeNavLink }: DesktopItemProps) => {
  return (
    <li
      className={`flex border-primary h-28 items-center ${
        isActive(activeNavLink, item.title) && "border-b-4"
      }`}
    >
      <Link to={item.url} className="flex gap-2">
        <SideNumbers index={index} />
        <H5>{item.title.toUpperCase()}</H5>
      </Link>
    </li>
  );
};

export default TabletNavItem;
