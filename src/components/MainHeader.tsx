import logo from "../assets/shared/logo.svg";
import MobileNav from "./MobileNav";

const routes = [
  { title: "home", url: "/" },
  { title: "destination", url: "/destination" },
  { title: "crew", url: "/crew" },
  { title: "technology", url: "/technology" },
];

export const MainHeader = () => {
  return (
    <header className="w-full bg-transparent fixed top-0 p-4">
      <MobileNav logo={logo} routes={routes} />
    </header>
  );
};
