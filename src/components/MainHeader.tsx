import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { routes } from "../shared/routes";
import MobileNav from "./MobileNav";
import TabletNav from "./TabletNav";

export const MainHeader = () => {
  return (
    <header className="w-full bg-transparent fixed top-0 p-4 flex w-100 justify-between items-center md:p-8">
      <Link to="/">
        <img src={logo} alt="space tourism logo" className="md:w-12" />
      </Link>
      <MobileNav routes={routes} />
      <TabletNav routes={routes} />
    </header>
  );
};
