import React from "react";
import { Link } from "react-router-dom";

export type TItem = { title: string; url: string };

export type TItemProps = {
  item: TItem;
  index: string;
};

const MobileNavListItem = ({ item, index }: TItemProps) => {
  return (
    <li className="py-5">
      <Link to={item.url}>
        <span className="flex">
          <h5 className="text-xl text-primary tracking-[2.7px]">
            {0 + index}&nbsp;&nbsp;
            {item.title.toUpperCase()}
          </h5>
        </span>
      </Link>
    </li>
  );
};

export default MobileNavListItem;
