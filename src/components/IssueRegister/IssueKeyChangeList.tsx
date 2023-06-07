import { useLocation, Link } from "react-router-dom";
import { IssueKeyChangeListData } from "../../data/IssueKeyChangeListData";
import { useState } from "react";

const IssueKeyChangeList = () => {
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
      {IssueKeyChangeListData.map(({ id, title, image, route }) => (
        <div>
          <ul>
            <li key={id}>
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
                <h1>{title}</h1>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IssueKeyChangeList;
