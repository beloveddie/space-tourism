import { nanoid } from "nanoid";
import React from "react";
import { TItems } from "../../shared/types";
import DesktopNavItem from "./DesktopNavItem";

type TDesktopItemsProps = {
  items: TItems;
  activeNavLink: string;
};

const TabletNavList = ({ items, activeNavLink }: TDesktopItemsProps) => {
  return (
    <ul className="flex gap-10">
      {items.map((item, index) => (
        <DesktopNavItem
          key={nanoid()}
          item={item}
          index={index.toString()}
          activeNavLink={activeNavLink}
        />
      ))}
    </ul>
  );
};

export default TabletNavList;
