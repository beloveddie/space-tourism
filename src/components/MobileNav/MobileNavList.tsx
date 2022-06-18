import React from "react";
import MobileNavListItem, { TItem } from "./MobileNavListItem";
import { nanoid } from "nanoid";

export type TItems = TItem[];

type TItemsProps = {
  items: TItems;
};

const MobileNavList = ({ items }: TItemsProps) => {
  return (
    <ul className="absolute backdrop-blur-2xl bg-primary/10 w-[70vw] h-screen   right-0 top-0 pt-28 pl-8">
      {items.map((item, index) => (
        <MobileNavListItem item={item} index={String(index)} key={nanoid()} />
      ))}
    </ul>
  );
};

export default MobileNavList;
