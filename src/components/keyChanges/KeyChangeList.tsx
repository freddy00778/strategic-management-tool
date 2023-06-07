import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { NavLinksProps } from "../../models/NavLinks";
import * as Tooltip from "@radix-ui/react-tooltip";
interface KeyChangeListProps {
  data: NavLinksProps[];
  text?: string;
}

const KeyChangeList: React.FC<KeyChangeListProps> = ({ data, text }) => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  const handleActiveRoute = (route: string) => {
    setActiveRoute(route);
  };

  const isActive = (route: string) => {
    return activeRoute === route;
  };

  return (
    <div className="h-full space-y-5 px-6 overflow-y-auto py-4 max-h-[900px] scrollbar-thin scrollbar-thumb-zinc-200">
      {data.map(({ id, title, image, route }) => (
        <div key={id}>
          <ul>
            <li>
              <Link
                className={`flex space-x-4 px-4 py-4 text-[14px]  ${
                  isActive(route)
                    ? "bg-primary-50 font-medium rounded-xl text-primary-500"
                    : ""
                }`}
                to={route}
                onClick={() => handleActiveRoute(route)}
              >
                <img src={image} alt="" />
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <h1>{title}</h1>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content sideOffset={5}>
                        "{text}"
                        <Tooltip.Arrow />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default KeyChangeList;
