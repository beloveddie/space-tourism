import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import { routes } from "../shared/routes";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TabletNav from "./TabletNav";

export const MainHeader = () => {
  return (
    <header className="w-full bg-transparent fixed top-0 p-4 flex w-100 justify-between items-center md:p-8 lg:top-8">
      <div className="flex gap-7 items-center">
        <Link to="/">
          <img src={logo} alt="space tourism logo" className="md:w-12" />
        </Link>
        <div className="bg-primary/5 w-100 h-[1px] w-[420px] hidden lg:block"></div>
      </div>
      <MobileNav routes={routes} />
      <TabletNav routes={routes} />
      <DesktopNav routes={routes} />
    </header>
  );
};
