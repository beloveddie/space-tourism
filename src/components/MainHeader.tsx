import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import MobileNav from "./MobileNav";
import TabletNav from "./TabletNav";

const routes = [
  { title: "home", url: "/" },
  { title: "destination", url: "/destination" },
  { title: "crew", url: "/crew" },
  { title: "technology", url: "/technology" },
];

export const MainHeader = () => {
  return (
    <header className="w-full bg-transparent fixed top-0 p-4 flex w-100 justify-between items-center">
      <Link to="/">
        <img src={logo} alt="space tourism logo" />
      </Link>
      <MobileNav routes={routes} />
      <TabletNav />
    </header>
  );
};
