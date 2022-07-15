import { nanoid } from "nanoid";
import React from "react";
import { TItems } from "../../shared/types";
import TabletNavItem from "./TabletNavItem";

type TTabletItemsProps = {
  items: TItems;
  activeNavLink: string;
};

const TabletNavList = ({ items, activeNavLink }: TTabletItemsProps) => {
  return (
    <ul className="flex gap-10">
      {items.map((item, index) => (
        <TabletNavItem
          key={nanoid()}
          item={item}
          activeNavLink={activeNavLink}
        />
      ))}
    </ul>
  );
};

export default TabletNavList;
