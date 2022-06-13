import React from "react";
import MobileNavListItem, { TItem } from "./MobileNavListItem";

export type TItems = TItem[];

export type TItemsProps = {
  items: TItems;
};

const MobileNavList = ({ items }: TItemsProps) => {
  return (
    <ul className="fixed backdrop-blur-2xl bg-primary/10 w-[70vw] h-screen right-0 top-0 -z-10 pt-28 pl-8">
      {items.map((item, index) => (
        <MobileNavListItem item={item} index={String(index)} />
      ))}
    </ul>
  );
};

export default MobileNavList;
