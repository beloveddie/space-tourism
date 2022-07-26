import React from "react";
import MobileNavListItem from "./MobileNavListItem";
import { nanoid } from "nanoid";
import { TItems, TSetShowMobileMenuBar } from "../../shared/types";

type TItemsProps = {
  items: TItems;
  setShowMenuBar: TSetShowMobileMenuBar;
};

const MobileNavList = ({ items, setShowMenuBar }: TItemsProps) => {
  return (
    <ul className="absolute backdrop-blur-2xl bg-primary/10 w-[70vw] h-screen right-0 top-0 pt-28 pl-8">
      {items.map((item, index) => (
        <MobileNavListItem
          item={item}
          index={String(index)}
          key={nanoid()}
          setShowMenuBar={setShowMenuBar}
        />
      ))}
    </ul>
  );
};

export default MobileNavList;
