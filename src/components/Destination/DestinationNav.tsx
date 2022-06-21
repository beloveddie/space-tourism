import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { TPageLinks } from "../../shared/types";
import { isActive } from "../../utils/isActive";

type TDestinationNavProps = {
  destinationLinks: TPageLinks;
  activeLink: string;
};

const DestinationNav = ({
  destinationLinks,
  activeLink,
}: TDestinationNavProps) => {
  return (
    <ul className="flex mt-4 gap-7 justify-center mx-auto w-full">
      {destinationLinks.map((destinationLink, index) => (
        <li key={nanoid()}>
          <h5 className="nav-text text-secondary">
            <Link
              id={index.toString()}
              to={`/destination/${destinationLink}`}
              className={`pb-1 hover:border-b-4 hover:border-primary/20 ${
                isActive(activeLink, destinationLink)
                  ? " border-primary text-primary border-b-4"
                  : ""
              }`}
            >
              {destinationLink.toUpperCase()}
            </Link>
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default DestinationNav;
