import { NavLink, useMatch } from "react-router-dom";

interface KeyChangesLinkProps {
  route: string;
  title: string;
}

const KeyChangesLink: React.FC<KeyChangesLinkProps> = ({ route, title }) => {
  const activeStyle = {
    borderBottom: "3px solid rgba(199, 80, 0)",
  };
  const match = useMatch(route);

  return (
    <ul>
      <li>
        <NavLink to={route} style={match ? activeStyle : undefined}>
          {title}
        </NavLink>
      </li>
    </ul>
  );
};

import { KeyChangesLinksData } from "../../data/KeyChangesLinksData";

const KeyChangesHeader: React.FC = () => {
  return (
    <div className="flex items-center h-full py-6 border-b border-b-border border-opacity-20">
      <div className="flex space-x-12 px-8">
        {KeyChangesLinksData.map(({ id, title, route }) => (
          <KeyChangesLink key={id} route={route} title={title} />
        ))}
      </div>
    </div>
  );
};

export default KeyChangesHeader;
