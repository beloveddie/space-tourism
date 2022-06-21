import React from "react";
import { Link } from "react-router-dom";
import { TSetShowMobileMenuBar } from "../../shared/types";
import H5 from "../ui/H5";
import SideNumbers from "../ui/SideNumbers";

export type TItem = { title: string; url: string };

type TItemProps = {
  item: TItem;
  index: string;
  setShowMenuBar: TSetShowMobileMenuBar;
};

const MobileNavListItem = ({ item, index, setShowMenuBar }: TItemProps) => {
  return (
    <li className="py-5">
      <Link to={item.url} onClick={() => setShowMenuBar(false)}>
        <span className="flex gap-2">
          <SideNumbers index={index} />
          <H5>{item.title.toUpperCase()}</H5>
        </span>
      </Link>
    </li>
  );
};

export default MobileNavListItem;
