import logo from "../assets/shared/logo.svg";
import MobileNav from "./MobileNav";

export const MainHeader = () => {
  return (
    <header className="w-full bg-transparent fixed top-0 p-4">
      <MobileNav logo={logo} />
    </header>
  );
};
